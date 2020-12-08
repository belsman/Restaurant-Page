import nav from './navigation';
import home from './home';

export default element => {
    element.appendChild(nav());
    element.appendChild(home());
    return element;
};
