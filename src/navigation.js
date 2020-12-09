export default () => {
    const template = `
    <span class="brand-log">
        <a href="#">KADUNA RESTAURANT</a>
    </span>
    <ul class="nav d-flex">
        <li><a href="" class="tablinks active" data-tab-content-id="home">HOME</a></li>
        <li><a href="" class="tablinks" data-tab-content-id="menu">MENU</a></li>
        <li><a href="" class="tablinks" data-tab-content-id="contact">CONTACT US</a></li>
    </ul>`;

    const header = document.createElement('header');
    header.innerHTML = template;
    header.className = 'd-flex justify-content-between align-items-end'
    return header;
};
