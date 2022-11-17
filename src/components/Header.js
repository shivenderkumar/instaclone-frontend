import '../styles/Header.css';
import logo from '../images/instalogname2.jpg'
import cameraicon from '../images/cameraicon.png'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="app-header">
            <div className="div-logo">
                <img id="logo" src={logo} alt="logo" />
            </div>
            <div className="div-cameraicon">
                <Link to="/postcreate"><img id="cameraicon" src={cameraicon} alt="cameraicon"/></Link>
            </div>
        </div>
    )
}