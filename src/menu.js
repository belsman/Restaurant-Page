import menuList from './models';

export default (element) => {
    const foodTemplate = food => `<div class="d-flex justify-content-between bg-light p-3 rounded">
        <span class="text-uppercase">${food.name}</span>
        <span><span class="text-success">NGN</span> ${food.price}</span>
    </div>`;

    let menuListTemplate = '';
    menuList.forEach((food) => {
        menuListTemplate += foodTemplate(food);
    });

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'menu-items';
    itemsContainer.innerHTML = menuListTemplate;

    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.className = 'tab-content hide p-3 my-3';
    menu.appendChild(itemsContainer);
    
    element.appendChild(menu);
    return element;
};
