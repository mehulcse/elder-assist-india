import Link from "next/link"


export default function Features() {
    return (
        <>
            <section className="fundraise-1-section alt">
                <div className="fundraise-1-shape" style={{backgroundImage: 'url(assets/images/shape/pattern-4.png)'}}></div>
                <div className="auto-container">
                    <div className="section_heading text-center mb_90">
                        <span className="section_heading_title_small">Fund Raise</span>
                        <h2 className="section_heading_title_big">We’re Take Care of Your Problems <br/> Carefully</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="fundraise-1-block wow fadeInLeft">
                                <div className="fundraise-1-image">
                                    <img src="assets/images/resource/image-1.jpg" alt=""/>
                                    <div className="fundraise-1-link-btn">
                                        <Link href="" className="btn-1 btn-small">Read More<span></span></Link>
                                    </div>
                                </div>
                                <div className="fundraise-1-content alt">
                                    <h4 className="fundraise-1-title">Specialist Nursing Care</h4>
                                    <p className="fundraise-1-text">Amet minim mollit no duis deserut lamo
                                        sit enim aliqua dolor do amet sint Velit
                                        officia consequt.</p>
                                    <div className="fundraise-1-skill-item">
                                        <div className="fundraise-1-skill-bar">
                                            <div className="progressbar-1-outer">
                                                <div className="progressbar-1-inner progress-line">
                                                    <div className="progressbar-1-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="85">85</span>%</div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fundraise-1-price d-flex align-items-center justify-content-between">
                                        <div className="fundraise-1-raise">$5,020 Raised</div>
                                        <div className="fundraise-1-target">$5,020 Raised</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="fundraise-1-block wow fadeInLeft">
                                <div className="fundraise-1-image">
                                    <img src="assets/images/resource/image-2.jpg" alt=""/>
                                    <div className="fundraise-1-link-btn">
                                        <Link href="/" className="btn-1 btn-small">Read More<span></span></Link>
                                    </div>
                                </div>
                                <div className="fundraise-1-content alt">
                                    <h4 className="fundraise-1-title">Provide Home Visit Care</h4>
                                    <p className="fundraise-1-text">Amet minim mollit no duis deserut lamo
                                        sit enim aliqua dolor do amet sint Velit
                                        officia consequt.</p>
                                    <div className="fundraise-1-skill-item">
                                        <div className="fundraise-1-skill-bar">
                                            <div className="progressbar-1-outer">
                                                <div className="progressbar-1-inner progress-line" data-width="85">
                                                    <div className="progressbar-1-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="85">85</span>%</div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fundraise-1-price d-flex align-items-center justify-content-between">
                                        <div className="fundraise-1-raise">$5,020 Raised</div>
                                        <div className="fundraise-1-target">$5,020 Raised</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="fundraise-1-block wow fadeInLeft">
                                <div className="fundraise-1-image">
                                    <img src="assets/images/resource/image-3.jpg" alt=""/>
                                    <div className="fundraise-1-link-btn">
                                        <Link href="/" className="btn-1 btn-small">Read More<span></span></Link>
                                    </div>
                                </div>
                                <div className="fundraise-1-content alt">
                                    <h4 className="fundraise-1-title">Relatives Accommodation</h4>
                                    <p className="fundraise-1-text">Amet minim mollit no duis deserut lamo
                                        sit enim aliqua dolor do amet sint Velit
                                        officia consequt.</p>
                                    <div className="fundraise-1-skill-item">
                                        <div className="fundraise-1-skill-bar">
                                            <div className="progressbar-1-outer">
                                                <div className="progressbar-1-inner progress-line" data-width="85">
                                                    <div className="progressbar-1-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="85">85</span>%</div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fundraise-1-price d-flex align-items-center justify-content-between">
                                        <div className="fundraise-1-raise">$5,020 Raised</div>
                                        <div className="fundraise-1-target">$5,020 Raised</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
