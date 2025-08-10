export type AcademyIds = {
  data: {
    BASIC: number | null;
    S2: number | null;
    S3: number | null;
    C1: number | null;
  },
  testing: boolean;
}

type AcademyCourseAttempt = {
  attempt: number,
  time_finished: number,
  grade: number
}
export type AcademyTranscript = {
  data: {
    BASIC: AcademyCourseAttempt[];
    S2: AcademyCourseAttempt[];
    S3: AcademyCourseAttempt[];
    C1: AcademyCourseAttempt[];
  },
  testing: boolean;
}

type FacilityData = {
  id: string,
  name: string,
  url: string,
  hosted_email_domain: null,
  region: number,
  atm: number,
  datm: number,
  ta: number,
  ec: number,
  fe: number,
  wm: number,
  active: number,
  ace: number 
}

export type Facility = {
  data: FacilityData[];
}

export type UserRole = {
  id: number,
  cid: number,
  facility: string,
  role: string,
  created_at: string
}

export type UserVisitingFacility = {
  id: number,
  cid: number,
  facility: string,
  created_at: string,
  updated_at: string
}

export type User = {
  data: {
    cid: number,
    fname: string,
    lname: string,
    email: string,
    facility: string,
    rating: number,
    created_at: string,
    updated_at: string,
    flag_needbasic: boolean,
    flag_xferOverride: boolean,
    facility_join: string,
    flag_homecontroller: boolean,
    lastactivity: string, 
    flag_broadcastOptedIn: boolean,
    flag_preventStaffAssign: boolean | null,
    discord_id: string | null,
    last_cert_sync: string,
    flag_nameprivacy: boolean,
    last_competency_date: null,
    promotion_eligible: boolean,
    transfer_eligible: null,
    roles: UserRole[],
    rating_short: string,
    visiting_facilities: UserVisitingFacility[],
    isMentor: boolean,
    isSupIns: boolean,
    last_promotion: string
  },
  testing: boolean
}