import React, { useEffect , useState} from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Confetti from 'react-confetti';
import './Hero.css';
import AOS from './AOS.jsx';

function Hero() {
    
    const [count, setCount] = useState(() => {
        const simpanCount = localStorage.getItem('count');
        return simpanCount ? parseInt(simpanCount, 10) : 0;
    });  
    const images = [
        '/gwe4.svg',
        '/gwe5.svg'
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
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem('count', newCount);
    };
    const handleReset = () => {
        setCount(0);
        localStorage.setItem('count', 0); // Reset count in localStorage
    };
    let emoji = '';
    if (count > 20 && count <= 30) {
        emoji = '⸜(｡˃ ᵕ ˂ )⸝♡';
    } else if (count > 10 && count <= 20) {
        emoji = '>_<';
    } else if (count > 30 && count <= 1000){
        emoji = '(˶ˆᗜˆ˵)'
    } else if (count > 1000){
        emoji = '(˶˃ ᵕ ˂˶) .ᐟ.ᐟ'
    }

    return (
        <div>
            {count > 1000 && <Confetti numberOfPieces={300} recycle={false} />}
            <div className="hero bg-base-200 px-5" data-aos="fade-up">
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="hero-content flex-col lg:flex-row-reverse mt-[2rem]">
                    <img
                        src={images[currentIndex]}
                        className="rounded-lg img-hero" 
                        data-aos="fade-left"
                        alt="Hero"
                    />
                    <div>
                        <h1 className="text-hero font-bold" data-aos="fade-right">
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
                        <button className="btn btn-primary shake " onClick={handleClick} data-aos="fade-right">Count Klick {count} {emoji}</button>
                        <button className="btn btn-secondary ml-3" onClick={handleReset} data-aos="fade-right">
                            Reset Count
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
