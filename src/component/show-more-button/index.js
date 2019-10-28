import { createElement } from '../../helpers/create-element';
import './index.css';

export const getShowMoreButton = () => {
  const buttonContainer = createElement('div', {
    class: 'button__container',
    id: 'more'
  });
  const button = createElement(
    'button',
    { class: 'button__container-button' },
    'show more'
  );
  buttonContainer.append(button);
  return buttonContainer;
};
