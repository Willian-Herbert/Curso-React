import './style.css';
import mainImage from './sky.jpg'

function Header() {
    return (
        <header>
            <h1>Meu Blog!</h1>
            <img src = {mainImage}/>
        </header>
    );
}

export default Header;