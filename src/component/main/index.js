import { createElement } from '../../helpers/create-element';
import { getSearchInput } from '../input';
import { getNews } from '../news';
import './index.css';

export const getMain = () => {
  const main = createElement('div', { class: 'main__container' });
  const searchInput = getSearchInput();
  const news = getNews();

  main.append(searchInput, news);

  return main;
};
