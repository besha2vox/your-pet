const padStart = value => {
  return String(value).padStart(2, '0');
};

const transformDate = bd => {
  const date = new Date(bd);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${padStart(day)}.${padStart(month)}.${year}`;
};

export default transformDate;
