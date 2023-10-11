import { ButtonProps } from '@mui/material';
import { ReactElement } from 'react';
export type ActionButtonProps = {
    isLoading?: boolean;
} & ButtonProps;
declare const ActionButton: ({ isLoading, children, disabled, variant, color, ...props }: ActionButtonProps) => ReactElement;
export default ActionButton;
