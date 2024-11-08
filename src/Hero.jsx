import React, { useEffect , useState} from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';
import AOS from './AOS.jsx';

function Hero() {
    const [count, setCount] = useState(0);  
    const images = [
        '/gwe4.png',
        '/gwe5.png'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 600, 
            easing: 'ease-in-sine',
            delay: 100, 
        });
    }, []);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);
    // useEffect(() => {
    //     document.title = `Mustafid Kaisalana - ${count}`;
    // }, [count]);
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div className="hero bg-base-200 px-5 mt-[5rem]" data-aos="fade-up">
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={images[currentIndex]}
                        className="rounded-lg img-hero" 
                        data-aos="fade-left"
                        alt="Hero"
                    />
                    <div>
                        <h1 className="text-7xl font-bold" data-aos="fade-right">
                            Hello, I'm
                            <span>
                                <Typewriter
                                    words={[' Mustafid Kaisalana']}
                                    loop={0}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <p className="py-6 text-1xl" data-aos="fade-right">
                            I am an enthusiastic software developer, passionate about learning and exploring the latest technologies to create innovative solutions
                        </p>
                        <button className="btn btn-primary" onClick={handleClick} data-aos="fade-right">Count Klick {count}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
