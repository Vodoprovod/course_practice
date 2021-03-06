import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    static path = '/';

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className='navbar-brand' href='#'>React JS SPA</a>
                <ul className='navbar-nav'>
                    <li className='nav-link'><Link to='/' >Главная</Link></li>
                    <li className='nav-link'><Link to='/contact' >Контакты</Link></li>
                    <li className='nav-link'><Link to='/list' >Список</Link></li>
                    <li className='nav-link'><Link to='/wwwww' >Страница ошибки</Link></li>
                </ul>
            </nav>
        );
    }

}
