import imageCompression from 'browser-image-compression';

export async function compressImage(file) {

    console.log("Original file size: ", file.size / 1024 / 1024)

    const imageFile = file;

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    }

    try {
        const compressedFile = await imageCompression(imageFile, options);
        console.log("Compressed file size: ", compressedFile.size / 1024 / 1024)

        return compressedFile; // write your own logic
    } catch (error) {
      console.log(error);
    }
  
  }