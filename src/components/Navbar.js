import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <h2>Draft Articles</h2>
            <div className='links-div'>
                <Link to='/new'>
                    New Article
                </Link>
                <Link to='/'>
                    Home
                </Link>
            </div>
        </nav>
    )
}

export default Navbar