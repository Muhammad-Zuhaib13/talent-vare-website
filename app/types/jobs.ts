export interface JobCard {
  id: number;
  label: string;
  jobTitle: string;
  company: string;
  companyIcon: string;
  location: string;
  locationIcon: string;
  clockIcon: string;
  posted: string;
  noApplicant: string;
  ractIcon: string;
  cta: {
    text: string;
    href: string;
  };
}

export interface JobsData {
  title: string;
  cta: {
    text: string;
    href: string;
  };
  cards: JobCard[];
}