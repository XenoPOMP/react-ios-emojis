"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCase = void 0;
const camelCase = (input) => {
    const replacements = [
        {
            original: 'ñ',
            replacement: 'n',
        },
    ];
    let words = input.split(/[\s\W_]/gi);
    // Replace special chars
    replacements.forEach(charReplacement => {
        const { original, replacement } = charReplacement;
        words = words.map(word => {
            return word.replace(new RegExp(`${original}`, 'gi'), replacement);
        });
    });
    return words.reduce((output, word) => {
        if (output === '') {
            return output + word.toLowerCase();
        }
        return (output + word.charAt(0).toUpperCase().concat(word.slice(1, word.length)));
    }, '');
};
exports.camelCase = camelCase;
//# sourceMappingURL=camelCase.js.map