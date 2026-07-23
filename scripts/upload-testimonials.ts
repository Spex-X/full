import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dss3arlis',
  api_key: '635312175919955',
  api_secret: '-9doh5rMwKNO1bAwW341rKdKacY',
});

const testimonials = [
  { name: 'fernanda', file: 'public/images/fernanda.png' },
  { name: 'juliana', file: 'public/images/juliana.png' },
  { name: 'beatriz', file: 'public/images/beatriz.png' },
  { name: 'carla', file: 'public/images/carla.png' },
];

async function uploadTestimonials() {
  for (const testimonial of testimonials) {
    try {
      const result = await cloudinary.uploader.upload(testimonial.file, {
        folder: 'calistenia/testimonials',
        public_id: testimonial.name,
        overwrite: true,
      });
      console.log(`Uploaded ${testimonial.name}:`, result.secure_url);
    } catch (error) {
      console.error(`Error uploading ${testimonial.name}:`, error);
    }
  }
}

uploadTestimonials();
