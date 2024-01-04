export const getUpdateDate = (date) => {
  if (!date) return;

  const months = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentyabr",
    "oktyabr",
    "noyabr",
    "dekabr",
  ];

  const getDay = new Date(date).getDate();
  const getMonth = months[new Date(date).getMonth()];
  const getYear = new Date(date).getFullYear();
  const getHours = new Date(date).getHours();
  const getMinutes = new Date(date).getMinutes();

  return { getDay, getMonth, getYear, getHours, getMinutes };
};

export const formatPhoneNumber = (phone = "01618") => {
  const arr = [...phone];
  const index = 2;
  const value = "-";
  arr.splice(index, 0, value);

  return arr.join("");
};
