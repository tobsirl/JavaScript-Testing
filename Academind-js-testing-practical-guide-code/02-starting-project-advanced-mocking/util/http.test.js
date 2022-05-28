import { it, expect, vi } from 'vitest';
import { sendDataRequest } from './http';

const testFetch = vi.fn();

vi.stubGlobal('fetch', testFetch);
it('should return any available response data', () => {
  sendDataRequest();
});
