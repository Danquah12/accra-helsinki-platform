export interface Treaty {
  id: string;
  name: string;
  shortName: string;
  description: string;
  yearAdopted: number;
  yearEnteredIntoForce: number;
  url: string;
}

export interface TreatyRatification {
  treatyId: string;
  countryCode: string;
  status: 'signed' | 'ratified' | 'none';
  date?: string;
}

export interface Law {
  id: string;
  countryCode: string;
  title: string;
  description: string;
  year: number;
  enforcementLevel: 'low' | 'medium' | 'high';
  documentUrl?: string;
}
