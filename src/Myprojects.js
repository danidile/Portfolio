import { Link, Outlet, useParams } from 'react-router-dom';
import myProjects from './Myprojects_db';
import Project from './Project';

const Myprojects = () => {
    return myProjects.map( project => (
        <ul>
            <Project component={project.component} link={project.link} name={project.name} skills={project.skills} />
        </ul>
));
}

export default Myprojects;