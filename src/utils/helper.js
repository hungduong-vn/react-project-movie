import moment from "moment";
import _ from "lodash";

export const formatDate = (date, formatDate = "DD/MM HH:mm") => {
  moment.locale();
  return moment(date).format(formatDate);
};

// Input: array of showTimes
// Output: object key=day, value=[time1, time2...]
export const filterShowtimesByDay = (showtimes) => {
  // console.log('FilterShowtimes',_.map(showtimes, _.property("ngayChieuGioChieu")));
  const formatTime = _.map(showtimes, _.property("ngayChieuGioChieu"));
  const timeList = formatTime.map((ele) => {
    const date = formatDate(ele).split(" ");
    return { date: date[0], time: date[1] };
  });
  // console.log({ timeList });
  let dateList = _.groupBy(timeList, "date");
  // console.log({ dateList });
  const result = [];
  for (const i in dateList) {
    dateList[i] = dateList[i].map((ele) => ele.time).sort();
    result.push({ date: i, timeList: dateList[i] });
  }
  // console.log(result);
  return result;
};
