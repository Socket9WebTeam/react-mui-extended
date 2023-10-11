import { Dispatch, ReactNode } from 'react';
import { GlobalSnackbarAction } from './reducer';
export declare const GlobalSnackbarContext: import("react").Context<Dispatch<GlobalSnackbarAction> | undefined>;
type GlobalSnackbarProviderProps = {
    children: ReactNode;
};
declare const GlobalSnackbarProvider: ({ children }: GlobalSnackbarProviderProps) => import("react/jsx-runtime").JSX.Element;
export default GlobalSnackbarProvider;
