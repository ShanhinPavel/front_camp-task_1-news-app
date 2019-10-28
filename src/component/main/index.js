import { createElement } from '../../helpers/create-element';
import { getCategorySelect } from '../category-select';
import { getShowMoreButton } from '../show-more-button';
import { getNews } from '../news';
import './index.css';

export const getMain = () => {
  const main = createElement('div', { class: 'main__container' });
  const searchInput = getCategorySelect();
  const news = getNews();
  const showMoreButton = getShowMoreButton();

  main.append(searchInput, news, showMoreButton);

  return main;
};
