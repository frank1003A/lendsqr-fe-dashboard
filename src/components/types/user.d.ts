interface EDUCATION {
  level?: string;
  employmentStatus?: string;
  sector?: string;
  duration?: string;
  officeEmail?: string;
  monthlyIncome?: Array<string>;
  loanRepayment?: string;
}

interface SOCIALS {
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

interface GUARANTOR {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  emailaddress?: string;
  gender?: string;
  address?: string;
}

export interface PROFILE {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  avatar?: string;
  gender?: string;
  bvn?: string;
  address?: string;
  currency?: string;
}

export interface USER {
  createdAt: Date;
  orgName?: string;
  userName?: string;
  email?: string;
  lastActiveDate?: Date;
  profile?: Profile;
  guarantor?: GUARANTOR;
  accountBalance?: string;
  accountNumber?: string;
  socials?: SOCIALS;
  education?: EDUCATION;
  id: string;
}

