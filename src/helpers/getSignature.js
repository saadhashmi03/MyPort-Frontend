export const getSignature = async (publicId) => {
  const res = await fetch(`http://localhost:5000/api/signature?publicId=${publicId}`);
  const { signature } = await res.json();
  return signature;
}
