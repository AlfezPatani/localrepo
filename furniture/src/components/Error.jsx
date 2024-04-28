
import { useRouteError } from 'react-router-dom'
function Error() {
    const error = useRouteError()
    return (
        <div className='error-container'>
            <h1>{error.status}</h1>
            <h2>{error.statusText}</h2>
            <p>{error.data}</p>
        </div>
    )
}

export default Error