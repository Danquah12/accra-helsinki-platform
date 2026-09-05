export interface Organization {
  id: string;
  name: string;
  type: 'ngo' | 'government' | 'academic' | 'private' | 'intergovernmental';
  description: string;
  websiteUrl?: string;
  countryCode?: string;
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  organizationId?: string;
  bio: string;
  avatarUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export interface Partner extends Organization {
  partnerLevel: 'gold' | 'silver' | 'bronze' | 'strategic';
  logoUrl: string;
}
