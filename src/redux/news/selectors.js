export const getAllNews = state => state.news.items;

export const getHints = state => ({
  hints: state.news.hints,
  totalHints: state.news.totalHints,
});

export const loading = state => state.news.isLoading;
export const error = ({ news }) => news.error;
