import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects, auth }) => {
    return (
        <div className="section">

            {projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                        <ProjectSummary project={project} auth={auth} />
                    </Link>
                )
            })}

        </div>
    )
}

export default ProjectList