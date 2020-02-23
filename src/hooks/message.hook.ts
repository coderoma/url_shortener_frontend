import { useCallback } from 'react';
import { Message } from "../interfaces"

export const useMessage: Message = () => useCallback(text => {
    if (window.M && text) {
      window.M.toast({ html: text})
    }
  }, [])

