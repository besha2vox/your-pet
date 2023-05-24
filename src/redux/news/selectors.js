export const selectAllNews = state => state.news.items;

export const selectHints = state => ({
  hints: state.news.hints,
  totalHints: state.news.totalHints,
});

export const selectNewsLoading = state => state.news.isLoading;
export const selectNewsError = ({ news }) => news.error;
