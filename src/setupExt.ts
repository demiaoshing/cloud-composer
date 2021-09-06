import * as cp from "child_process";
import {stringify} from "querystring";

export async function getbucketname(storage: any) {

}

export function listFiles(storage: any, bucketName: string):string[] {
  let filelist: string[] = [];
  async function listFiles() {
    // Lists files in the bucket
    const [files] = await storage.bucket(bucketName).getFiles();

    console.log('Files:');
    files.forEach((file: {name: any;}) => {
      let fi: string = file.name;
      console.log(fi);
      filelist.push(fi);
    });

  }
  listFiles().catch(console.error);
  return filelist;
}

export function returnlistFiles(storage: any, bucketName: string):string[] {
  let filelist: string[] = [];
  async function listFiles() {
    // Lists files in the bucket
    const [files] = await storage.bucket(bucketName).getFiles();

    files.forEach((file: {name: any;}) => {
      let fi: string = file.name;
      filelist.push(fi);
    });

  }
  listFiles().catch(console.error);
  return filelist;
}




