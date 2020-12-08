export default () => {
    const template = `
    <span class="brand-log">
        <a href="#">KADUNA RESTAURANT</a>
    </span>
    <ul class="nav">
        <li><a href="#">HOME</a></li>
        <li><a href="#">MENU</a></li>
        <li><a href="#">CONTACT US</a></li>
    </ul>`;
    const header = document.createElement('header');
    header.innerHTML = template;
    return header;
};
