import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dss3arlis',
  api_key: '635312175919955',
  api_secret: '-9doh5rMwKNO1bAwW341rKdKacY',
});

const images = [
  { name: 'antesdepois1', file: 'public/images/antesdepois1.png' },
  { name: 'antesdepois2', file: 'public/images/antesdepois2.png' },
  { name: 'antesdepois3', file: 'public/images/antesdepois3.png' },
];

async function uploadImages() {
  for (const image of images) {
    try {
      const result = await cloudinary.uploader.upload(image.file, {
        folder: 'calistenia/before-after',
        public_id: image.name,
        overwrite: true,
      });
      console.log(`Uploaded ${image.name}:`, result.secure_url);
    } catch (error) {
      console.error(`Error uploading ${image.name}:`, error);
    }
  }
}

uploadImages();
