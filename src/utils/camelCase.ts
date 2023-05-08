export const camelCase = (input?: string) => {
	const replacements: { original: string; replacement: string }[] = [
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

		return (
			output + word.charAt(0).toUpperCase().concat(word.slice(1, word.length))
		);
	}, '');
};
