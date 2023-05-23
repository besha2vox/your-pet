const transformCategoryName = category => {
  if (category === 'lost-found') return category.split('-').join('/');

  return category.split('-').join(' ');
};

export default transformCategoryName;
