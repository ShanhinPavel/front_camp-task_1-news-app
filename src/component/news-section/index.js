import { createElement } from '../../helpers/create-element';
import './index.css';

export const createNewsSection = ({ title, url, description, author }) => {
  const article = createElement('div', { class: 'one-news__container' });
  const articleTitle = createElement(
    'a',
    {
      class: 'one-news__container-title',
      href: url,
      target: '_blank'
    },
    title
  );
  const articleDescription = createElement(
    'p',
    {
      class: 'one-news__container-description'
    },
    description
  );
  const authorNameContainer = createElement(
    'p',
    {
      class: 'one-news__container-author'
    },
    author
  );

  article.append(articleTitle, articleDescription, authorNameContainer);

  return article;
};
