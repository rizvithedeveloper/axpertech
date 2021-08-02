import moment from "moment";

export const getStandardDate = (date) => {
  let standardDate = moment(date).format("MMMM DD, YYYY, h:mm a");

  return standardDate;
};
