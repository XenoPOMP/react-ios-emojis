"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
// @ts-ignore
const emoji_data_json_1 = __importDefault(require("../../data/emoji-data.json"));
/**
 * Emoji component.
 *
 * @param {EmojiName} name         name of emoji.
 * @param {string} alt             alternate name of image.
 * @param {string|number} height   define emoji name. Default value is 1em.
 * @constructor
 */
const Emoji = ({ name, alt, height }) => {
    const defaultHeight = height ? height : '1em';
    return ((0, jsx_runtime_1.jsx)("img", { src: emoji_data_json_1.default[name], alt: alt, style: {
            height: defaultHeight,
        } }));
};
exports.default = Emoji;
//# sourceMappingURL=Emoji.js.map