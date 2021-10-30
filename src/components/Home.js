import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const [articles, setArcticles] = useState()

    useEffect(() => {
        async function getAllArticles() {
            try {
                const res = await fetch('http://localhost:4000/', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                const data = await res.json()
                setArcticles(data.drafts)
            } catch (error) {
                console.error(error)
            }
        }
        getAllArticles()
    }, [])

    const deleteArticle = async (id) => {
        try {
            const res = await fetch(`http://localhost:4000/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            const data = await res.json()
            console.log(data)
            const fiilteredArticles = articles.filter((article) => article.id !== id)
            setArcticles(fiilteredArticles)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        articles ?
            articles.map((article) => {
                return (
                    <div key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.article}</p>
                        <Link to={`/article/${article.id}`}>
                            <button>View</button>
                        </Link>
                        <button onClick={() => deleteArticle(article.id)}>Delete</button>
                    </div>
                )
            })
            :
            <div>
                Loading...
            </div>
    )
}

export default Home