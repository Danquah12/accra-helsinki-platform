export interface Campaign {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  goal: string;
  status: 'active' | 'completed' | 'planned';
  featuredImage?: string;
}

export interface Petition {
  id: string;
  campaignId?: string;
  title: string;
  target: string;
  description: string;
  signatureGoal: number;
  currentSignatures: number;
  deadline?: string;
}

export interface PetitionSignature {
  id: string;
  petitionId: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  dateSigned: string;
  isPublic: boolean;
}
