// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import {config, title} from 'process';
import * as vscode from 'vscode';
import * as a from './gcp-config.json';
import {getbucketname, listFiles} from './setupExt';
import {uploadFile} from './uploadDAG';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  const command = 'helloworld.sayWelcome';
  var path = require("path")

  let result: string;

  const commandHandler = (name: string = 'Demi') => {
    vscode.window.showInformationMessage(`Welcome ${name}!!!`);
  };

  const {Storage} = require('@google-cloud/storage');
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
    const filePath = vscode.window.activeTextEditor?.document.fileName;
    const destFileName = path.basename(filePath);
    let listoffiles: string[] = listFiles(storage, bucketName)
    uploadFile(listoffiles, bucketName, filePath, destFileName, storage);
	});

  let listfiles = vscode.commands.registerCommand('helloworld.listFiles', () => {
    listFiles(storage, bucketName);
	});

	context.subscriptions.push(disposable, uploadfile, listfiles);
  context.subscriptions.push(vscode.commands.registerCommand(command, commandHandler));
}

// this method is called when your extension is deactivated
export function deactivate() {}
