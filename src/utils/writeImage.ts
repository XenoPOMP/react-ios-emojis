import createFile from 'create-file';
import fs from 'fs';
import isExistingFile from 'is-existing-file';
import { decode } from 'node-base64-image';
import path from 'path';

import { EmojiVendor } from '../types/EmojiVendor';

import Logger from './Logger';

export const writeImage = async (
	imagePath: string,
	imageList: string[]
): Promise<string> => {
	const logger: Logger = new Logger();

	const index = parseInt(
		/{{\d}}/i.exec(imagePath).toString().replace(/[{}]/gi, '')
	);

	const labels: (keyof EmojiVendor)[] = [
		'apple',
		'google',
		'facebook',
		'windows',
		'tweeter',
		'joy',
		'samsung',
	];

	const editedPath = imagePath.replace(/{{\d}}/i, labels[index]);
	const encodedImage = imageList[index];

	// Create blank file
	isExistingFile(`${editedPath}.png`, async result => {
		if (!result) {
			// logger.debug(`File at path ${editedPath} does not exist. Writing it...`);

			await createFile(`${editedPath}.png`, '', err => {
				if (err) {
					logger.error(`Creating file error: ${err}`);
					return;
				}

				// logger.debug(`Blank file created at path: ${editedPath}`);
			});
		}
	});

	await decode(encodedImage, {
		fname: editedPath,
		ext: 'png',
	})
		.then(() => {
			// logger.debug(`File at path ${editedPath} has been written`);
		})
		.catch(reason => {
			logger.error(`Failed to update image: ${reason}`);
		});

	return `src/images/${editedPath.split('/').reverse()[1]}/${editedPath
		.split('/')
		.reverse()[0]
		.replace('.png', '')}`;
};
