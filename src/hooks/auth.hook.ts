import { useState, useCallback, useEffect } from 'react';
import { USERDATASTORAGE } from '../utils/constants';

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)

  const login = useCallback((jwtToken: string, id: string): void => {
    setToken(jwtToken)
    setUserId(id);
    localStorage.setItem(USERDATASTORAGE, JSON.stringify({
      userId: id, token: jwtToken
    }))
  }, [])

  const logout = useCallback((): void => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem(USERDATASTORAGE);
  }, [])

  useEffect(() => {
    const userData = localStorage.getItem(USERDATASTORAGE);
    let data = null;
    if (userData) {
      data = JSON.parse(userData)
    }

    if (data && data.token) {
      login(data.token, data.userId)
    }
  }, [login])

  return { login, logout, token, userId }
}
