const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000) + 1;
};

export default generateUniqueId;
