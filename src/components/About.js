import React from 'react';

// import img
import Image from '../assets/img/r2.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-[400px] w-[500px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
               Rakibul Islam
              </h2>
              <p className='mb-4 text-accent'>
                Junior  Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Currently i am working with ANTT Robotics Ltd As a Research Associate and Head of Education.Here i develop STEM Curriculum.I also teach coding for Children.Besides my work i also a teacher .I have a lot's of experience in teaching profession.

              I am also Junior web developer.Recently i Completed Web Development with Jhankar Mahabub. <br />
                <br />
                I want to set my career as a web devloper.
                
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
             <a href="https://drive.google.com/file/d/1-IzWvDD67fquXThFRrf-QaXzEV3Vf35L/view?usp=sharing">Download My Resume</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
