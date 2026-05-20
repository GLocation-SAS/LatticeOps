"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { STORAGE_KEYS } from "@/lib/config";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Restore session from localStorage on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(STORAGE_KEYS.user);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch {
      // Ignore parse errors
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (email: string, _password: string) => {
    setIsLoading(true);
    try {
      // Simulated login — replace with real API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      const mockUser: User = {
        id: "1",
        name: email.split("@")[0],
        email,
        role: "admin",
      };
      setUser(mockUser);
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(mockUser));
      localStorage.setItem(STORAGE_KEYS.authToken, "mock-jwt-token");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(
    async (name: string, email: string, _password: string) => {
      setIsLoading(true);
      try {
        // Simulated register — replace with real API call
        await new Promise((resolve) => setTimeout(resolve, 800));
        const mockUser: User = {
          id: "1",
          name,
          email,
          role: "editor",
        };
        setUser(mockUser);
        localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(mockUser));
        localStorage.setItem(STORAGE_KEYS.authToken, "mock-jwt-token");
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEYS.user);
    localStorage.removeItem(STORAGE_KEYS.authToken);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}


