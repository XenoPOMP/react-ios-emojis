import editFile from 'edit-file';
import * as path from 'path';
import scrapSite from 'ts-website-scrapper';

import Logger from '../utils/Logger';
import { camelCase } from '../utils/camelCase';

const url = 'https://unicode.org/emoji/charts/full-emoji-list.html';

scrapSite(url, 'tbody tr').then(result => {
	const { root, loader } = result;

	/** Application logger. */
	const logger: Logger = new Logger();

	/** JSON object of parsed smiles. */
	let smiles = {};
	const unionType: string[] = [];

	// Parse each row in tbody
	root.each(async (i, row) => {
		/** Title of emoji group. */
		const groupTitle = loader(row).find('> th.mediumhead > a').text();

		/** String definition of smile. */
		const browserSmile = loader(row).find('> td.chars').text();
		/** Smile`s name converted to camel case. */
		const name = camelCase(loader(row).find('> td.name').text());

		if (name === '') {
			return;
		}

		// Add type to union
		unionType.push(`${name}`);

		/**
		 * This function parses smile images from site.
		 *
		 * @return string array of images in base64 encoding.
		 */
		const getImages = (): string[] => {
			const imageList: string[] = [];

			loader(row)
				.find('> td.andr')
				.each((i, elem) => {
					imageList.push(loader(elem).find('> img').attr('src'));
				});

			return imageList;
		};

		// Write images
		const appleImage = getImages()[0];
		const googleImage = getImages()[1];
		const facebookImage = getImages()[2];
		const windowsImage = getImages()[3];
		const tweeterImage = getImages()[4];
		const joyImage = getImages()[5];
		const samsungImage = getImages()[6];

		smiles = {
			...smiles,
			[name]: appleImage,
		};
	});

	// Edit emoji-data.json
	editFile(path.join(__dirname, `../assets/data/emoji-data.json`), text => {
		return JSON.stringify(smiles);
	});

	// Edit types
	editFile(path.join(__dirname, `../types/EmojiName.ts`), text => {
		const typeText = `export type EmojiName = ${unionType
			.map(type => `'${type}'`)
			.join(' | ')};`;

		logger.log(typeText);

		return typeText;
	});
});
