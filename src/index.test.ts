import { describe, expect, it } from 'vitest';
import { replace, replaceTranslationsWithKeys } from './index';

describe('replaceTranslationsWithKeys', () => {
  it('should replace string values with their keys', () => {
    const input = {
      hello: 'Hello World',
      welcome: 'Welcome to our app',
    };

    const expected = {
      hello: 'hello',
      welcome: 'welcome',
    };

    const result = replaceTranslationsWithKeys(input);
    
    expect(result).toEqual(expected);
    // Also check that the original object was modified
    expect(input).toEqual(expected);
  });

  it('should handle nested objects', () => {
    const input = {
      greetings: {
        hello: 'Hello World',
        welcome: 'Welcome to our app',
      },
      errors: {
        notFound: 'Not found',
      },
    };

    const expected = {
      greetings: {
        hello: 'greetings.hello',
        welcome: 'greetings.welcome',
      },
      errors: {
        notFound: 'errors.notFound',
      },
    };

    const result = replaceTranslationsWithKeys(input);
    
    expect(result).toEqual(expected);
  });

  it('should handle arrays', () => {
    const input = {
      items: ['Item 1', 'Item 2', 'Item 3'],
    };

    const expected = {
      items: ['items.0', 'items.1', 'items.2'],
    };

    const result = replaceTranslationsWithKeys(input);
    
    expect(result).toEqual(expected);
  });

  it('should not modify non-string values', () => {
    const input = {
      count: 42,
      active: true,
      empty: null,
      data: undefined,
    };

    const expected = { ...input };

    const result = replaceTranslationsWithKeys(input);
    
    expect(result).toEqual(expected);
  });

  it('should work with the "replace" alias', () => {
    const input = {
      hello: 'Hello World',
    };

    const expected = {
      hello: 'hello',
    };

    const result = replace(input);
    
    expect(result).toEqual(expected);
  });
});
