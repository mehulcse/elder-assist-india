import Link from "next/link"


export default function Services() {
    return (
        <>
            <section className="service-4-section">
                <div className="auto-container">
                    <div className="section_heading text-center mb_60">
                        <span className="section_heading_title_small">What We Offers</span>
                        <h2 className="section_heading_title_big">Everyone Deserves Our <br/> Best Services</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="service-4-block text-center wow fadeInLeft">
                                <div className="service-4-icon"><i className="icon-6"></i></div>
                                <h4 className="service-4-title"><Link href="/service-details"> Assisted Living</Link></h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-4-block text-center wow fadeInLeft">
                                <div className="service-4-icon"><i className="icon-7"></i></div>
                                <h4 className="service-4-title"><Link href="/service-details">Medical & Health</Link></h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-4-block text-center wow fadeInLeft" >
                                <div className="service-4-icon"><i className="icon-8"></i></div>
                                <h4 className="service-4-title"><Link href="/service-details">Residential Care</Link></h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-4-block text-center wow fadeInLeft">
                                <div className="service-4-icon"><i className="icon-35"></i></div>
                                <h4 className="service-4-title"><Link href="/service-details">Nursing Care</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="service-4-link-btn text-center"><Link href="/services-2" className="btn-1">More Services<span></span></Link></div>
                </div>
            </section>

        </>
    )
}
