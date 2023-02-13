import multer from 'multer';
// import fs from 'fs';

export class Multer {
  storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/uploads')
    },
    filename: function (req, file, cb) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname);
    }
  })

  fileFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }

  get upload() {
    return multer({ storage: this.storage, fileFilter: this.fileFilter });
  }

  uploadmssg(req: any, res: any) {
    // console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
  }

}


// export class Multer {
//   storage: any;
//   constructor(dir: string) {
//     this.storage = multer.diskStorage({
//       destination: function (req, file, cb) {
//         fs.mkdirSync(this.dir, { recursive: true })
//         cb(null, this.dir);
//       },
//       filename: function (req, file, cb) {
//         const file_extension = file.originalname.split(".")[1];
//         cb(null, this.fileName + '.' + file_extension)
//       }
//     });
//   }

//   get upload() {
//     return multer({ storage: this.storage });
//   }

//   private get fileName() {
//     const d = new Date();
//     const curr_date = d.getDate();
//     const curr_month = d.getMonth() + 1;
//     const curr_year = d.getFullYear();
//     const seconds = d.getSeconds();
//     const minutes = d.getMinutes();
//     const hour = d.getHours();
//     const milisec = d.getMilliseconds();
//     return curr_year.toString() + curr_month.toString() + curr_date.toString() + hour.toString() + minutes.toString() + seconds.toString() + milisec.toString();
// }



// }


// const imageStorage = multer.diskStorage({
//   // Destination to store image
//   destination: 'uploads',
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '_' + Date.now()
//            + path.extname(file.originalname))
//           // file.fieldname is name of the field (image)
//           // path.extname get the uploaded file extension
//   }
// });

// export class Multer {
//   storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './upload');
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     }
//   });
// }
