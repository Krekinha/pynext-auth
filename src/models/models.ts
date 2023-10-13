export type User = {
    id?: string;
    nome?: string;
    email?: string;
    senha?: string;
    role?: string;
    

  };

  enum Role {
    USER,
    ADMIN,
    DEV,
  }