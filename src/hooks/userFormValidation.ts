import { useState } from 'react';
import { z } from 'zod';

type ValidationResult<T> = {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
};

export function useFormValidation<T>(schema: z.ZodType<T, any, any>) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Função para validar os dados
  const validate = (data: any): ValidationResult<T> => {
    try {
      const validData = schema.parse(data);
      setErrors({});
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path) {
            formattedErrors[err.path[0]] = err.message;
          }
        });
        setErrors(formattedErrors);
        return { success: false, errors: formattedErrors };
      }
      setErrors({ form: "Erro de validação inesperado" });
      return { success: false, errors: { form: "Erro de validação inesperado" } };
    }
  };

  // Função para limpar erro de um campo específico
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