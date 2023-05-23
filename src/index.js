import './style.css';
import Logo from './assets/images/icpc-logo.png';

const logoContainer = document.querySelector('.logo');

const myLogo = new Image();
myLogo.src = Logo;

logoContainer.appendChild(myLogo);