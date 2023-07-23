import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
// import './ProjectContainer.css'

const ProjectItem = ({ project }) => (
    <div className="card content w-56 relative rounded-lg m-20 overflow-hidden">
        <img src={project.image} className="rounded-t-lg" alt="" />
        <div className="textContent p-5">
            <div className='project'>
                <h3 style={{fontSize:"1.5rem"}}>{project.name}</h3>

                <p className='project__description'>{project.description}</p>
                {project.stack && (
                    <ul className='project__stack'>
                        {project.stack.map((item) => (
                            <li key={uniqid()} className='project__stack-item'>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}

                {project.sourceCode && (
                    <a
                        href={project.sourceCode}
                        aria-label='source code'
                        className='link project--icon'
                    >
                        <GitHubIcon />
                    </a>
                )}
            </div>
        </div>
    </div>
)

export default ProjectItem