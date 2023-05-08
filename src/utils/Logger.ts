import * as clc from 'cli-colors';

class Logger {
	private getLogMessage(prefix?: string, message?: string) {
		return `${prefix} ${message}`;
	}

	/**
	 * Logs message.
	 *
	 * @param {string} [msg]      message
	 */
	log(msg?: string | object) {
		if (typeof msg === 'object') {
			console.log(this.getLogMessage(clc.green('[LOG]'), 'Object:'));
			console.log(msg);

			return;
		}

		console.log(this.getLogMessage(clc.green('[LOG]'), msg));
	}

	/**
	 * Logs error.
	 *
	 * @param {string} [msg]      error
	 */
	error(msg?: string) {
		console.error(this.getLogMessage(clc.red('[ERR]'), msg));
	}

	/**
	 * Logs warning.
	 *
	 * @param {string} [msg]      warning
	 */
	warn(msg?: string) {
		console.warn(this.getLogMessage(clc.yellow('[WRN]'), msg));
	}

	/**
	 * Display debug message.
	 *
	 * @param {string} [msg]      message
	 */
	debug(msg?: string | object) {
		if (typeof msg === 'object') {
			console.log(this.getLogMessage(clc.green('[LOG]'), 'Object:'));
			console.log(msg);

			return;
		}

		console.log(this.getLogMessage(clc.cyan('[DEBUG]'), msg));
	}

	/**
	 * Displays blank row.
	 */
	blank() {
		console.log(' ');
	}
}

export default Logger;
