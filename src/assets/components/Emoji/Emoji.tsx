import Image from 'next/image';
import React, { FC } from 'react';

import { EmojiName } from '../../../types/EmojiName';
import emojiFile from '../../data/emoji-data.json';

import type { EmojiProps } from './Emoji.props';

/**
 * Emoji component.
 *
 * @param {EmojiName} name         name of emoji. [See full list of emojis here]{@link https://unicode.org/emoji/charts/full-emoji-list.html}
 * @param {string} alt             alternate name of image.
 * @param {string|number} height   define emoji name. Default value is 1em.
 * @constructor
 */
const Emoji: FC<EmojiProps> & {
	Next: FC<EmojiProps>;
} = ({ name, alt, height = '1em' }) => {
	return (
		<img
			src={emojiFile[name]}
			alt={alt}
			style={{
				height,
			}}
		/>
	);
};

Emoji.Next = ({ name, alt, height }) => {
	return <Image src={emojiFile[name]} alt={alt} height={height} />;
};

export default Emoji;
