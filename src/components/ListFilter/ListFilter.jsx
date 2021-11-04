
import MyInput from "../UI/inputs/MyInput"

const ListFilter = ({filtration, setFiltration}) => {
    return(
        <div>
            <MyInput 
                type="text" 
                placeholder="Search"
                value={filtration}
                onChange={(e) => setFiltration(e.target.value)}
                />
        </div>
    )
}

export default ListFilter;