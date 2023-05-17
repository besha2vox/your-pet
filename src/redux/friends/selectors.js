export const getAllFriends = ({ friends }) => friends.items;
export const loading = ({ friends }) => friends.isLoading;
export const error = ({ friends }) => friends.error;

export const getHints = ({ friends }) => ({
  hints: friends.hints,
  totalHints: friends.totalHints,
});
