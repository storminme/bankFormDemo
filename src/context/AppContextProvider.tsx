import { useState, ReactNode } from 'react';
import { Field } from '../types/types.ts';
import { AppContext } from './AppContext.ts';

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [workPlace, setWorkPlace] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [amount, setAmount] = useState<number>(200);
  const [term, setTerm] = useState<number>(10);
  const [fields, setFields] = useState<Field[]>([]);

  return (
    <AppContext.Provider
      value={{
        firstName,
        lastName,
        phone,
        gender,
        workPlace,
        address,
        amount,
        term,
        fields,
        setFirstName,
        setLastName,
        setPhone,
        setGender,
        setWorkPlace,
        setAddress,
        setTerm,
        setAmount,
        setFields,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
