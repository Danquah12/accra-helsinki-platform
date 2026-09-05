export interface EnvironmentalIncident {
  id: string;
  title: string;
  description: string;
  date: string;
  countryCode: string;
  location: string;
  type: 'ewaste' | 'plastic' | 'chemical' | 'other';
  severity: 'low' | 'medium' | 'high' | 'critical';
  impact: string;
}

export interface DumpingSite {
  id: string;
  name: string;
  countryCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  sizeHectares: number;
  activeStatus: boolean;
  primaryWasteTypes: string[];
}

export interface DumpingReport {
  id: string;
  incidentId?: string;
  reporterName?: string;
  reporterEmail?: string;
  details: string;
  dateReported: string;
  status: 'pending' | 'investigating' | 'verified' | 'resolved';
}
