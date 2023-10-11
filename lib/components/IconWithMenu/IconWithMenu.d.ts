import { SvgIconComponent } from '@mui/icons-material';
import { IconButtonProps } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
export type IconWithMenuProps = {
    children: (props: {
        closeMenu: () => void;
    }) => ReactNode[];
    icon?: SvgIconComponent;
    iconButtonProps?: Partial<IconButtonProps>;
    testId?: string;
};
declare const IconWithMenu: ({ children, iconButtonProps, icon: IconComponent, testId, }: IconWithMenuProps) => ReactElement;
export default IconWithMenu;
