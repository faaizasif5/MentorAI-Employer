const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDiff = Math.abs(end - start);
  const durationInDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return durationInDays;
};

export default calculateDuration;
