import { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface AppContextProps {
  firstName: string;
  lastName: string;
  phone: string;
  gender: string;
  workPlace: string;
  address: string;
  amount: number;
  term: number;
  setFirstName: (name: string) => void;
  setLastName: (name: string) => void;
  setPhone: (phone: string) => void;
  setGender: (gender: string) => void;
  setWorkPlace: (workPlace: string) => void;
  setAddress: (address: string) => void;
  setAmount: (amount: number) => void;
  setTerm: (term: number) => void;
  fields: Field[];
  setFields: (fields: Field[]) => void;
}

export interface Field {
  slug: string;
  name: string;
  url: string;
}

export interface Form1Data {
  phone: string;
  firstName: string;
  lastName: string;
  gender: string;
}

export interface Form2Data {
  workPlace: string;
  address: string;
}

export interface Form3Data {
  amount: number;
  term: number;
}

export interface WorkPlaceSelectProps {
  fields: Field[] | undefined;
  isLoading: boolean;
  isError: boolean;
  register: UseFormRegister<Form2Data>;
  errors: FieldErrors<Form2Data>;
}
