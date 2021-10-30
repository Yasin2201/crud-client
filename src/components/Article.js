import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Article = () => {
    const [article, setArticle] = useState()
    const { id } = useParams()

    useEffect(() => {
        async function getArticle() {
            try {
                const res = await fetch(`http://localhost:4000/${id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                const data = await res.json()
                setArticle(data.draft)
            } catch (error) {
                console.error(error)
            }
        }
        getArticle()
    }, [id])

    const submitEdit = () => {
        console.log("DONE")
    }

    return (
        article ?
            <form key={article.id} onSubmit={submitEdit}>
                <input type="text" name="title" value={article.title} onChange={(e) => setArticle({ ...article, title: e.target.value })} />
                <textarea type="text" name="article" value={article.article} onChange={(e) => setArticle({ ...article, article: e.target.value })} />
                <button type="submit">Save Changes</button>
            </form>
            :
            <div>
                Loading...
            </div>

    )
}

export default Article;