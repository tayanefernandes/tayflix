import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button';
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="TayFlix logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video
            </Button>
        </nav>
    )
}

export default Menu;