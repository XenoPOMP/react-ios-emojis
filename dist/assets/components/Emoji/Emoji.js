"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
const react_1 = __importDefault(require("react"));
const emoji_data_json_1 = __importDefault(require("../../data/emoji-data.json"));
/**
 * Emoji component.
 *
 * @param {EmojiName} name         name of emoji. [See full list of emojis here]{@link https://unicode.org/emoji/charts/full-emoji-list.html}
 * @param {string} alt             alternate name of image.
 * @param {string|number} height   define emoji name. Default value is 1em.
 * @constructor
 */
const Emoji = ({ name, alt, height = '1em' }) => {
    return ((0, jsx_runtime_1.jsx)("img", { src: emoji_data_json_1.default[name], alt: alt, style: {
            height,
        } }));
};
Emoji.Next = ({ name, alt, height }) => {
    return (0, jsx_runtime_1.jsx)(image_1.default, { src: emoji_data_json_1.default[name], alt: alt, height: height });
};
exports.default = Emoji;
//# sourceMappingURL=Emoji.js.map