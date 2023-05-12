export const getAllNews = state => state.news.items;

export const getHintsh = state => ({
  hints: state.news.hints,
  totalHints: state.news.totalHints,
});
