import '../styles/Landing_page.css'
import poster from '../images/poster.png'
import { Link } from 'react-router-dom'

export default function Landing_page() {

    return (
        <div className="landpage-container">
            <div className="landing-img">
                <div>
                    <img src={poster} />
                </div>
            </div>
            <div className="landing-txt">
                <div className="landing-cntrdiv">
                    <h1>10x Team 04</h1>
                    <Link to="/postview"><button>Enter</button></Link>
                </div>
            </div>
        </div>
    )

}