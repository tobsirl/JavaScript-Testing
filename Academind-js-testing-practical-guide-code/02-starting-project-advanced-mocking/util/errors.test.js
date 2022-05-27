import { describe, it, expect } from 'vitest';
import { HttpError } from './errors';

describe('class HttpError', () => {
  it('should contain the provided status code, message and data', () => {
    const testStatusCode = 200;
    const testMessage = 'Status: Success';
    const testData = { key: 'test' };

    const testHttpError = new HttpError(testStatusCode, testMessage, testData);

    expect(testHttpError.statusCode).toBe(testStatusCode);
    expect(testHttpError.message).toBe(testMessage);
    expect(testHttpError.data).toBe(testData);
  });
});

describe('class ValidationError', () => {
  it('should ', () => {});
});
