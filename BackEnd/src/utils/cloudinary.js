const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY,
  secure: true,
});

const cloudinaryUploadImg = async (fileToUpload) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      fileToUpload,
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            url: result.secure_url,
            resource_type: "auto",
          });
        }
      }
    );
  });
};

const cloudinaryDeleteImg = async (fileToDelete) => {
  return new Promise((resolve) => {
    cloudinary.uploader.destroy(
      fileToDelete,
      (result) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            url: result.secure_url,
            resource_type: "auto",
          });
        }
      }
    );
  });
};
module.exports = { cloudinaryUploadImg, cloudinaryDeleteImg };
