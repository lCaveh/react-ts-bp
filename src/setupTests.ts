import '@testing-library/jest-dom';
import 'whatwg-fetch';

const noop = (): void => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
