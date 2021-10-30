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
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        getArticle()
    }, [])
    return (
        <div>
            Article
        </div>
    )
}

export default Article;