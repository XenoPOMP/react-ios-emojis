"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const clc = __importStar(require("cli-colors"));
class Logger {
    getLogMessage(prefix, message) {
        return `${prefix} ${message}`;
    }
    /**
     * Logs message.
     *
     * @param {string} [msg]      message
     */
    log(msg) {
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
    error(msg) {
        console.error(this.getLogMessage(clc.red('[ERR]'), msg));
    }
    /**
     * Logs warning.
     *
     * @param {string} [msg]      warning
     */
    warn(msg) {
        console.warn(this.getLogMessage(clc.yellow('[WRN]'), msg));
    }
    /**
     * Display debug message.
     *
     * @param {string} [msg]      message
     */
    debug(msg) {
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
exports.default = Logger;
//# sourceMappingURL=Logger.js.map