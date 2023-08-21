import dayjs from "dayjs";

export const formatStartDateText = (date, selectedStartDate) => {
  return selectedStartDate ? dayjs(date).format("YYYY-MM-DD") : "Start Date";
};

export const formatLastDateText = (date, selectedLastDate) => {
  return selectedLastDate ? dayjs(date).format("YYYY-MM-DD") : "Last Date";
};
