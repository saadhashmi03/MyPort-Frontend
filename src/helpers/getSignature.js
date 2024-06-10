export const getSignature = async (publicId) => {
  const res = await fetch(`https://myportapi.onrender.com/api/signature?publicId=${publicId}`);
  const { signature } = await res.json();
  return signature;
}
