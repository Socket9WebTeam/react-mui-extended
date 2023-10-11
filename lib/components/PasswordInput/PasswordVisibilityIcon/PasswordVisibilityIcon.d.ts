import { MouseEventHandler, ReactElement } from 'react';
export type PasswordVisibilityIconProps = {
    isVisible: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
};
declare const PasswordVisibilityIcon: ({ isVisible, onClick, }: PasswordVisibilityIconProps) => ReactElement;
export default PasswordVisibilityIcon;
