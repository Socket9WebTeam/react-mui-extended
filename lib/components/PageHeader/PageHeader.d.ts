import { ReactElement, ReactNode } from 'react';
export type PageHeaderProps = {
    header: ReactNode;
    actions?: ReactNode;
    onClickBackButton?: () => void;
    withBorder?: boolean;
};
declare const PageHeader: ({ header, actions, onClickBackButton, withBorder, }: PageHeaderProps) => ReactElement;
export default PageHeader;
