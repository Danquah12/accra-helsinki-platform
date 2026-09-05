-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "vector";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- 1. countries
CREATE TABLE countries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    name_fr VARCHAR(255),
    slug VARCHAR(255) UNIQUE NOT NULL,
    iso_alpha2 CHAR(2) NOT NULL,
    iso_alpha3 CHAR(3) NOT NULL,
    region VARCHAR(100),
    sub_region VARCHAR(100),
    capital VARCHAR(255),
    population BIGINT,
    gdp_per_capita DECIMAL,
    flag_emoji VARCHAR(10),
    map_coordinates JSONB,
    recycling_capacity_score INT CHECK (recycling_capacity_score >= 0 AND recycling_capacity_score <= 100),
    enforcement_score INT CHECK (enforcement_score >= 0 AND enforcement_score <= 100),
    meps_status VARCHAR(100),
    refrigerant_regulations VARCHAR(255),
    ewaste_legislation VARCHAR(255),
    basel_ratified DATE,
    bamako_ratified DATE,
    montreal_ratified DATE,
    kigali_ratified DATE,
    overview_en TEXT,
    overview_fr TEXT,
    featured_image_url TEXT,
    data_last_updated TIMESTAMP WITH TIME ZONE,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. organizations
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(100),
    country_id UUID REFERENCES countries(id) ON DELETE SET NULL,
    website TEXT,
    logo_url TEXT,
    description_en TEXT,
    description_fr TEXT,
    is_partner BOOLEAN DEFAULT false,
    partner_since DATE,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. people
CREATE TABLE people (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255),
    role VARCHAR(255),
    organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
    bio_en TEXT,
    bio_fr TEXT,
    photo_url TEXT,
    email VARCHAR(255),
    published BOOLEAN DEFAULT false,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. sources
CREATE TABLE sources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(100),
    url TEXT,
    description TEXT,
    reliability_score INT CHECK (reliability_score >= 1 AND reliability_score <= 5),
    logo_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. research_papers
CREATE TABLE research_papers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    abstract_en TEXT,
    abstract_fr TEXT,
    full_text TEXT,
    authors JSONB,
    publication_date DATE,
    publisher VARCHAR(255),
    journal VARCHAR(255),
    doi VARCHAR(255),
    url TEXT,
    pdf_url TEXT,
    type VARCHAR(100),
    category VARCHAR(100),
    sub_category VARCHAR(100),
    keywords TEXT[],
    pollutants TEXT[],
    appliance_types TEXT[],
    embedding_status VARCHAR(50) DEFAULT 'pending',
    chunk_count INT DEFAULT 0,
    last_embedded_at TIMESTAMP WITH TIME ZONE,
    source_id UUID REFERENCES sources(id) ON DELETE SET NULL,
    published BOOLEAN DEFAULT false,
    featured BOOLEAN DEFAULT false,
    citation_count INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. research_country_link
CREATE TABLE research_country_link (
    research_id UUID REFERENCES research_papers(id) ON DELETE CASCADE,
    country_id UUID REFERENCES countries(id) ON DELETE CASCADE,
    PRIMARY KEY (research_id, country_id)
);

-- 7. research_org_link
CREATE TABLE research_org_link (
    research_id UUID REFERENCES research_papers(id) ON DELETE CASCADE,
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    PRIMARY KEY (research_id, organization_id)
);

-- 8. document_chunks
CREATE TABLE document_chunks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    research_id UUID REFERENCES research_papers(id) ON DELETE CASCADE,
    chunk_index INT NOT NULL,
    content TEXT NOT NULL,
    token_count INT,
    embedding VECTOR(1536),
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX ON document_chunks USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

