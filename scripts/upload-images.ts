import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

cloudinary.config({
  cloud_name: 'dss3arlis',
  api_key: '635312175919955',
  api_secret: '-9doh5rMwKNO1bAwW341rKdKacY',
  secure: true,
});

const imagesDir = path.join(process.cwd(), 'public/images');

async function uploadImages() {
  const files = fs.readdirSync(imagesDir);
  
  for (const file of files) {
    if (file === '.gitkeep') continue;
    
    const filePath = path.join(imagesDir, file);
    const publicId = file.split('.')[0]; // Remove extension
    
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        folder: 'calistenia',
        resource_type: 'image',
      });
      
      console.log(`✅ Uploaded: ${file}`);
      console.log(`   URL: ${result.secure_url}`);
      console.log(`   Public ID: ${result.public_id}`);
      console.log('');
    } catch (error) {
      console.error(`❌ Error uploading ${file}:`, error);
    }
  }
}

uploadImages();
