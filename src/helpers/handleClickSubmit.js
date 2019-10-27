import { getInputValue } from './get-input-value';
import { getNewsArticles } from '../api/article';
import { createNewsSection } from '../component/news-section';

export const handleClickSubmit = async () => {
  const inputValue = getInputValue();
  try {
    const { articles } = await getNewsArticles();

    const articleNodes = articles.map(article => createNewsSection(article));
    document.getElementById('news').append(...articleNodes);
  } catch (error) {}
};
