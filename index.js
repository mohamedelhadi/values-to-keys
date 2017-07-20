"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param item the translation table imported from a json file. e.g: import { default as translationTable } from "i18n/en.json")
 * @param namespace optional. generated in the recursion
 * @description takes a translation table object and replaces its translation values with keys
 */
function replaceTranslationsWithKeys(item, namespace) {
    for (var property in item) {
        var key = (namespace ? namespace + "." : "") + property;
        if (typeof (item[property]) === "object") {
            replaceTranslationsWithKeys(item[property], key);
        }
        else if (typeof (item[property]) === "string" || item[property] instanceof String) {
            item[property] = key;
        }
    }
}
exports.replace = replaceTranslationsWithKeys;
//# sourceMappingURL=index.js.map