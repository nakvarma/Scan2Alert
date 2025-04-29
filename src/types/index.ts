export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  expiryDate: Date;
}
export interface Ad {
  gender: string;
  city: string;
  id: string;
  title: string;
  content: string;
  userId: string;
  userName: string;
  userImage?: string;
  state: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
}

export interface SearchFilters {
  query?: string;
  state?: string;
  category?: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: SignupData) => Promise<void>;
  logout: () => void;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}