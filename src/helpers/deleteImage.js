export const deleteImage = async (public_id, signature) => {
  const deleted = await fetch(
    "https://api.cloudinary.com/v1_1/dfolqygpk/image/destroy", // Removed space after v1_1/
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        public_id: public_id,
        api_key: "379511757393755",
        api_secret: "JT41JDXZKvci2zTzKvn0T9g5LVo",
        signature: signature,
        timestamp: Math.floor((new Date().getTime() + 31536000000) / 1000),
      }),
    }
  );
  const data = await deleted.json();
  return data;
};
