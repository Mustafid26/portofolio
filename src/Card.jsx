import React from 'react';

const Card= () => {
  return (
    <div>
        <div className="container mx-auto p-5" data-aos="fade-up">
        <h1 className="mx-auto text-center m-[3rem] text-4xl">Portofolio</h1>
            <div className="justify-center flex flex-wrap p-5 gap-4">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <div className="mockup-browser bg-base-300 border">
                            <div className="mockup-browser-toolbar">
                                <div className="input">https://seratkartini.hmtiudinus.org/</div>
                            </div>
                            <div className="bg-base-200 flex justify-center">
                                <img
                                src="/image.png"
                                alt="IMG" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-2">Build Website For DP3AP2KB</h2>
                        <p>I built a website for DP3AP2KB named serat kartini, adapted from SEA (Sekari Edu Academy), providing a tailored platform inspired by SEA's educational framework.</p>
                        <div className="card-actions justify-end mt-2">
                            <a href="https://seratkartini.hmtiudinus.org/">            
                                <button className="btn btn-primary">Visit Now</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <div className="mockup-browser bg-base-300 border">
                            <div className="mockup-browser-toolbar">
                                <div className="input">https://sekari.hmtiudinus.org/</div>
                            </div>
                            <div className="bg-base-200 flex justify-center">
                                <img
                                src="/image1.png"
                                alt="IMG" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Build Website For PPKO HMTI</h2>
                        <p>I developed a website for PPKO HMTI, serving as a support platform for women's schools. This website is designed to provide information and resources that encourage education and empowerment for women.</p>
                        <div className="card-actions justify-end mt-2">
                            <a href="https://sekari.hmtiudinus.org/">            
                                <button className="btn btn-primary">Visit Now</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                    <div className="mockup-browser bg-base-300 border">
                        <div className="mockup-browser-toolbar">
                                <div className="input">localhost</div>
                            </div>
                            <div className="bg-base-200 flex justify-center">
                                <img
                                src="/image2.png"
                                alt="IMG" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Semarang Insight</h2>
                        <p>I interned at Diskominfo, where I developed the website 'Semarang Insight' which serves as a blog and information platform about the city of Semarang, providing various content and local insights.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                        src="/image3.png"
                        alt="IMG" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Head of the Science and Technology</h2>
                        <p>II have been entrusted with the position of Head of the Science and Technology Division at HMTI Udinus for the 2024/2025 period.</p>
                        <div className="card-actions justify-end mt-2">
                            <a href="https://www.instagram.com/p/DATUmPCsiT-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">            
                                <button className="btn btn-primary">Visit Now</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                        src="/image4.png"
                        alt="IMG" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Head of the Hardware Department</h2>
                        <p>I served as the Head of the Hardware Department for the 2023/2024 period.</p>
                        <div className="card-actions justify-end mt-2">
                            <a href="https://www.instagram.com/p/C0BSUfjP2R5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">            
                                <button className="btn btn-primary">Visit Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;
