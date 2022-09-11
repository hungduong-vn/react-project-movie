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
  const showtimeIds = _.map(showtimes, _.property("maLichChieu"));
  // console.log({ showtimeIds });
  const formatTime = _.map(showtimes, _.property("ngayChieuGioChieu"));
  const timeList = formatTime.map((ele, idx) => {
    const date = formatDate(ele).split(" ");
    return { date: date[0], time: { showtime: date[1], id: showtimeIds[idx] } };
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

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "VND",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const getImgFromUrl = (url) => {
  // console.log("geImgSize");
  // const img = new Image();
  // img.onload = function () {
  //   console.log(this.width, this.height, isImgFit(this.width, this.height));
  //   return isImgFit(this.width, this.height);
  // };
  // img.src = url;
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(img);
  });
};
export const isImgFit = async (url) => {
  const img = await getImgFromUrl(url);
  const result = img.width / img.height === 214 / 317;
  // console.log("isFit: ", result);
  return result;
};
