import { useState, useCallback } from "react";
import { HttpMethods } from "../constants";

interface Request {
  (url: string, method: HttpMethods, body: any, headers?: any): any;
}

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const request: Request = useCallback(
    async (url, method = HttpMethods.GET, body = null, headers = {}) => {
      setLoading(true);
      try {
        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Something went wrong");
        }

        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );
  const clearError = () => {
    setError(null);
  };
  return { loading, request, error, clearError };
};
