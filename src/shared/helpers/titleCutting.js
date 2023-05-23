const cutTitle = title => {
  return title.length >= 35 ? title.slice(0, 35) + ' ...' : title;
};

export default cutTitle;
