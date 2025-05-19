import { useState } from 'react';
import { z } from 'zod';

type ZodFormattedError = {
  _errors: string[];
  [key: string]: ZodFormattedError | string[];
};

export function useFormValidation<T>(schema: z.ZodType<T>) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validate = (data: unknown) => {
    const result = schema.safeParse(data);
    
    if (!result.success) {
      // Usando o formato nativo do Zod para erros
      const formattedErrors = result.error.format() as unknown as Record<string, ZodFormattedError>;
      
      // Convertendo para o formato esperado pelo componente
      const fieldErrors: Record<string, string> = {};
      
      // Percorrendo as chaves do erro formatado
      Object.keys(formattedErrors).forEach(key => {
        if (key !== '_errors' && formattedErrors[key]?._errors?.[0]) {
          fieldErrors[key] = formattedErrors[key]._errors[0];
        }
      });
      
      setErrors(fieldErrors);
      return { success: false, errors: fieldErrors };
    }
    
    setErrors({});
    return { success: true, data: result.data };
  };
  
  const clearError = (fieldName: string) => {
    if (errors[fieldName]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  return { errors, validate, clearError };
}