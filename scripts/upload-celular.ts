import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dss3arlis',
  api_key: '635312175919955',
  api_secret: '-9doh5rMwKNO1bAwW341rKdKacY',
});

async function uploadCelular() {
  try {
    const result = await cloudinary.uploader.upload('public/images/celular.png', {
      folder: 'calistenia',
      public_id: 'celular',
      overwrite: true,
    });
    console.log('Uploaded celular:', result.secure_url);
  } catch (error) {
    console.error('Error uploading celular:', error);
  }
}

uploadCelular();
