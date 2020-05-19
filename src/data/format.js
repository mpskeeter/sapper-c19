function defaultZero(num) {
  if (num === null || num === undefined) {
    return 0;
  }
  return num;
}

function number(num) {
  if (num === null || num === undefined) {
    return 'unknown';
  }

  return num.toLocaleString();
}

export default {
  defaultZero,
  number,
};
