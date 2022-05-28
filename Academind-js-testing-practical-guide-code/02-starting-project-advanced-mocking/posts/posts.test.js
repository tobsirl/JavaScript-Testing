import { describe, it, expect } from 'vitest';
import { extractPostData } from './posts';

describe('extractPostData()', () => {
  it('should extract title and content from the provided form data', () => {
    const testTitle = 'Test title';
    const testContent = 'Test content';
    const testFormData = {
      title: testTitle,
      content: testContent,
      get(identifer) {
        return this[identifer];
      },
    };
    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
