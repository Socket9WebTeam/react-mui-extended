import { Reducer } from 'react';
import { SnackbarProps } from '@/components/Snackbar';
export interface GlobalSnackbarProps extends Omit<SnackbarProps, 'open'> {
    closeOnClickAway?: boolean;
}
export type GlobalSnackbarState = {
    isOpen: boolean;
    queue: GlobalSnackbarProps[];
};
export type GlobalSnackbarActionOpen = {
    type: 'open';
    payload: GlobalSnackbarState['queue'][number];
};
type ActionWithoutPayload = {
    type: 'close' | 'next' | 'reset';
};
export type GlobalSnackbarAction = GlobalSnackbarActionOpen | ActionWithoutPayload;
export declare const globalSnackbarInitialState: GlobalSnackbarState;
export declare const globalSnackbarReducer: Reducer<GlobalSnackbarState, GlobalSnackbarAction>;
export {};
