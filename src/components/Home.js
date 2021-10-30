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
                setArcticles(data)
            } catch (error) {
                console.error(error)
            }
        }

        getAllArticles()
    }, [])

    return (
        <div>
            Home
        </div>
    )
}

export default Home