import { createContext } from 'react';
import { IAuthContext } from "../interfaces";

function noop(){}

export const AuthContext = createContext<IAuthContext>({
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
})
