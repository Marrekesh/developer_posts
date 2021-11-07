import { useParams } from "react-router-dom";
import { PostService } from "../../API/PostService";
import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
const SinglePost = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
        
    })
    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли пост {params.id}</h1>
            {isLoading
                ? <h1> Загрузка</h1>
                : <div>{post.id} {post.title}</div>
            }
            
            
        </div>
    )
}

export default SinglePost