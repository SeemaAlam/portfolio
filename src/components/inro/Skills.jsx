import React from 'react'
import redis from '../../images/redis-logo-svgrepo-com.svg'
import js from '../../images/javascript-svgrepo-com (1).svg'
import css from '../../images/css3-svgrepo-com.svg'
import html from '../../images/html5-svgrepo-com.svg'
import materialui from '../../images/material-ui-svgrepo-com.svg'
import mongodb from '../../images/mongodb-svgrepo-com.svg'
import react from '../../images/react-svgrepo-com.svg'
import redux from '../../images/redux-logo-svgrepo-com.svg'
import bootstrap from '../../images/bootstrap-svgrepo-com.svg'
import express from '../../images/express-svgrepo-com.svg'
import nodejs from '../../images/nodejs-svgrepo-com.svg'
import github from '../../images/git-svgrepo-com.svg'
import dsa from '../../images/redis-logo-svgrepo-com.svg'

const Skills = () => {
    return (
        <>
          <div className="title" id="skills">
              <h3>What are my skills?</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">A front end develpoer</h4>
              <div className="skills">
              <div><img src={html} alt="redis"/></div>
              <div><img src={css} alt="css"/></div>
              <div><img src={bootstrap} alt="bootstrap"/></div>
              <div><img src={materialui} alt="materialui"/></div>
              <div><img src={react} alt="react"/></div>
              <div><img src={redux} alt="redux"/></div>

              </div>
            </div>
            <div className="desc">
              <h4 className="subtitle">Also a back end developer.</h4>
              
              <div className="skills">
        
              <div><img src={js} alt="js"/></div>
              <div><img src={nodejs} alt="nodejs"/></div>
              <div><img src={mongodb} alt="mongodb"/></div>
              <div><img src={redis} alt="redis"/></div> 
               {/* <div className="desc2">
               <div className="skills">
              <h4 className="subtitle">Also a back end developer.</h4>
              <div><img src={github} alt="git"/></div>
              <div><img src={dsa} alt="dsa"/></div>
              </div>
              </div>
               */}
              </div>
            </div> 
        </>
    )
}

export default Skills
