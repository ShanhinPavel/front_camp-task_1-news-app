export const createArticle = ({ title, url, description }) => {
  const article = createElement('div', { class: 'article__container' });
  const articleTitle = createElement(
    'h2',
    {
      class: 'article__container-title'
    },
    title
  );
  const articleDescription = createElement(
    'p',
    {
      class: 'article__container-description'
    },
    description
  );
  const articleContainerSourceUrl = createElement(
    'a',
    {
      class: 'article__container-source-url',
      href: url
    },
    url
  );

  article.append(articleTitle, articleDescription, articleContainerSourceUrl);

  return article;
};
