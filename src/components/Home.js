import { useEffect, useState } from "react"


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

    return (
        articles ?
            articles.map((article) => {
                return (
                    <div key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.article}</p>
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