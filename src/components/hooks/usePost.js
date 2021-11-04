import {useMemo} from 'react'

const usePost = (list, term) => {
    const sortedPosts = useMemo(() => {
        if (term) {

            return list.filter(item => {
                return item.title.toLowerCase().includes(term.toLowerCase())
            })  
        }

        return list
        
    }, [term, list]);

    return sortedPosts;
}

export default usePost;