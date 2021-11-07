import { useState, useEffect} from "react";
import AppHeader from "../AppHeader/AppHeader";
import Form from "../Form/Form";
import ListFilter from "../ListFilter/ListFilter";
import DeveloperList from "../DeveloperList/DeveloperList";
import Button from "../UI/buttons/Button";
import MyModal from "../MyModal/MyModal";
import usePost from '../hooks/usePost'
import { PostService } from "../API/PostService";
import {useFetching} from '../hooks/useFetching'
import { getPageCount, getPageArray } from "../utils/getPages";
import Pagination from "../UI/pagination/Pagination";


const Posts = () => {

    const [developer, setDeveloper] = useState('');
    const [filtration, setFiltration] = useState('');
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1)

    const [fetchingPost, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setDeveloper(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    const changePage = (page) => {
        setPage(page)
    }

    const sortedPosts = usePost(developer, filtration)

    useEffect(() => {
        fetchingPost()
    },[page])

    const addNewDeveloper = (newDeveloperPost) => {
        setDeveloper([...developer, newDeveloperPost])
        setModal(false)
    }


    const remove = (post) => {
        setDeveloper(developer.filter(p => p.id !== post.id))
    }

    return (
        <div className="app">
            <main>
                <AppHeader/>
                <Button onClick={() => setModal(true)}>
                    Добавить
                </Button>
                <MyModal visible={modal} setVisible={setModal}>
                    <Form addNewDeveloper={addNewDeveloper}/>
                </MyModal>
                
                <hr style={{margin: '15px 0', color: '#69abce', border: '1px solid'}}/>
                <ListFilter filtration={filtration} setFiltration={setFiltration}/>
                {
                    isPostLoading
                        ? <h1>Загрузка</h1>
                        : <DeveloperList developer={sortedPosts} remove={remove}/>
                }
                <Pagination page={page} changePage={changePage} totalPages={totalPages}/>


            </main>
        </div>
    )

}

export default Posts;