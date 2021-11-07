import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../UI/buttons/Button";
import {useParams, Link} from 'react-router-dom'
import './developerListItem.scss'

const DeveloperListItem = (props) => {

    const {title, body, remove, element, id} = props
    const router = useParams()
    return (
        <div className="developer-list__item">
            <div className="developer-list__wrapper">
                <div className="developer-list__item-name">
                        {element.id}. {title}
                    </div>
                    <div className="developer-list__item-text">
                        {body}
                    </div>
            </div>
            <div className="developer-list__item-status">
                <FontAwesomeIcon icon={faTrash} onClick={() => remove(element)}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
        </div>
    )

}

export default DeveloperListItem;