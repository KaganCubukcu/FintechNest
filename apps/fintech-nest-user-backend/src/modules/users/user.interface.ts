export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  accountNumber: string;
  balance: number;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
}