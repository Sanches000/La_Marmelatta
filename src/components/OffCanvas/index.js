import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styled from 'styled-components';
import Logo from '../Logo'
import LogoOffCanvas from '../LogoOffCanvas'

const HeaderContainer = styled.div`
    background-color: #400409;
    height:100%;
    margin-top: -8px;
    margin-bottom: -8px;
    padding-top: 15px;
    padding-bottom: 15px;
`;

const OffCanvasMenu = styled.div`
    background-color: #400409;
    height:100%;
`;

const NavBar = styled.nav`
    .navbar-brand, .nav-link, .dropdown-item {
        color:rgb(255, 255, 255); /* Cor dos links */
    }

    .navbar-toggler-icon {
        background-color:rgb(255, 255, 255); /* Cor do ícone do menu hamburger */
    }
`

const Divider = styled.li`
    width: 1px;
	background: white;
	margin: 12px 15px;
`

function OffCanvas() {
    return (
        <NavBar className="navbar-expand-lg navbar bg-body-tertiary fixed-top">
            <HeaderContainer className="container-fluid">
                <a className="navbar-brand" href="#"><Logo /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <OffCanvasMenu className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><LogoOffCanvas /></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Produtos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sobre Nós</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contato</a>
                            </li>
                            <Divider />
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><strong>Login</strong></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><strong>Cadastre-se</strong></a>
                            </li>
                        </ul>
                    </div>
                </OffCanvasMenu>
            </HeaderContainer>
        </NavBar>
    )
}

export default OffCanvas;