export type UnknownObject = Record<string, unknown>;
export type Optional<T, K extends keyof any> = Omit<T, K> & Partial<Pick<T, Extract<keyof T, K>>>;