-- 9. datasets
CREATE TABLE datasets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description_en TEXT,
    description_fr TEXT,
    source_id UUID REFERENCES sources(id) ON DELETE SET NULL,
    publisher VARCHAR(255),
    publication_date DATE,
    dataset_date_start DATE,
    dataset_date_end DATE,
    methodology TEXT,
    license VARCHAR(255),
    original_url TEXT,
    data_owner VARCHAR(255),
    last_updated DATE,
    csv_url TEXT,
    json_url TEXT,
    excel_url TEXT,
    gis_url TEXT,
    api_endpoint TEXT,
    category VARCHAR(100),
    indicators TEXT[],
    record_count INT,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. dataset_country_link
CREATE TABLE dataset_country_link (
    dataset_id UUID REFERENCES datasets(id) ON DELETE CASCADE,
    country_id UUID REFERENCES countries(id) ON DELETE CASCADE,
    PRIMARY KEY (dataset_id, country_id)
);

-- 11. treaties
CREATE TABLE treaties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    short_name VARCHAR(100),
    type VARCHAR(100),
    adopted_date DATE,
    entered_into_force DATE,
    description_en TEXT,
    description_fr TEXT,
    full_text_url TEXT,
    secretariat VARCHAR(255),
    website TEXT,
    timeline JSONB,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 12. treaty_ratifications
CREATE TABLE treaty_ratifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    treaty_id UUID REFERENCES treaties(id) ON DELETE CASCADE,
    country_id UUID REFERENCES countries(id) ON DELETE CASCADE,
    status VARCHAR(100),
    date DATE,
    notes TEXT,
    UNIQUE (treaty_id, country_id)
);

