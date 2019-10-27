import { createElement } from '../../helpers/create-element';
import './index.css';

export const getSearchInput = () => {
  const searchContainer = createElement('div', {
    class: 'search-input__container'
  });
  const form = createElement('div', { class: 'searh-input__container-form' });
  const textInput = createElement('input', {
    class: 'search-input__container-text-input',
    placeholder: 'Enter your request',
    id: 'search-input',
    type: 'text'
  });
  const button = createElement(
    'button',
    {
      class: 'search-input__container-button',
      id: 'submit'
    },
    'Submit'
  );

  form.append(textInput, button);
  searchContainer.append(form);

  return searchContainer;
};
