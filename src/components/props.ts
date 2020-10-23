import { ValidationRules } from 'react-hook-form';

export interface BaseProps {
  name: string;
  rules?: ValidationRules;
}