-- 13. laws
CREATE TABLE laws (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    country_id UUID REFERENCES countries(id) ON DELETE CASCADE,
    type VARCHAR(100),
    category VARCHAR(100),
    status VARCHAR(100),
    enacted_date DATE,
    effective_date DATE,
    description_en TEXT,
    description_fr TEXT,
    full_text_url TEXT,
    meps_details JSONB,
    refrigerant_restrictions JSONB,
    import_restrictions JSONB,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 14. chemicals
CREATE TABLE chemicals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    formula VARCHAR(100),
    cas_number VARCHAR(50),
    type VARCHAR(100),
    health_effects JSONB,
    organs_affected TEXT[],
    env_effects JSONB,
    gwp DECIMAL,
    odp DECIMAL,
    phase_out_date DATE,
    description_en TEXT,
    description_fr TEXT,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 15. refrigerants
CREATE TABLE refrigerants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    ashrae_number VARCHAR(50),
    chemical_name VARCHAR(255),
    formula VARCHAR(100),
    type VARCHAR(100),
    gwp_100yr DECIMAL,
    odp DECIMAL,
    safety_class VARCHAR(50),
    montreal_schedule VARCHAR(255),
    phase_out_baseline_year INT,
    phase_out_complete_year INT,
    kigali_schedule JSONB,
    applications TEXT[],
    alternatives UUID[],
    description_en TEXT,
    description_fr TEXT,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 16. environmental_incidents
CREATE TABLE environmental_incidents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    country_id UUID REFERENCES countries(id) ON DELETE SET NULL,
    location_name VARCHAR(255),
    lat DECIMAL(10, 8),
    lng DECIMAL(11, 8),
    location_type VARCHAR(100),
    geom GEOMETRY(POINT, 4326),
    date_occurred DATE,
    date_discovered DATE,
    category VARCHAR(100),
    severity VARCHAR(50),
    status VARCHAR(50),
    description_en TEXT,
    description_fr TEXT,
    pollutants TEXT[],
    affected_population INT,
    area_affected_km2 DECIMAL,
    photos_videos_documents JSONB,
    reported_by VARCHAR(255),
    source_url TEXT,
    verified BOOLEAN DEFAULT false,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX ON environmental_incidents USING GIST (geom);

-- 17. dumping_sites
CREATE TABLE dumping_sites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    country_id UUID REFERENCES countries(id) ON DELETE SET NULL,
    type VARCHAR(100),
    lat DECIMAL(10, 8),
    lng DECIMAL(11, 8),
    geom GEOMETRY(POINT, 4326),
    description_en TEXT,
    photos JSONB,
    waste_types TEXT[],
    estimated_area_m2 DECIMAL,
    workers_estimate INT,
    health_risks TEXT[],
    status VARCHAR(50),
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 18. dumping_reports
CREATE TABLE dumping_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    report_number VARCHAR(255) UNIQUE NOT NULL,
    reporter_name VARCHAR(255),
    reporter_email VARCHAR(255),
    reporter_phone VARCHAR(50),
    anonymous BOOLEAN DEFAULT false,
    country_id UUID REFERENCES countries(id) ON DELETE SET NULL,
    location_desc TEXT,
    lat DECIMAL(10, 8),
    lng DECIMAL(11, 8),
    date_observed DATE,
    category VARCHAR(100),
    description TEXT NOT NULL,
    waste_types TEXT[],
    estimated_quantity VARCHAR(255),
    photos_videos JSONB,
    status VARCHAR(50) DEFAULT 'submitted',
    admin_notes TEXT,
    assigned_to UUID,
    ip_address INET,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 19. news_articles
CREATE TABLE news_articles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(100),
    content_en TEXT,
    content_fr TEXT,
    excerpt_en TEXT,
    excerpt_fr TEXT,
    featured_image TEXT,
    author_id UUID REFERENCES people(id) ON DELETE SET NULL,
    source_id UUID REFERENCES sources(id) ON DELETE SET NULL,
    source_url TEXT,
    publication_date TIMESTAMP WITH TIME ZONE,
    tags TEXT[],
    published BOOLEAN DEFAULT false,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 20. news_country_link
CREATE TABLE news_country_link (
    news_id UUID REFERENCES news_articles(id) ON DELETE CASCADE,
    country_id UUID REFERENCES countries(id) ON DELETE CASCADE,
    PRIMARY KEY (news_id, country_id)
);

-- 21. videos
CREATE TABLE videos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(100),
    description_en TEXT,
    description_fr TEXT,
    video_url TEXT,
    platform VARCHAR(50),
    embed_id VARCHAR(100),
    thumbnail_url TEXT,
    duration_seconds INT,
    speakers UUID[],
    organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
    year INT,
    tags TEXT[],
    published BOOLEAN DEFAULT false,
    featured BOOLEAN DEFAULT false,
    view_count INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 22. video_country_link
CREATE TABLE video_country_link (
    video_id UUID REFERENCES videos(id) ON DELETE CASCADE,
    country_id UUID REFERENCES countries(id) ON DELETE CASCADE,
    PRIMARY KEY (video_id, country_id)
);

-- 23. media_files
CREATE TABLE media_files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    type VARCHAR(100),
    file_url TEXT NOT NULL,
    thumbnail_url TEXT,
    mime_type VARCHAR(100),
    file_size_bytes BIGINT,
    width INT,
    height INT,
    alt_text VARCHAR(255),
    caption_en TEXT,
    caption_fr TEXT,
    category VARCHAR(100),
    tags TEXT[],
    downloadable BOOLEAN DEFAULT false,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 24. events
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(100),
    description_en TEXT,
    description_fr TEXT,
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    timezone VARCHAR(100),
    venue VARCHAR(255),
    city VARCHAR(255),
    country_id UUID REFERENCES countries(id) ON DELETE SET NULL,
    virtual BOOLEAN DEFAULT false,
    virtual_link TEXT,
    agenda JSONB,
    speakers UUID[],
    outcomes TEXT,
    featured_image TEXT,
    photos_videos_documents JSONB,
    registration_url TEXT,
    registration_open BOOLEAN DEFAULT false,
    max_attendees INT,
    published BOOLEAN DEFAULT false,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 25. courses
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    audience VARCHAR(255),
    description_en TEXT,
    description_fr TEXT,
    modules JSONB,
    difficulty VARCHAR(50),
    duration_hours INT,
    featured_image TEXT,
    prerequisites TEXT,
    learning_outcomes TEXT[],
    presentations_worksheets JSONB,
    published BOOLEAN DEFAULT false,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 26. quizzes
CREATE TABLE quizzes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    questions JSONB,
    passing_score INT DEFAULT 70,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 27. petitions
CREATE TABLE petitions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description_en TEXT,
    description_fr TEXT,
    target VARCHAR(255),
    goal_signatures INT,
    current_signatures INT DEFAULT 0,
    campaign_id UUID,
    category VARCHAR(100),
    featured_image TEXT,
    letter_template TEXT,
    materials JSONB,
    status VARCHAR(50) DEFAULT 'active',
    published BOOLEAN DEFAULT false,
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 28. petition_signatures
CREATE TABLE petition_signatures (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    petition_id UUID REFERENCES petitions(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    country VARCHAR(100),
    organization VARCHAR(255),
    comment TEXT,
    display_name BOOLEAN DEFAULT false,
    verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE (petition_id, email)
);

-- 29. campaigns
CREATE TABLE campaigns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description_en TEXT,
    description_fr TEXT,
    category VARCHAR(100),
    status VARCHAR(50),
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    featured_image TEXT,
    materials JSONB,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 30. appliance_standards
CREATE TABLE appliance_standards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    country_id UUID REFERENCES countries(id) ON DELETE CASCADE,
    appliance_type VARCHAR(100),
    standard_name VARCHAR(255),
    standard_number VARCHAR(100),
    energy_classes JSONB,
    min_energy_class VARCHAR(50),
    refrigerant_allowed TEXT[],
    refrigerant_banned TEXT[],
    max_gwp DECIMAL,
    effective_date DATE,
    mandatory BOOLEAN DEFAULT false,
    source_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 31. import_statistics
CREATE TABLE import_statistics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    country_id UUID REFERENCES countries(id) ON DELETE CASCADE,
    year INT,
    product_category VARCHAR(100),
    hs_code VARCHAR(50),
    import_quantity DECIMAL,
    import_value_usd DECIMAL,
    export_country VARCHAR(100),
    new_percentage DECIMAL,
    used_percentage DECIMAL,
    unusable_percentage DECIMAL,
    source_id UUID REFERENCES sources(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 32. government_agencies
CREATE TABLE government_agencies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    country_id UUID REFERENCES countries(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100),
    website TEXT,
    mandate TEXT,
    contact_info JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 33. projects
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description_en TEXT,
    description_fr TEXT,
    status VARCHAR(50),
    start_date DATE,
    end_date DATE,
    budget DECIMAL,
    currency VARCHAR(10),
    lead_org_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
    funder VARCHAR(255),
    featured_image TEXT,
    outcomes TEXT,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 34. project_country_link
CREATE TABLE project_country_link (
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    country_id UUID REFERENCES countries(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, country_id)
);

-- 35. shipping_routes
CREATE TABLE shipping_routes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    origin_country VARCHAR(100),
    origin_port VARCHAR(100),
    origin_coords JSONB,
    destination_country_id UUID REFERENCES countries(id) ON DELETE CASCADE,
    destination_port VARCHAR(100),
    destination_coords JSONB,
    waste_type VARCHAR(100),
    volume_estimate DECIMAL,
    documented BOOLEAN DEFAULT false,
    source_id UUID REFERENCES sources(id) ON DELETE SET NULL,
    evidence_url TEXT,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 36. admin_users
CREATE TABLE admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50),
    assigned_countries UUID[],
    avatar_url TEXT,
    active BOOLEAN DEFAULT true,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 37. newsletter_subscribers
CREATE TABLE newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    country VARCHAR(100),
    interests TEXT[],
    verified BOOLEAN DEFAULT false,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- 38. ai_conversations
CREATE TABLE ai_conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id VARCHAR(255) NOT NULL,
    assistant_type VARCHAR(100),
    messages JSONB,
    sources_cited UUID[],
    feedback_rating INT CHECK (feedback_rating >= 1 AND feedback_rating <= 5),
    feedback_comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
