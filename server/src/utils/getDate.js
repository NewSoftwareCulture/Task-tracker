const format = (count) => (count < 10 ? `0${count}` : count);

export const getDate = () => {
  const date = new Date();
  const year = format(date.getFullYear());
  const month = format(date.getMonth() + 1);
  const day = format(date.getDate());
  const hours = format(date.getHours());
  const min = format(date.getMinutes());
  const sec = format(date.getSeconds());
  const ms = format(date.getMilliseconds());

  return {
    date: `${day}.${month}.${year}`,
    time: `${hours}:${min}`,
    fullTime: `${hours}:${min}:${sec}.${ms}`,
    fullDate: `${day}.${month}.${year} ${hours}:${min}`,
    year,
    month,
    day,
    hours,
    min,
    sec,
    ms
  };
};

export default getDate;
