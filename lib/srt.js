
export const fromSrt = function (data) {
  data = data.replace(/\r/g, "");
  var regex = /(\d+)\n(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/g;
  data = data.split(regex);
  data.shift();

  var items = [];
  for (var i = 0; i < data.length; i += 4) {
    const startTimeStr = data[i + 1].trim().split(",")[0];
    const endTimeStr = data[i + 2].trim().split(",")[0];
    // convert hh:mm:ss string to ss number
    const startTimeSec =
      startTimeStr.split(":").reduce((acc, cur) => 60 * acc + +cur, 0) ?? 0;
    const endTimeSec =
      endTimeStr.split(":").reduce((acc, cur) => 60 * acc + +cur, 0) ?? 0;

    items.push({
      id: data[i].trim(),
      startTimeStr: startTimeStr,
      startTimeSec,
      endTimeStr: endTimeStr,
      endTimeSec,
      text: data[i + 3].trim(),
    });
  }

  return items;
};
