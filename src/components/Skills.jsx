import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import mongo from '../assets/mongodb.png';
import firebase from '../assets/frirebase.png';
import git from '../assets/git.png';
import Marquee from "react-fast-marquee";

const Skills = () => {
    return (
        <div className="py-10 max-w-7xl mx-auto p-5">
            <h3 className='text-3xl mt-10 mb-20 ml-4'>My Technical Skills</h3>
            <Marquee pauseOnHover>
            <div className='grid items-center justify-center bg-[#1D4786] w-28 p-2 ml-2 rounded-lg'>
                <img className='w-20' src={html} alt="logo" />
                <h3 className='text-center'>HTML</h3>
            </div>
            <div className='grid items-center justify-center bg-[#1D4786] w-28 p-2 ml-2 rounded-lg'>
                <img className='w-20' src={css} alt="logo" />
                <h3 className='text-center'>CSS</h3>
            </div>
            <div className='grid items-center justify-center bg-[#1D4786] w-28 p-2 ml-2 rounded-lg'>
                <img className='w-20' src={tailwind} alt="logo" />
                <h3 className='text-center'>Tailwind CSS</h3>
            </div>
            <div className='grid items-center justify-center bg-[#1D4786] w-28 p-2 ml-2 rounded-lg'>
                <img className='w-20' src={bootstrap} alt="logo" />
                <h3 className='text-center'>Bootstrap</h3>
            </div>
            <div className='grid items-center justify-center bg-[#1D4786] w-28 p-2 ml-2 rounded-lg'>
                <img className='w-20' src={js} alt="logo" />
                <h3 className='text-center'>JavaScript</h3>
            </div>
            <div className='grid items-center justify-center bg-[#1D4786] w-28 p-2 ml-2 rounded-lg'>
                <img className='w-20' src={react} alt="logo" />
                <h3 className='text-center'>React.js</h3>
            </div>
            <div className='grid items-center justify-center bg-[#1D4786] w-28 p-2 ml-2 rounded-lg'>
                <img className='w-20' src={node} alt="logo" />
                <h3 className='text-center'>Node.js</h3>
            </div>
            <div className='grid items-center justify-center bg-[#1D4786] w-28 p-2 ml-2 rounded-lg'>
                <img className='w-20' src={express} alt="logo" />
                <h3 className='card-action text-center'>Express.js</h3>
            </div>
            <div className='grid items-center justify-center bg-[#1D4786] w-28 p-2 ml-2 rounded-lg'>
                <img className='w-20' src={mongo} alt="logo" />
                <h3 className='text-center'>MongoDB</h3>
            </div>
            <div className='grid items-center justify-center bg-[#1D4786] w-28 p-2 ml-2 rounded-lg'>
                <img className='w-20' src={firebase} alt="logo" />
                <h3 className='text-center'>Firebase</h3>
            </div>
            <div className='grid items-center justify-center bg-[#1D4786] w-28 p-2 ml-2 rounded-lg'>
                <img className='w-20' src={git} alt="logo" />
                <h3 className='text-center'>Git</h3>
            </div>
            
            </Marquee>
        </div>
    );
};

export default Skills;