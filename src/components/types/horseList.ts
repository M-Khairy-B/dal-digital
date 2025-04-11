export interface HorseApiResponse {
  status: boolean;
  msg: string;
  data: {
    data: Horse[];
    links: PaginationLinks;
    meta: PaginationMeta;
  };
}

export interface Horse {
  id: number;
  name: string;
  horse_number: string;
  mother_name: string;
  father_name: string;
  image: string;
  country_origin: string;
  date_of_birth: string;
  user: User | null;
  gender: Gender;
  paternity_certificate: string;
  breed: string;
  training_horse: number;
  other_registers: any;
  other_injuries: any;
  production_place: any;
  is_out: number;
  out_reason: any;
  out_time: any;
  created_at: string;
  injuries: any[];
  registers: any[];
  services: Service[];
  packages: Package[];
  place: Place;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  image: string;
  horses_count: number;
}

export interface Gender {
  id: number;
  name_ar: string;
  name_en: string;
}

export interface Service {
  id: number;
  name: string | null;
  cost: number;
  price: number;
  payment: Payment;
}

export interface Package {
  id: number;
  service_category: ServiceCategory;
  period: string;
  price: number;
  payment: Payment;
}

export interface ServiceCategory {
  id: number;
  key: string;
  name_ar: string;
  name_en: string;
  parent_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: number;
  amount: number;
  status: string;
  payment_method: string;
}

export interface Place {
  id: number;
  number: string;
  category: {
    id: number;
    name: string;
    is_deletable: number;
    parent: any;
  };
}

export interface PaginationLinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface PaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}
export interface SingleHorseResponse {
  status: boolean;
  msg: string;
  horse: {
    id: number;
    name: string;
    horse_number: string;
    mother_name: string;
    father_name: string;
    image: string;
    date_of_birth: string;
    breed: string;
    gender: {
      id: number;
      name_ar: string;
      name_en: string;
    };
    user: {
      id: number;
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
      image: string;
      horses_count: number;
    };
    services: any[];
    packages: any[];
    place: {
      id: number;
      number: string;
      category: {
        id: number;
        name: string;
        is_deletable: number;
      };
    };
  };
}
