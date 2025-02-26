import logo from '../../img/logo.png';
import styled from 'styled-components';

const LogoImage = styled.img`
    width: 260px;
`;

function Logo() {
    return (
        <div>
            <LogoImage src={logo} alt='logo' />
       </div>
    );
}

export default Logo;