
export type Profile = {
    id: string;
    username: string;
    created_at: string;
    updated_at: string;
  };
  
  export type UserRole = {
    id: string;
    user_id: string;
    role: 'admin' | 'user';
    created_at: string;
  };
  