"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const setupExt_1 = require("./setupExt");
const uploadDAG_1 = require("./uploadDAG");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    const command = 'helloworld.sayWelcome';
    var path = require("path");
    let result;
    const commandHandler = (name = 'Demi') => {
        vscode.window.showInformationMessage(`Welcome ${name}!!!`);
    };
    const { Storage } = require('@google-cloud/storage');
    const storage = new Storage();
    const bucketName = 'europe-west1-test-environme-c9196720-bucket';
    // getbucketname(storage);
    // const gcp = JSON.parse('./gcp-config.json');
    console.log('Congratulations, your extension "helloworld" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
        vscode.window.showInformationMessage('Testing');
    });
    let uploadfile = vscode.commands.registerCommand('helloworld.uploadFile', () => {
        var _a;
        const filePath = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.fileName;
        const destFileName = path.basename(filePath);
        let listoffiles = setupExt_1.listFiles(storage, bucketName);
        uploadDAG_1.uploadFile(listoffiles, bucketName, filePath, destFileName, storage);
    });
    let listfiles = vscode.commands.registerCommand('helloworld.listFiles', () => {
        setupExt_1.listFiles(storage, bucketName);
    });
    context.subscriptions.push(disposable, uploadfile, listfiles);
    context.subscriptions.push(vscode.commands.registerCommand(command, commandHandler));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map