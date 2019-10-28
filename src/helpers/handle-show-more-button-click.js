import { getNewsArticles } from '../api/article';
import { getNodesCollection } from '../helpers/get-nodes-collection';
import { createNewsSection } from '../component/news-section';
import { hideOrShowMoreButton } from './hide-show-more-button';

export const getCategoryPageNumber = attributeValue =>
  attributeValue && attributeValue.split('-');

export const handleShowMoreButtonClick = async () => {
  const newsContainer = document.getElementById('news');

  const [category, pageNumber] = getCategoryPageNumber(
    newsContainer.getAttribute('category')
  );

  const { articles, totalResults } = await getNewsArticles(
    category,
    +pageNumber + 1
  );

  newsContainer.setAttribute('category', `${category}-${+pageNumber + 1}`);

  const news = getNodesCollection(createNewsSection, articles);

  newsContainer.append(...news);

  hideOrShowMoreButton(totalResults, 20, +pageNumber + 1);
};
