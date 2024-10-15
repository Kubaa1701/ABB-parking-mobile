export default function getCurrentMonth() {
  const today = new Date();
  const currentMonth = String(today.getMonth() + 1);
  if (currentMonth.length < 2) {
    return '0' + currentMonth;
  } else {
    return currentMonth;
  }
}
