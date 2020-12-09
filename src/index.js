import initiatePage from './components/initiate_page';
import menuPage from './components/menu';
import contactPage from './components/contact_page';
import './assets/style.css';

const root = document.querySelector('div#content');
initiatePage(root);
menuPage(root);
contactPage(root);

const tablinks = document.querySelectorAll('a.tablinks');
const tabContents = document.querySelectorAll('div.tab-content');

tablinks.forEach(tablink => {
  tablink.addEventListener('click', (e) => {
    e.preventDefault();
    const { tabContentId } = e.target.dataset;
    const targetContent = document.querySelector(`div#${tabContentId}`);

    tablinks.forEach(tablink => {
      tablink.classList.remove('active');
    });

    tabContents.forEach(content => {
      content.classList.remove('show');
      content.classList.add('hide');
    });

    if (e.target.id === 'menuBtn') {
      tablinks[1].classList.add('active');
    }

    e.target.classList.add('active');
    targetContent.classList.remove('hide');
    targetContent.classList.add('show');
  });
});
