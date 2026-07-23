import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dss3arlis',
  api_key: '635312175919955',
  api_secret: '-9doh5rMwKNO1bAwW341rKdKacY',
});

async function uploadGuarantee() {
  try {
    const result = await cloudinary.uploader.upload('public/images/30dias.jpeg', {
      folder: 'calistenia',
      public_id: 'garantia-30-dias',
      overwrite: true,
    });
    console.log('Uploaded guarantee seal:', result.secure_url);
  } catch (error) {
    console.error('Error uploading guarantee seal:', error);
  }
}

uploadGuarantee();
