import React from 'react';
import { HttpMethods } from "./utils/constants";

export interface UseRoutes {
  (isAuthenticated: boolean): React.ReactNode
}

export interface Request {
  (url: string, method: HttpMethods, body: any, headers?: any): any;
}

export interface Message {
  (): (text: string | null) => void;
}

export interface IAuthContext {
  token: null | string;
  userId: null | string;
  login: (jwtToken: string, id: string) => void,
  logout: () => void,
  isAuthenticated: boolean
}
