import { useState } from "react"
import PropTypes from "prop-types"

const Card = ({language, setTotal}) => {
    const [votes, setVotes] = useState(0)

    const handleClick= () => {
        setVotes((prev) => prev + 1)
        setTotal((prev) => prev + 1)
    }

    return (
        <div className="card">
            <p>{language}</p>
            <p>votes: {votes}</p>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

Card.propTypes = {
    language: PropTypes.string,
    setTotal: PropTypes.func
}

export default Card