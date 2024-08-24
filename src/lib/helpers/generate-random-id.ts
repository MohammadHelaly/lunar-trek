const generateRandomId = () => {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
};

export { generateRandomId };
