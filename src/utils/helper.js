import moment from "moment";

export const formatDate = (date) => {
  const formatDate = "DD/MM HH:mm A"
  moment.locale();
  return moment(date).format(formatDate);
};
