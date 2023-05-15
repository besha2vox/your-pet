export const selectNotices = state => state.notices.items;

export const selectTotalHintsNotices = state => state.notices.totalHints;

export const selectCurrentNotice = state => state.notices.currentNotice;

export const selectNoticesIsLoading = state => state.notices.isLoading;

export const selectNoticesError = state => state.notices.error;
