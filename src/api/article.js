const API_KEY = 'f3931451dc1247fdb198996ccfe8be09';
const PAGE_SIZE = 5;
const PAGE_NUMBER = 1;
const URL = 'https://newsapi.org/v2/top-headlines';

export const getNewsArticles = async (
  url = URL,
  pageSize = PAGE_SIZE,
  pageNumber = PAGE_NUMBER
) => {
  try {
    const request = await fetch(
      `${url}?country=us&apiKey=${API_KEY}&pageSize=${pageSize}&page=${pageNumber}`
    );
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
