export const uploadImage = async (selectImg) => {
  const formData = new FormData();
  formData.append("file", selectImg);
  formData.append("upload_preset", "portfolio-saad");
  formData.append("api_key", "379511757393755");

  // upload image to cloudinary

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dfolqygpk/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await res.json();
  if (!data) {
    return console.log("Error occured while uploading image ");
  }
  const imageData = {
    secureUrl: data.secure_url,
    publicId: data.public_id,
    deleteToken: data.delete_token,
  };
  return imageData;
};
