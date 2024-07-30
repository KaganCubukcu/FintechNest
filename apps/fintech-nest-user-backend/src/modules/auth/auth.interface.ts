export interface Auth {
    email: string;
    password: string;
  }

export interface JwtPayload {
    sub: string;
    email: string;
}