import { FC } from 'react';

import { EmojiName } from '../../../types/EmojiName';
// @ts-ignore
import emojiFile from '../../data/emoji-data.json';

import type { EmojiProps } from './Emoji.props';

/**
 * Emoji component.
 *
 * @param {EmojiName} name    name of emoji.
 * @constructor
 */
const Emoji: FC<EmojiProps> = ({ name, alt }) => {
	return <img src={emojiFile[name]} alt={alt} />;
};

export default Emoji;
