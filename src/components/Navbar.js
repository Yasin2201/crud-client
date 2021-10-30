import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <h2>Draft Articles</h2>
            <Link to='/new'>
                New Article
            </Link>
            <Link to='/'>
                Home
            </Link>
        </nav>
    )
}

export default Navbar