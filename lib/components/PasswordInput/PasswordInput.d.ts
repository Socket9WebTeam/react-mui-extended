import { TextFieldProps } from '@mui/material';
import { ReactElement } from 'react';
export type PasswordInputProps = Omit<TextFieldProps, 'type' | 'inputProps' | 'InputProps'> & {
    testId?: string;
};
declare const PasswordInput: ({ testId, ...props }: PasswordInputProps) => ReactElement;
export default PasswordInput;
