# values-to-keys

[![npm version](https://badge.fury.io/js/values-to-keys.svg)](https://badge.fury.io/js/values-to-keys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight utility to replace translation values with their respective keys, useful for i18n workflows.

## Installation

```bash
npm install values-to-keys
# or
yarn add values-to-keys
# or
pnpm add values-to-keys
```

## Features

- 🔍 Replaces string values in translation objects with their dot-notation keys
- 🌲 Handles deeply nested objects and arrays
- 🔄 Works with any translation structure
- 📦 Tiny footprint with zero dependencies
- 🚀 Supports ESM and CommonJS

## Usage

The library exports a function that replaces all string values in an object with their respective keys in dot notation.

### Basic Example

```typescript
import { replace } from 'values-to-keys';
// or: import replace from 'values-to-keys';

const translations = {
  greetings: {
    hello: 'Hello World',
    welcome: 'Welcome to our app',
  },
  errors: {
    notFound: 'Not found',
  },
};

replace(translations);

console.log(translations);
// Output:
// {
//   greetings: {
//     hello: 'greetings.hello',
//     welcome: 'greetings.welcome',
//   },
//   errors: {
//     notFound: 'errors.notFound',
//   },
// }
```

### With JSON Translation Files

```typescript
import translationFile from './locales/en.json';
import { replace } from 'values-to-keys';

replace(translationFile);
// Now translationFile has all string values replaced with their keys
```

## Use Cases

This library is designed to work with [translation-keys-generator](https://github.com/mohamedelhadi/translation-keys-generator) and similar i18n workflows where you need to:

1. Generate translation keys from values
2. Use the keys in your application code
3. Maintain a clean separation between keys and values

## API

### `replaceTranslationsWithKeys(item, namespace?)`

The main function that replaces string values with their keys.

- `item`: The object containing translation strings
- `namespace`: (Optional) Used internally for recursion, don't pass this in the initial call

Returns the modified object (same reference).

### `replace`

An alias for `replaceTranslationsWithKeys` for convenience.

## License

MIT © [Mohamed Elhadi](https://github.com/mohamedelhadi)
