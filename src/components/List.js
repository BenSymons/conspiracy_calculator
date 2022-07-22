import PropTypes from "prop-types"
import Card from "./Card"

const List = ({languages, setTotal}) => {
    return (
        <div className="container">
            {languages.map((language, index) => {
                return <Card language={language} setTotal={setTotal}/>
            })}
        </div>
    )
}

export default List

List.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.string),
    setTotal: PropTypes.func
}