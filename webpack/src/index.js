import _ from 'lodash';
<<<<<<< HEAD
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
=======
>>>>>>> 3e91c013565d3d92c5b65f4b496e0a4865f37fac

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
<<<<<<< HEAD
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
=======
>>>>>>> 3e91c013565d3d92c5b65f4b496e0a4865f37fac

  return element;
}

document.body.appendChild(component());
