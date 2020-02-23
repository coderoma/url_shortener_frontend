import { useState, useCallback } from "react";
import { HttpMethods } from "../utils/constants";
import { Request } from "../interfaces";

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const request: Request = useCallback(
    async (url, method = HttpMethods.GET, body = null, headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
        }
        const response = await fetch(url, { method, body, headers });
        const data = await response.json();
        setLoading(false);

        if (!response.ok) {
          throw new Error(data.message || "Something went wrong");
        }
        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );
  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
