import { useHistory } from "react-router";

const NewArticle = () => {
    let history = useHistory();

    const onArticleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const userInput = {
            title: formData.get('title'),
            article: formData.get('article'),
        }

        try {
            const response = await fetch(`http://localhost:4000/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInput)
            })
            const data = await response.json()
            if (!data.error) {
                history.push("/");
            } else {
                console.log(data)
            }
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <form onSubmit={(e) => onArticleSubmit(e)}>
            <input type='text' name="title" placeholder='New Article Title...' />
            <textarea type='text' name="article" placeholder='Enter Article Text...' />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default NewArticle;