const NewArticle = () => {
    return (
        <form onSubmit={() => { console.log("Submitted") }}>
            <input type='text' placeholder='New Article Title...' />
            <textarea type='text' placeholder='Enter Article Text...' />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default NewArticle;