import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link> |
            <Link to="/bidList">Bid List</Link> |
            <Link to="/contestList">Contest List</Link> |
            <Link to="/projectList">Project List</Link> |
            <Link to="/postContest">Post Contest</Link> |
            <Link to="/postProject">Post Contest</Link>   
        </div>
    );
};

export default Navbar;
