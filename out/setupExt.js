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
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnlistFiles = exports.listFiles = exports.getbucketname = void 0;
function getbucketname(storage) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.getbucketname = getbucketname;
function listFiles(storage, bucketName) {
    let filelist = [];
    function listFiles() {
        return __awaiter(this, void 0, void 0, function* () {
            // Lists files in the bucket
            const [files] = yield storage.bucket(bucketName).getFiles();
            console.log('Files:');
            files.forEach((file) => {
                let fi = file.name;
                console.log(fi);
                filelist.push(fi);
            });
        });
    }
    listFiles().catch(console.error);
    return filelist;
}
exports.listFiles = listFiles;
function returnlistFiles(storage, bucketName) {
    let filelist = [];
    function listFiles() {
        return __awaiter(this, void 0, void 0, function* () {
            // Lists files in the bucket
            const [files] = yield storage.bucket(bucketName).getFiles();
            files.forEach((file) => {
                let fi = file.name;
                filelist.push(fi);
            });
        });
    }
    listFiles().catch(console.error);
    return filelist;
}
exports.returnlistFiles = returnlistFiles;
//# sourceMappingURL=setupExt.js.map