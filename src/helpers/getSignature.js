export const getSignature = async(publicId)=>{
  const res= await fetch(`$(window.location.origin/api/signature?publicId=${publicId}`);
    const {signature}= await res.json();
    return signature;
}