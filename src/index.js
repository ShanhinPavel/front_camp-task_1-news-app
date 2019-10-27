import { MainPage } from './pages';
import { handleClickSubmit } from './helpers/handleClickSubmit';
import './index.css';

window.onload = () => {
  document.body.appendChild(MainPage);
  document
    .getElementById('submit')
    .addEventListener('click', handleClickSubmit);
};
