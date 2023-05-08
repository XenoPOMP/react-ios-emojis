"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeImage = void 0;
const create_file_1 = __importDefault(require("create-file"));
const is_existing_file_1 = __importDefault(require("is-existing-file"));
const node_base64_image_1 = require("node-base64-image");
const Logger_1 = __importDefault(require("./Logger"));
const writeImage = (imagePath, imageList) => __awaiter(void 0, void 0, void 0, function* () {
    const logger = new Logger_1.default();
    const index = parseInt(/{{\d}}/i.exec(imagePath).toString().replace(/[{}]/gi, ''));
    const labels = [
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
    (0, is_existing_file_1.default)(`${editedPath}.png`, (result) => __awaiter(void 0, void 0, void 0, function* () {
        if (!result) {
            // logger.debug(`File at path ${editedPath} does not exist. Writing it...`);
            yield (0, create_file_1.default)(`${editedPath}.png`, '', err => {
                if (err) {
                    logger.error(`Creating file error: ${err}`);
                    return;
                }
                // logger.debug(`Blank file created at path: ${editedPath}`);
            });
        }
    }));
    yield (0, node_base64_image_1.decode)(encodedImage, {
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
});
exports.writeImage = writeImage;
//# sourceMappingURL=writeImage.js.map