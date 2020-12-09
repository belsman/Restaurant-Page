export default () => {
  const template = `<h1>KADUNA RESTAURANT</h1>
  <p class="lead">We offer you the most delicious, healthy and affordable food in the whole of Nigeria</p>
  <a href="" id="menuBtn" class="tablinks menu-btn" data-tab-content-id="menu">Checkout our Menu</a>`;
  const home = document.createElement('div');
  home.id = 'home';
  home.classList.add('tab-content');
  home.innerHTML = template;
  return home;
};