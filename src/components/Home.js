import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {home} from '../portfolio.js'
import '../App.css'
import Typewriter from './Typewriter.js'

const Home = () => {
    const { name, role, description, resume, social } = home
  return (
    <section id='home' className='section home'>
    <div className='home center'>
      {name && (
        <h1 style={{color: "white"}}>
          Hi, I am <span className='home__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='home__role'>A <Typewriter text=  {role} delay={180} infinite /></h2>}
      <p className='home__desc'>{description && description}</p>

      <div className='home__contact center'>
        {/* {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )} */}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              style= {{color:"black"}}>
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
    </section>
  )
}

export default Home