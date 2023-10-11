import { RenderOptions, RenderResult } from '@testing-library/react';
import { MemoryHistory, MemoryHistoryOptions } from 'history';
import React from 'react';
declare function renderWithRouter(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'> & {
    routerHistoryOptions: MemoryHistoryOptions;
}): RenderResult & {
    history: MemoryHistory;
};
export default renderWithRouter;
