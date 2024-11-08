import React from 'react';
import Hero from './Hero.jsx'
import Card from './Card.jsx';
import EducationDetails from './EducationDetails.jsx';
import Footer from './Footer.jsx';


const Home = () => {
    return (
    <div>
        <div className="desktop">
            <div className="navbar bg-base-100 fixed top-0 w-full z-50">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Mustafid Kaisalana</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><a href="#portofolio">Portofolio</a></li>
                    <li><a href="#education">Education Details</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="responsive">
            <div className="navbar bg-base-100 fixed top-0 w-full z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Homepage</a></li>
                        <li><a href="#portofolio">Portfolio</a></li>
                        <li><a href="#education">Education</a></li>
                    </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">Mustafid Kaisalana</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    </button>        
                </div>
            </div>
        </div>
        <Hero />
        <div id="portofolio">
            <Card />
        </div>
        <div id="education">
            <EducationDetails />
        </div>
        <Footer />
    </div>
    );
};

export default Home;
