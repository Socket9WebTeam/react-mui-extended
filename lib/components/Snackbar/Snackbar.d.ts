import { AlertProps, SnackbarProps as SnackbarMUIProps } from '@mui/material';
import { ReactElement } from 'react';
export interface SnackbarProps extends SnackbarMUIProps {
    /**
     * Default severity: "info"
     */
    severity?: AlertProps['severity'];
    /**
     * Default variant: "filled"
     */
    variant?: AlertProps['variant'];
}
/**
 * Themed, auto closed Snackbar
 */
declare const Snackbar: ({ message, onClose, children, severity, variant, autoHideDuration, anchorOrigin, ...snackbarProps }: SnackbarProps) => ReactElement;
export default Snackbar;
