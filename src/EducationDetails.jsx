import React from 'react';

const EducationDetails = () => {
    return (
        <div>
            <div className="bg-base-200 py-5">
                <h1 className="text-3xl text-center px-5 py-5" data-aos="fade-up">Education Details</h1>
                <div className="inset-x-0 top-5 mb-5" data-aos="fade-up">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-5 mt-5">
                        <li>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                                <time className="font-mono italic">2016 - 2019</time>
                                <div className="text-lg font-black">SMP N 3 Salatiga</div>
                                I completed my middle school education at SMP N 3 Salatiga, where I developed a strong foundation in various subjects.
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono italic">2019 - 2022</time>
                                <div className="text-lg font-black">SMA N 2 Salatiga</div>
                                At SMA N 2 Salatiga, I continued my education with a focus on science and mathematics.
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                                <time className="font-mono italic">2022 - Present</time>
                                <div className="text-lg font-black">Universitas Dian Nuswantoro</div>
                                Currently, I am pursuing my degree at Universitas Dian Nuswantoro, where I am enhancing my skills in software development and exploring various technologies.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EducationDetails;
