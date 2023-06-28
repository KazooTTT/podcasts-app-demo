// format 2023-06-11 18:20:00 to x月x日
export function formatTime(time: string) {
  const date = new Date(time);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}
// format duration to min
export function formatDuration(duration: number, isShowSecond?: boolean) {
  return isShowSecond
    ? `${Math.floor(duration / 60)}min${duration % 60}s`
    : `${Math.floor(duration / 60)}min`;
}
// format duration to min:sec which has 2 digits
export function formatDuration2MinSec(duration: number) {
  const min = Math.floor(duration / 60);
  const sec = duration % 60;
  const secStr = sec < 10 ? "0" + sec.toFixed(0) : sec.toFixed(0);
  return `${min}:${secStr}`;
}

// convert ser to min:sec which has two digits
export const formatTime2MinSec = (sec: number) => {
  const min = Math.floor(sec / 60);
  const second = sec % 60;
  const minStr = min < 10 ? "0" + min.toFixed(0) : min.toFixed(0);
  const secondStr = second < 10 ? "0" + second.toFixed(0) : second.toFixed(0);
  return `${minStr}:${secondStr}`;
};
