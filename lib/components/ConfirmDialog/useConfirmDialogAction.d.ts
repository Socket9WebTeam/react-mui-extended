import { ConfirmDialogProps } from './ConfirmDialog';
export type ConfirmActionState = {
    isOpen: boolean;
    action: null | ConfirmDialogProps['onClickYes'];
};
export declare function useConfirmDialogAction(): {
    confirmAction: (actionFn: ConfirmActionState['action']) => void;
    confirmDialogProps: Pick<ConfirmDialogProps, "isOpen" | "onClickNo" | "onClickYes">;
};
export default useConfirmDialogAction;
