import { createElement } from '../../helpers/create-element';
import './index.css';

export const getNews = () => {
  const newsContainer = createElement('div', {
    class: 'news__container',
    id: 'news'
  });

  return newsContainer;
};
