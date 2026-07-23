import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dss3arlis',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

export function getCloudinaryUrl(publicId: string, options?: {
  width?: number;
  height?: number;
  quality?: string;
  format?: string;
}) {
  return cloudinary.url(publicId, {
    ...options,
    quality: options?.quality || 'auto',
    format: options?.format || 'auto',
    fetch_format: 'auto',
  });
}
