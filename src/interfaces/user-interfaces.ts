export interface UserCreate {
  name: string;
  email: string;
  cpf: string;
  description?: string;
  phone: string;
  birth_date: string;
  account_type: string;
  password: string;
}

export interface AddressCreate {
  zip_code: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}

export interface RegisterData {
  name: string;
  email: string;
  cpf: string;
  description?: string;
  phone: string;
  birth_date: string;
  account_type: string;
  password: string;
  zip_code: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}
