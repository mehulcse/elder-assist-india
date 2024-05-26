
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Contact">
                <div>

                    <section className="section-padding pb-0 p_relative">
                        <div className="gray-bg h_280 l_0 b_0 r_0 p_absolute"></div>
                        <div className="auto-container">
                            <div className="row align-items-end">
                                <div className="col-lg-5">
                                    <div className="section_heading mb_40">
                                        <span className="section_heading_title_small">Find Our Location</span>
                                        <h2 className="section_heading_title_big">Explore Our Office <br/> Worldwide</h2>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <ul className="contact-info-1 d-flex flex-wrap justify-content-lg-end mb_40">
                                        <li>
                                            <h4 className="fs_20 mb_10"><i className="icon-14 mr_10 fs_18"></i>Location</h4>
                                            <p>New Hyde Park, NY 11040</p>
                                        </li>
                                        <li>
                                            <h4 className="fs_20 mb_10"><i className="icon-16 mr_10 fs_18"></i>Phone No</h4>
                                            <p><Link href="tel:(+91) 333 666 0021">(+91) 333 666 0021</Link></p>
                                        </li>
                                        <li>
                                            <h4 className="fs_20 mb_10"><i className="icon-15 mr_10 fs_15"></i>Email</h4>
                                            <p><Link href="mailto:support@example.com">support@example.com</Link></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact-map p_relative">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-padding gray-bg">
                        <div className="auto-container">  
                            <div className="section_heading text-center mb_40">
                                <span className="section_heading_title_small">Let’s Contact</span>
                                <h2 className="section_heading_title_big">Don't Hesitate to <br/> Contact Us</h2>
                            </div>          
                            <div className="form-alt-3">
                                <form method="post" action="sendemail.php" id="contact-form">
                                    <div className="row clearfix">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="form_name" placeholder="Your Name" required/>
                                        </div>
                                        
                                        <div className="form-group col-md-6">
                                            <input type="email" name="email" placeholder="Your Email" required/>
                                        </div>

                                        <div className="form-group col-md-12">
                                            <input type="text" name="phone"placeholder="Phone Number" required/>
                                        </div>
                                        
                                        <div className="form-group col-md-12">
                                            <textarea name="form_message" placeholder="Massage"></textarea>
                                        </div>
                                        
                                        <div className="form-group col-md-12 text-center">
                                            <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden"/>
                                            <button className="btn-1 btn-small" type="submit" data-loading-text="Please wait...">Send Message <i className="flaticon-right-arrow-1"></i><span></span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}