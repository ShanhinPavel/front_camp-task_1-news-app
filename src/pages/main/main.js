import { Footer, Header, Main } from '../../component';
import { createElement } from '../../helpers/create-element';
import './main.css';

export const getMainPage = () => {
  const mainPage = createElement('div', { class: 'main-page__container' });
  mainPage.append(Header, Main, Footer);

  return mainPage;
};
