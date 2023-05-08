import React, { FC } from 'react';

import { EmojiName } from '../../../types/EmojiName';
// @ts-ignore
import emojiFile from '../../data/emoji-data.json';

import type { EmojiProps } from './Emoji.props';

/**
 * Emoji component.
 *
 * @param {EmojiName} name         name of emoji.
 * @param {string} alt             alternate name of image.
 * @param {string|number} height   define emoji name. Default value is 1em.
 * @constructor
 */
const Emoji: FC<EmojiProps> = ({ name, alt, height }) => {
	const defaultHeight = height ? height : '1em';

	return (
		<img
			src={emojiFile[name]}
			alt={alt}
			style={{
				height: defaultHeight,
			}}
		/>
	);
};

export default Emoji;
