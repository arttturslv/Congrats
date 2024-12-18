import imageCompression from "browser-image-compression";

export async function compressImage(file) {
  console.log("Original file size: ", file.size / 1024 / 1024);

  const imageFile = file;

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 800,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(imageFile, options);
    console.log("Compressed file size: ", compressedFile.size / 1024 / 1024);

    return compressedFile; // write your own logic
  } catch (error) {
    console.log(error);
  }
}

export async function toImage64Compressed(file) {
  if (!file) {
    console.warn("Nenhuma imagem selecionada.");
    return;
  }

  let fileCompressed = await compressImage(file);

  const fileAsImage64 = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = () => reject("Erro ao ler arquivo");
    reader.readAsDataURL(fileCompressed);
  });

  return fileAsImage64;
}

export function fileToURL(file) {
  if(!file) 
    console.error('Arquivo selecionado não é valido.')

  const fileAsURL = URL.createObjectURL(file);

  return fileAsURL;
}