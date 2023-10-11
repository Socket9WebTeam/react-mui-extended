import { AlertProps } from '@mui/material';
import { ReactElement } from 'react';
export type MessageBoxProps = {
    title: string;
    description: string;
    severity?: AlertProps['severity'];
    action?: AlertProps['action'];
    testId?: string;
};
declare const MessageBox: ({ title, description, severity, action, testId, }: MessageBoxProps) => ReactElement;
export default MessageBox;
