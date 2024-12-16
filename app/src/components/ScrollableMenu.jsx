import { Link } from 'react-router-dom';
import '../styles/components/ScrollableMenu.css'

function ScrollableMenu({data, lang}){
    return (
        <div className="nav-elem">
            <span>{data['title'][lang]}</span>
            <div className="nav-elem-dropdown">
                <ul>
                    {
                        data['elements'].map(elem => <li key={elem['display'][lang]}><Link to={elem['to']}>{elem['display'][lang]}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default ScrollableMenu;