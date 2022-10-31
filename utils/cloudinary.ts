import * as Cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import getConfig from 'next/config';
import multer from "multer";

const { serverRuntimeConfig } = getConfig();
const cloudinary = Cloudinary.v2;

cloudinary.config({
  cloud_name: serverRuntimeConfig.CLOUDINARY_CLOUD_NAME,
  api_key: serverRuntimeConfig.CLOUDINARY_API_KEY,
  api_secret: serverRuntimeConfig.CLOUDINARY_API_SECRET,
});

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
// });

// const uploads = multer({ storage });

export default cloudinary;