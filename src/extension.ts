// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import {config, title} from 'process';
import * as vscode from 'vscode';
import * as a from './gcp-config.json';
import {getbucketname, listFiles, listallBuckets} from './setupExt';
import {uploadFile} from './uploadDAG';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  var path = require("path");
  const {Storage} = require('@google-cloud/storage');
  const storage = new Storage();
  const bucketName = '';

  // const gcp = JSON.parse('./gcp-config.json');
	console.log('Congratulations, your cloud composer extension is active!');

	let bucketsList = vscode.commands.registerCommand('helloworld.listBuckets', () => {
		listallBuckets(storage);
	});

  let connectEn = vscode.commands.registerCommand('helloworld.connectEn', () => {
		vscode.window.showInformationMessage('N/A');
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

	context.subscriptions.push(bucketsList, connectEn, uploadfile, listfiles);
}

// this method is called when your extension is deactivated
export function deactivate() {}
