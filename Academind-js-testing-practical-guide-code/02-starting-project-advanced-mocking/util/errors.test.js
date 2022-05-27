import { describe, it, expect } from 'vitest';
import { HttpError, ValidationError } from './errors';

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

  it('should contain undefined as data if no data is provided', () => {
    const testStatusCode = 200;
    const testMessage = 'Status: Success';

    const testHttpError = new HttpError(testStatusCode, testMessage);

    expect(testHttpError.data).toBeUndefined();
  });
});

describe('class ValidationError', () => {
  it('should contain the provided message', () => {
    const testMessage = 'Top of the morning to ya!';

    const testValidationError = new ValidationError(testMessage);

    expect(testValidationError.message).toBe(testMessage);
  });
});
