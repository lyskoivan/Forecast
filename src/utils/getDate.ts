export default {
  getStartDay(days = 0): number {
    const date = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + days,
    ).toString();

    return Date.parse(date);
  },
};
