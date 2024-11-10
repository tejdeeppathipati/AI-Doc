// src/utils/s3.js
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({ region: 'YOUR_REGION' });

export const uploadFileToS3 = async (file, userId) => {
  const params = {
    Bucket: 'YOUR_BUCKET_NAME',
    Key: `userFiles/${userId}/${file.name}`,
    Body: file,
    ContentType: file.type,
  };
  await s3.send(new PutObjectCommand(params));
};
