import treatiesData from '@/lib/data/treaties.json';
import countriesData from '@/lib/data/countries.json';
import refrigerantsData from '@/lib/data/refrigerants.json';

export interface KnowledgeDocument {
  id: string;
  title: string;
  category: 'treaty' | 'country' | 'refrigerant' | 'chemical' | 'law' | 'general';
  link: string;
  content: string;
  keywords: string[];
}

// Pre-indexed knowledge chunks for high-relevance RAG
export const KNOWLEDGE_BASE: KnowledgeDocument[] = [
  // Treaties
  ...treatiesData.map((t: any) => ({
    id: `treaty-${t.id}`,
    title: t.name,
    category: 'treaty' as const,
    link: `/policy/${t.id}`,
    keywords: [t.name.toLowerCase(), t.short_name?.toLowerCase(), 'treaty', 'convention', 'international law'],
    content: `Treaty: ${t.name} (${t.short_name}). Type: ${t.type}. Adopted: ${t.adopted_date}, Entered into force: ${t.entered_into_force}. Secretariat: ${t.secretariat}. Overview: ${t.description}. Timeline and Milestones: ${JSON.stringify(t.timeline || [])}. Relevance to Africa: Prohibits illicit dumping of hazardous electronic and chemical wastes in African nations, requiring Prior Informed Consent and strict accountability.`
  })),

  // Countries
  ...countriesData.map((c: any) => ({
    id: `country-${c.slug}`,
    title: `${c.name} Environmental Profile & MEPS`,
    category: 'country' as const,
    link: `/countries/${c.slug}`,
    keywords: [c.name.toLowerCase(), c.iso_alpha2.toLowerCase(), c.iso_alpha3.toLowerCase(), 'meps', 'customs', 'regulations', 'recycling'],
    content: `Country: ${c.name} (${c.iso_alpha3}, ${c.region} - ${c.sub_region}). Capital: ${c.capital}, Population: ${c.population}. Recycling Capacity Score: ${c.recycling_capacity_score}/100, Enforcement Score: ${c.enforcement_score}/100. MEPS (Minimum Energy Performance Standards) Status: ${c.meps_status}. Refrigerant Regulations: ${c.refrigerant_regulations}. E-waste Legislation: ${c.ewaste_legislation}. Treaty Ratifications: Basel: ${c.basel_ratified || 'Pending'}, Bamako: ${c.bamako_ratified || 'Pending'}, Montreal Protocol: ${c.montreal_ratified || 'Pending'}, Kigali Amendment: ${c.kigali_ratified || 'Pending'}. Overview: ${c.overview_en}`
  })),

  // Refrigerants
  ...refrigerantsData.map((r: any) => ({
    id: `refrigerant-${r.slug}`,
    title: `Refrigerant ${r.ashraeNumber} (${r.name})`,
    category: 'refrigerant' as const,
    link: `/policy/montreal-protocol/refrigerants`,
    keywords: [r.ashraeNumber.toLowerCase(), r.name.toLowerCase(), r.type.toLowerCase(), 'cooling', 'gwp', 'odp'],
    content: `Refrigerant ${r.ashraeNumber} (${r.name}). Chemical Formula: ${r.formula || 'N/A'}. Type: ${r.type}. Global Warming Potential (GWP 100-yr): ${r.gwp}, Ozone Depletion Potential (ODP): ${r.odp}. ASHRAE Safety Classification: ${r.safetyClass}. Status: ${r.phaseOutStatus}. Typical Applications: ${r.applications?.join(', ') || 'Refrigeration and AC'}. Recommended Natural Alternatives: R-290 (Propane, GWP 3), R-600a (Isobutane, GWP 3), R-744 (CO2, GWP 1).`
  })),

  // Hazardous Chemicals & Pollutants
  {
    id: 'chem-lead',
    title: 'Lead (Pb) E-Waste Toxicity & Health Hazards',
    category: 'chemical',
    link: '/issues/health-impacts/chemicals',
    keywords: ['lead', 'pb', 'heavy metal', 'crts', 'solder', 'neurotoxicity', 'children'],
    content: 'Lead is widely present in solder, CRT glass, batteries, and printed circuit boards. Burning or crude dismantling releases lead dust and fumes. Health effects: Severe neurodevelopmental impairment in children, lower IQ, behavioural disorders, kidney damage, high blood pressure, and reproductive toxicity. Bioaccumulates in bones and teeth.'
  },
  {
    id: 'chem-mercury',
    title: 'Mercury (Hg) in Electronics & Lighting',
    category: 'chemical',
    link: '/issues/health-impacts/chemicals',
    keywords: ['mercury', 'hg', 'switches', 'backlights', 'neurological', 'minamata'],
    content: 'Mercury is found in fluorescent backlights of flat-screen displays, switches, and relays. Health effects: Highly toxic to the central and peripheral nervous system. Inhalation of mercury vapour causes tremors, insomnia, memory loss, neuromuscular effects, and kidney failure. Methylmercury biomagnifies in aquatic food chains.'
  },
  {
    id: 'chem-cadmium',
    title: 'Cadmium (Cd) in Batteries & Semiconductors',
    category: 'chemical',
    link: '/issues/health-impacts/chemicals',
    keywords: ['cadmium', 'cd', 'nicad', 'batteries', 'carcinogen', 'kidney'],
    content: 'Cadmium is used in Ni-Cd rechargeable batteries, semiconductor chips, infrared detectors, and SMD chip resistors. Health effects: Known human carcinogen (Group 1). Causes irreversible kidney tubular dysfunction, osteomalacia (bone softening), and severe pulmonary damage when inhaled during open-air burning.'
  },
  {
    id: 'chem-bfr',
    title: 'Brominated Flame Retardants (BFRs) & Dioxins',
    category: 'chemical',
    link: '/issues/health-impacts/chemicals',
    keywords: ['bfr', 'flame retardants', 'dioxins', 'pbde', 'endocrine', 'plastics'],
    content: 'BFRs such as PBDEs are embedded in computer plastic casings, cables, and circuit boards. Open burning of e-waste plastics produces polybrominated dibenzo-p-dioxins and furans (PBDD/Fs). Health effects: Endocrine disruption, thyroid hormone disturbance, immunological deficits, reproductive harm, and cancer risks.'
  },

  // Key National Import Bans & Regulations
  {
    id: 'law-ghana-li1932',
    title: 'Ghana LI 1932 & LI 2250 Used Appliance Import Prohibition',
    category: 'law',
    link: '/policy/national-laws',
    keywords: ['ghana', 'li 1932', 'li 2250', 'import ban', 'refrigerators', 'ac', 'energy commission', 'kofi agyarko'],
    content: 'Under Energy Efficiency (Refrigerating Appliances) Regulations, 2008 (LI 1932) and subsequent LI 2250, Ghana completely bans the importation, sale, and distribution of used or second-hand refrigerators, freezers, and air conditioners. Violators face confiscation of goods and criminal penalties. Established under Kofi Agyarko leadership at Ghana Energy Commission, yielding over 1,100 GWh in energy savings.'
  },
  {
    id: 'law-nigeria-nesrea',
    title: 'Nigeria NESREA National Environmental Regulations for E-Waste',
    category: 'law',
    link: '/policy/national-laws',
    keywords: ['nigeria', 'nesrea', 'e-waste regulation', 'used electrical', 'port inspection'],
    content: 'Nigeria National Environmental (Electrical/Electronic Sector) Regulations (S.I. No. 23 of 2011) and NESREA enforcement guidelines mandate Extended Producer Responsibility (EPR) and require prior verification for used electrical equipment. Non-functional equipment is legally deemed hazardous waste under the Basel and Bamako Conventions, subjecting illegal import vessels to arrest and mandatory repatriation.'
  },

  // Initiative Background
  {
    id: 'org-csrta-accra-helsinki',
    title: 'Accra-Helsinki Initiative & CSRTA Mandate',
    category: 'general',
    link: '/about/accra-helsinki',
    keywords: ['accra-helsinki', 'csrta', 'mop-36', 'finland', 'ghana', 'kofi agyarko', 'tapio reinikainen'],
    content: 'The Accra-Helsinki Initiative is an informal coalition co-chaired by Ghana (Kofi Agyarko) and Finland (Tapio Reinikainen), inaugurated at MOP-36 in Bangkok (November 2024). Governed under the Chatham House Rule, it brings together African nations, EU partners, UNEP, IGSD, and CCAC to stop the dumping of inefficient, obsolete cooling appliances and hazardous e-waste in Africa and accelerate adoption of climate-friendly natural refrigerants.'
  }
];

export function retrieveRelevantKnowledge(query: string, limit: number = 4): KnowledgeDocument[] {
  const normalizedQuery = query.toLowerCase();
  const queryWords = normalizedQuery.split(/\W+/).filter(w => w.length > 2);

  const scoredDocs = KNOWLEDGE_BASE.map(doc => {
    let score = 0;
    const docText = `${doc.title} ${doc.content} ${doc.keywords.join(' ')}`.toLowerCase();

    // Exact title or keyword matches
    for (const kw of doc.keywords) {
      if (normalizedQuery.includes(kw)) {
        score += 8;
      }
    }

    // Word occurrences
    for (const word of queryWords) {
      if (docText.includes(word)) {
        score += 2;
      }
      if (doc.title.toLowerCase().includes(word)) {
        score += 4;
      }
    }

    return { doc, score };
  });

  scoredDocs.sort((a, b) => b.score - a.score);

  // Return top items that have at least some relevance, or fallback to the top 2 general documents
  const relevant = scoredDocs.filter(item => item.score > 0).slice(0, limit).map(item => item.doc);
  if (relevant.length === 0) {
    return [KNOWLEDGE_BASE[0], KNOWLEDGE_BASE[1]];
  }

  return relevant;
}
