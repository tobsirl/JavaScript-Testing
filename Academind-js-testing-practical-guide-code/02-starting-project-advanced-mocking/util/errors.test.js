import { describe, it, expect } from 'vitest';
import { HttpError } from './errors';

describe('HttpError', () => {
  it('should create a HttpError class', () => {
    const statusCode = 200;
    const message = 'Status: Success';
    const data = {};

    const httpError = new HttpError(statusCode, message, data);

    console.log(httpError);
    expect(httpError).toBe();
  });
});
