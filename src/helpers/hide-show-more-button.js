export const hideOrShowMoreButton = (total, limit, pages) => {
  const moreButton = document.getElementById('more');

  if (limit * pages < total) moreButton.style.display = 'block';
  else moreButton.style.display = 'none';
};
