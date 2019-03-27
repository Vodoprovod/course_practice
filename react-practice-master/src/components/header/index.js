import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    static path = '/';

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className='navbar-brand' href='#'>Brand</a>
                <ul className='navbar-nav'>
                    <li className='nav-link'><Link to='/' >Home</Link></li>
                    <li className='nav-link'><Link to='/contact' >Contact</Link></li>
                    <li className='nav-link'><Link to='/wwwww' >Error page</Link></li>
                </ul>
            </nav>
        );
    }

}
