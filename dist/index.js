"use strict";
export { replaceTranslationsWithKeys as replace };
/**
 *
 * @param item the translation table imported from a json file. e.g: import { default as translationTable } from "i18n/en.json")
 * @param namespace optional. generated in the recursion
 * @description takes a translation table object and replaces its translation values with keys
 */
function replaceTranslationsWithKeys(item, namespace) {
    for (const property in item) {
        const key = (namespace ? namespace + "." : "") + property;
        if (typeof item[property] === "object") {
            replaceTranslationsWithKeys(item[property], key);
        }
        else if (typeof item[property] === "string" ||
            item[property] instanceof String) {
            item[property] = key;
        }
    }
}
//# sourceMappingURL=index.js.map