import * as fs from 'fs';
// import { writeFile } from 'fs';
// import { appendFile } from 'fs';
// import { rename } from 'fs';
// import { unlink } from 'fs';

export class FileHandle {

    createfiles(req: any, res: any) {
        fs.writeFile('newFile.txt', 'Learn Node FS module !!!!!!!', function (err) {
          if (err) throw err;
          res.json('File is created successfully.');
        });
      }
    
      appendfiles(req: any, res: any) {
        fs.appendFile('newFile.txt', "append data to the file", 'utf8',
          // callback function
          function (err) {
            if (err) throw err;
            // if no error
            res.json("Data is appended to file successfully.")
          });
      }
    
      renamefiles(req: any, res: any) {
        fs.rename('newFile.txt', 'newFile-v2.txt', function (err) {
          if (err) throw err;
          res.json('File Renamed.');
        });
      }
    
      deletefiles(req: any, res: any) {
        fs.unlink('newFile-v2.txt', function (err) {
          if (err) throw err;
          // if no error, file has been deleted successfully
          res.json('File deleted!');
        });
      }

}