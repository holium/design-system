export function toISOLocal(d) {
  var z = (n) => ('0' + n).slice(-2);
  var zz = (n) => ('00' + n).slice(-3);
  var off = d.getTimezoneOffset();
  var sign = off > 0 ? '-' : '+';
  off = Math.abs(off);

  return (
    d.getFullYear() +
    '-' +
    z(d.getMonth() + 1) +
    '-' +
    z(d.getDate()) +
    'T' +
    z(d.getHours()) +
    ':' +
    z(d.getMinutes()) +
    ':' +
    z(d.getSeconds()) +
    '.' +
    zz(d.getMilliseconds()) +
    sign +
    z((off / 60) | 0) +
    ':' +
    z(off % 60)
  );
}
