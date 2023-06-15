console.log("Restaurant Page")
import './style.css';
import _ from 'lodash';
import Icon from './components/icon.png';
import Notes from './components/data.xml';
import Data from './components/data.csv'


function createNav(){
    const nav = document.createElement('div');
    nav.setAttribute('id', 'header')

    const homebtn = document.createElement('button')
    homebtn.textContent = 'Home'
    const menubtn = document.createElement('button')
    menu.textContent = 'Menu'
    const staffbtn = document.createElement('button')
    staff.textContent = 'Staff'

    nav.appendChild(homebtn);
    nav.appendChild(menubtn);
    nav.appendChild(staffbtn);

    return nav



}
document.body.appendChild(createNav())

function changeContent(){
    const content = document.getElementById('content');
    // content.appendChild(importhome)
    // content.appendChild(importmenu)
    // content.appendChild(importstaff)

}


function component(){
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon
    element.appendChild(myIcon)

    console.log(Notes)
    console.log(Data)

    return element


}

document.body.appendChild(component())