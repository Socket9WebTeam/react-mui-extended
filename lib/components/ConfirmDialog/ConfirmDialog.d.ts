import { ReactElement } from 'react';
export type ConfirmDialogProps = {
    isOpen: boolean;
    title: string;
    description: string;
    buttonNoText?: string;
    buttonYesText?: string;
    onClickNo: () => void;
    onClickYes: () => void;
    testId?: string;
    buttonNoTestId?: string;
    buttonYesTestId?: string;
};
export declare const defaultConfirmDialogProps: {
    buttonNoText: string;
    buttonYesText: string;
    testId: string;
    buttonNoTestId: string;
    buttonYesTestId: string;
};
declare const ConfirmDialog: ({ isOpen, title, description, buttonNoText, buttonYesText, onClickNo, onClickYes, testId, buttonNoTestId, buttonYesTestId, }: ConfirmDialogProps) => ReactElement;
export default ConfirmDialog;
