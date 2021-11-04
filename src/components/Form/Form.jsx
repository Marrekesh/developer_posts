import {useState} from 'react'

import Button from "../UI/buttons/Button"
import MyInput from "../UI/inputs/MyInput";

import './form.scss'

const Form = ({addNewDeveloper}) => {

    const [post, setPost] = useState({title: '', body: ''})
    const [id, setId] = useState(4)

    const createPost = (e) => {
        e.preventDefault()
        setId(id + 1)
        const newPost = {
            ...post, id: id
        }
        addNewDeveloper(newPost)
        setPost({title:'', body: ''})
    }

    return(
        <form onSubmit={createPost} className="app__form">
            <MyInput type="text" placeholder="Add name"
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <MyInput type="text" placeholder="Add information"
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <Button>
                Добавить
            </Button>
        </form>
    )


}

export default Form;