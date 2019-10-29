import { getNewsArticles, PAGE_SIZE, PAGE_NUMBER } from '../api/article';
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
    +pageNumber + PAGE_NUMBER
  );

  newsContainer.setAttribute(
    'category',
    `${category}-${+pageNumber + PAGE_NUMBER}`
  );

  const news = getNodesCollection(createNewsSection, articles);

  newsContainer.append(...news);

  hideOrShowMoreButton(totalResults, PAGE_SIZE, +pageNumber + PAGE_NUMBER);
};
