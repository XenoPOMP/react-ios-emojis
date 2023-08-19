import Image from 'next/image';
import { ComponentProps, FC } from 'react';
import { EmojiProps } from './Emoji.props';
/**
 * Emoji component.
 *
 * @param {EmojiName} name         name of emoji. [See full list of emojis here]{@link https://unicode.org/emoji/charts/full-emoji-list.html}
 * @param {string} alt             alternate name of image.
 * @param {string|number} height   define emoji name. Default value is 1em.
 * @constructor
 */
declare const Emoji: FC<EmojiProps> & {
    Next: FC<EmojiProps & Omit<ComponentProps<typeof Image>, 'src' | 'alt' | 'height'>>;
};
export default Emoji;
