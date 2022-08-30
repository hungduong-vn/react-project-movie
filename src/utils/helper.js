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

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'VND',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});