
import '../DeveloperListItem/DeveloperListItem'
import DeveloperListItem from '../DeveloperListItem/DeveloperListItem';




import './developerList.scss'

const DeveloperList = ({developer, remove}) => {
    
    if (developer.length === 0) {
        return <h2 style={{textAlign: 'center'}}> Посты не найдены</h2>
    }

    const elements =
        developer.map(element => {
        const {id, ...items} = element;
        return (
            <DeveloperListItem
            key={id}
            {...items}
            remove={remove}
            element={element}/>
        )
    })

    return (
        <div className="developer-list">
            {elements}
        </div>
    )

}

export default DeveloperList;