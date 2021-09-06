import * as vscode from 'vscode';
import {listFiles, returnlistFiles} from "./setupExt";

export function uploadFile(fileList: string[], bucketName: string, filePath: any, destFileName: string, storage: any) {
  {
    var fileType = filePath.split(".").pop();
    var files = returnlistFiles(storage, bucketName);

    if (fileType != "py") {
      vscode.window.showErrorMessage(`Error: FileType is not a Python file.`);
      return;
    }

    for (let i in files) {
      console.log(i);
      if (i == destFileName) {
        vscode.window.showWarningMessage(`This file is already in the bucket. Would you like to overwrite this file?`);
      }
    }

    async function uploadFile() {
      await storage.bucket(bucketName).upload(filePath, {
        destination: destFileName,
      });

      vscode.window.showInformationMessage(`${destFileName} uploaded to ${bucketName}`);
      console.log(`${destFileName} uploaded to ${bucketName}`)
    }
    uploadFile().catch(console.error);
  }
}
