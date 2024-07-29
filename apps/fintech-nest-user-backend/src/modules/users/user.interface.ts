export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}