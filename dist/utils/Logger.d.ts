declare class Logger {
    private getLogMessage;
    /**
     * Logs message.
     *
     * @param {string} [msg]      message
     */
    log(msg?: string | object): void;
    /**
     * Logs error.
     *
     * @param {string} [msg]      error
     */
    error(msg?: string): void;
    /**
     * Logs warning.
     *
     * @param {string} [msg]      warning
     */
    warn(msg?: string): void;
    /**
     * Display debug message.
     *
     * @param {string} [msg]      message
     */
    debug(msg?: string | object): void;
    /**
     * Displays blank row.
     */
    blank(): void;
}
export default Logger;
