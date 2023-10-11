import { ReactElement } from 'react';
export type ErrorMessageProps = {
    title?: string;
    description?: string;
    testId?: string;
};
export declare const defaultErrorMessageProps: {
    title: string;
    description: string;
    testId: string;
};
declare const ErrorMessage: ({ title, description, testId, }: ErrorMessageProps) => ReactElement;
export default ErrorMessage;
