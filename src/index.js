import initiatePage from './initiate_page';
import menuPage from './menu';
import contactPage from './contact_page';

const root = document.querySelector('div#content');
initiatePage(root);
menuPage(root);
contactPage(root);

const tablinks = document.querySelectorAll('a.tablinks');
const tabContents = document.querySelectorAll('div.tab-content');

tablinks.forEach( tablink => {
    tablink.addEventListener('click', (e) => {
        e.preventDefault();
        const tabContentId = e.target.dataset.tabContentId;
        const targetContent = document.querySelector(`div#${tabContentId}`);

        tablinks.forEach( tablink => {
            tablink.classList.remove('active');
        });

        tabContents.forEach ( content => {
            content.classList.remove('show');
            content.classList.add('hide');
        });

        e.target.classList.add('active');
        targetContent.classList.remove('hide');
        targetContent.classList.add('show');
    });
});

