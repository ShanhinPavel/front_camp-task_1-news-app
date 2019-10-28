const API_KEY = 'f3931451dc1247fdb198996ccfe8be09';
const PAGE_NUMBER = 1;
const URL = 'https://newsapi.org/v2/top-headlines';

export const getNewsArticles = async (
  category,
  pageNumber = PAGE_NUMBER,
  url = URL
) => {
  console.log(pageNumber);
  try {
    const request = await fetch(
      `${url}?category=${category}&page=${pageNumber}&apiKey=${API_KEY}`
    );
    const response = await request.json();

    return response;
  } catch (error) {
    console.log(error);
  }
};
