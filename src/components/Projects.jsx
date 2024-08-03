import React from 'react'
import ProjectSwiperContainer from './ProjectSwiperContainer'
import { Element } from 'react-scroll';

const Projects = () => {
  return (
    <div id='Projects' className="lg:p-12 sm:p-12 p-2">
      <div className="text-blue-400 font-semibold sm:text-4xl lg:text-4xl text-2xl flex justify-center pb-14">
        PROJECTS
      </div>

      <ProjectSwiperContainer />
    </div>
  );
}

export default Projects