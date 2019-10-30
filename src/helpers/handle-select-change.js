import { getNewsArticles, PAGE_NUMBER, PAGE_SIZE } from '../api/article';
import { createNewsSection } from '../component/news/news-section/news-section';
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

  newsContainer.setAttribute(
    'category',
    `${event.target.value}-${PAGE_NUMBER}`
  );

  try {
    const { articles, totalResults } = await getNewsArticles(
      event.target.value
    );
    const articleNodes = getNodesCollection(createNewsSection, articles);

    document.getElementById('news').append(...articleNodes);
    hideOrShowMoreButton(totalResults, PAGE_SIZE, PAGE_NUMBER);
  } catch (error) {}
};
