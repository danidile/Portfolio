import { Link } from "react-router-dom";
const Project = ({name , skills , link, component}) => {
    return (
            <li><Link to={link} element={component}>{ name }</Link> <i>{JSON.stringify(skills)}</i></li>
    );
}

export default Project;