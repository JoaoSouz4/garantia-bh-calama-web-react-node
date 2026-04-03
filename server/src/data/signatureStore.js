let signatureBase64 = null;

function setSignature(value) {
  signatureBase64 = value;
}

function getSignature() {
  return signatureBase64;
}

function clearSignature() {
  signatureBase64 = null;
}

module.exports = {
  setSignature,
  getSignature,
  clearSignature
};
