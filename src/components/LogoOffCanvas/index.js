import logo from '../../img/logo.png';
import styled from 'styled-components';

const LogoImage = styled.img`
    width: 160px;
`;

function LogoOffCanvas() {
    return (
        <div>
            <LogoImage src={logo} alt='logo' />
       </div>
    );
}

export default LogoOffCanvas;