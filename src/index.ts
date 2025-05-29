/**
 * Takes a translation table object and replaces its translation values with keys
 * 
 * @param item - The translation table imported from a JSON file
 *               e.g: import translationTable from "./i18n/en.json"
 * @param namespace - Optional namespace generated in the recursion
 * @returns The modified item (for chaining)
 * 
 * @example
 * ```ts
 * import translationTable from "./i18n/en.json";
 * import { replace } from "values-to-keys";
 * 
 * replace(translationTable);
 * // Now translationTable has all string values replaced with their keys
 * ```
 */
export function replaceTranslationsWithKeys<T extends Record<string, any>>(
  item: T,
  namespace?: string
): T {
  for (const property in item) {
    if (Object.prototype.hasOwnProperty.call(item, property)) {
      const key = (namespace ? `${namespace}.` : '') + property;
      
      if (item[property] !== null && typeof item[property] === 'object') {
        replaceTranslationsWithKeys(item[property], key);
      } else if (typeof item[property] === 'string') {
        item[property] = key as any;
      }
    }
  }
  
  return item;
}

// Export a named alias for backward compatibility
export const replace = replaceTranslationsWithKeys;

// Default export for convenience
export default replaceTranslationsWithKeys;
