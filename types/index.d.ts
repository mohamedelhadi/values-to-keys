export { replaceTranslationsWithKeys as replace };
/**
 *
 * @param item the translation table imported from a json file. e.g: import { default as translationTable } from "i18n/en.json")
 * @param namespace optional. generated in the recursion
 * @description takes a translation table object and replaces its translation values with keys
 */
declare function replaceTranslationsWithKeys(item: any, namespace?: string): void;
