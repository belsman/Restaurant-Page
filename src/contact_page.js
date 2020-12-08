import menuList from './models';

export default () => {
    const template = `
        <h2>Wanna dine with us?</h2>
        <p class="location">
            We are located at: No 11, Gombe Road where you can ask anyone on the street about us
        </p>
        <p>
            OR call us on: <i class="fa fa-phone"></i> +234 7XX XXXX XXX
        </p>
        <p>
          <a href = "mailto: abc@example.com">Send Email <i class="fa fa-envelope"></i></a>
        </p>`;

    const contact = document.createElement('div');
    contact.id = 'contact';
    contact.innerHTML = template;
    return contact;
};
