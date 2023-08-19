import { FC } from 'react';
import type { EmojiProps } from './Emoji.props';
/**
 * Emoji component.
 *
 * @param {EmojiName} name         name of emoji. [See full list of emojis here]{@link https://unicode.org/emoji/charts/full-emoji-list.html}
 * @param {string} alt             alternate name of image.
 * @param {string|number} height   define emoji name. Default value is 1em.
 * @constructor
 */
declare const Emoji: FC<EmojiProps> & {
    Next: FC<EmojiProps>;
};
export default Emoji;
