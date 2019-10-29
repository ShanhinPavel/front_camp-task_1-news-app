import { getNewsArticles } from '../api/article';
import { createNewsSection } from '../component/news-section';
import { getNodesCollection } from './get-nodes-collection';
import { hideOrShowMoreButton } from '../helpers/hide-show-more-button';

export const handleSelectChange = async event => {
  const newsContainer = document.getElementById('news');
  const moreButton = document.getElementById('more');

  if (newsContainer.children.length) {
    newsContainer.innerHTML = '';
    newsContainer.setAttribute('category', '');
    moreButton.style.display = 'none';
  }
  newsContainer.setAttribute('category', `${event.target.value}-${1}`);
  try {
    const { articles, totalResults } = await getNewsArticles(
      event.target.value
    );
    const articleNodes = getNodesCollection(createNewsSection, articles);
    document.getElementById('news').append(...articleNodes);
    hideOrShowMoreButton(totalResults, 20, 1);
  } catch (error) {}
};
