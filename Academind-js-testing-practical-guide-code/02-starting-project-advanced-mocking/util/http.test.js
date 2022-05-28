import { it, expect, vi } from 'vitest';
import { sendDataRequest } from './http';

const testResponseData = { testKey: 'testData' };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve();
  });
});

vi.stubGlobal('fetch', testFetch);
it('should return any available response data', () => {
  sendDataRequest();
});
