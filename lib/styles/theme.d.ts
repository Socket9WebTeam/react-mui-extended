import { SerializedStyles } from '@emotion/react';
declare const theme: import("@mui/material/styles").Theme;
export type CustomizedTheme = typeof theme;
export type StyleFunction = (theme: CustomizedTheme) => SerializedStyles;
declare module '@emotion/react' {
    interface Theme extends CustomizedTheme {
    }
}
export default theme;
