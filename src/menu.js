import menuList from './models';

export default () => {
    const foodTemplate = food => `<div class="menu-card">
        <h3>${food.name}</h3>
        <span><span class="green-color">NGN</span> ${food.price}</span>
    </div>`;

    let menuListTemplate = '';
    menuList.forEach((food) => {
        menuListTemplate += foodTemplate(food);
    });

    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.innerHTML = menuListTemplate;
    return menu;
};
