import { RenderOptions, RenderResult } from '@testing-library/react';
import React from 'react';
declare function renderWithTheme(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult;
export default renderWithTheme;
