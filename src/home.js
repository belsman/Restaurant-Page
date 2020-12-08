export default () => {
  const template = `<h1>KADUNA RESTAURANT</h1>
  <p class="lead">We offer you the most delicious, healthy and affordable food in the whole of Nigeria</p>
  <button class="menu">Checkout our Menu</button>`;
  const home = document.createElement('div');
  home.id = 'home';
  home.innerHTML = template;
  return home;
};