import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faExclamationTriangle} size="9x" />
            <h3>Sorry, page not found - 404</h3>
        </div>
    )
}

export default NotFound
