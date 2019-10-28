import { MainPage } from './pages';
import { handleSelectChange } from './helpers/handle-select-change';
import { handleShowMoreButtonClick } from './helpers/handle-show-more-button-click';
import './index.css';

window.onload = () => {
  document.body.appendChild(MainPage);
  document
    .getElementById('select')
    .addEventListener('change', handleSelectChange);
  document
    .getElementById('more')
    .addEventListener('click', handleShowMoreButtonClick);
};
