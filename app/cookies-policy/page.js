"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Cookies Policy">
        <section className="cookies-1-section">
          <div className="auto-container">
            <div className="section_heading mb_20">
             
            </div>
            <p className="cookies-1-desc">
            This Website ("Website") is owned, hosted and maintained by Cognitive Core AI Private Limited ("Company" or "We" or "Us"). We are committed towards protecting the privacy of the users who visit andregister on the Website ("User" or "Users"). We use "Cookies"and other similar technology to automatically collect information about the Users activity as the Users navigate through the Website.By using the Website, the User agree that these types of Cookies can be placed on the User’s device and further acknowledgethe acceptance without limitation or qualification of Cookies Policy as mentioned herein (Cookies Policy), which forms a legally binding contract between the User and Us. User acknowledges that this Cookies Policy shall be read as part of the Privacy Policy mentioned in respect of the Website.Unless otherwise defined herein, the defined terms used in this Cookies Policy shall have the same meaning as assigned to them in the Privacy Policy.
Cookies are software code that the Website sends to the browser when Users access the Website.They are small data files stored on the hard drive of the User’s device by anWebsite Among other things, Cookies enable us to recognize the Users and maintain their web session while they browse on the Website Cookies are linked to personal information and We use them to collect and store information about the individual usage, preferences and activity patterns of the Users on the Website However, Cookies does not give us access to Users device. We may combine any information about the User that We collect automatically on the Website by use of the Cookies including User ID, registration information and/or any information that We maintain in our database or that We receive by any other legal arrangement. We use this information to improve the Website, to help understand the preferences of the User, tailoring and measuring advertisements and to provide the User with a better and a more personalized experience. In addition, the Users device or browser may offer settings that warn the User each time a cookie is being sent and allows the User to choose to disable/turn off all the cookies and to delete them. However, if the Users turn cookies off, some features that make the User’s experience more efficient, will be disabled and may not function properly.The User expressly acknowledge that the Company shall not be responsible for cookies placed in User’s device by any other website/app and information collected thereto including but not limited to any linked site (as defined under the Privacy Policy).
            </p>
           
          </div>
        </section>

        {/* <section className="service-2-section">
                    <div className="auto-container">
                        <div className="section_heading text-center mb_90">
                            <span className="section_heading_title_small">What We Offers</span>
                            <h2 className="section_heading_title_big">Everyone Deserves Our <br/> Best Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="service-2-block-wrap">
                                    <div className="service-2-image"><img src="assets/images/resource/service-1.jpg" alt=""/></div>
                                    <div className="service-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                                        <div className="service-2-icon"><i className="icon-6"></i></div>
                                        <h4 className="service-2-title">Assisted Living</h4>
                                        <p className="service-2-text">Amet congue lacus, vitae leo molestie <br/> pretium mauris sed nibh. Facilisis lacinia <br/> vesbulum tindunt aliquam.</p>
                                        <div className="service-2-link"><Link href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-2-block-wrap">
                                    <div className="service-2-image"><img src="assets/images/resource/service-2.jpg" alt=""/></div>
                                    <div className="service-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1s">
                                        <div className="service-2-icon"><i className="icon-7"></i></div>
                                        <h4 className="service-2-title">Medical & Health</h4>
                                        <p className="service-2-text">Amet congue lacus, vitae leo molestie <br/> pretium mauris sed nibh. Facilisis lacinia <br/> vesbulum tindunt aliquam.</p>
                                        <div className="service-2-link"><Link href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></Link></div>
                                    </div>                        
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-2-block-wrap">
                                    <div className="service-2-image"><img src="assets/images/resource/service-3.jpg" alt=""/></div>
                                    <div className="service-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1.2s">
                                        <div className="service-2-icon"><i className="icon-8"></i></div>
                                        <h4 className="service-2-title">Residential Care</h4>
                                        <p className="service-2-text">Amet congue lacus, vitae leo molestie <br/> pretium mauris sed nibh. Facilisis lacinia <br/> vesbulum tindunt aliquam.</p>
                                        <div className="service-2-link"><Link href="/service-details" className="btn-1 btn-alt btn-small">Read More<span></span></Link></div>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

        {/* <section className="funfact-1-section">
                    <div className="auto-container">
                        <div className="funfact-1-wrapper">
                            <div className="funfact-1-shape" style={{backgroundimage: "url('assets/images/shape/map2.png')"}}></div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="funfact-1-block text-center">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h2 className="funfact-1-number odometer"><CounterUp end={80} /></h2>
                                            <h2 className="funfact-1-number-prefix">+</h2>
                                        </div>
                                        <p className="funfact-1-title">Country Coverage</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="funfact-1-block">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h2 className="funfact-1-number odometer"><CounterUp end={620} /></h2>
                                            <h2 className="funfact-1-number-prefix">+</h2>
                                        </div>
                                        <p className="funfact-1-title">Award Wining</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="funfact-1-block">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h2 className="funfact-1-number-prefix">$</h2>
                                            <h2 className="funfact-1-number odometer"><CounterUp end={290} /></h2>
                                        </div>
                                        <p className="funfact-1-title">Saticfied People</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="funfact-1-block">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h2 className="funfact-1-number odometer"><CounterUp end={730} /></h2>
                                            <h2 className="funfact-1-number-prefix">+</h2>
                                        </div>
                                        <p className="funfact-1-title">Volunteers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

        {/* <section className="testimonial-1-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="section_heading mb_20">
                                    <span className="section_heading_title_small">Testimonials</span>
                                    <h2 className="section_heading_title_big">What <br/> They’re Say <br/> About Us?</h2>
                                </div>
                                <p className="testimonial-1-desc">Amet dui scelerisque vel habitant eget <br/> tincidunt facilisis pretium. Porttitor mi <br/> nisi, non vitae tempus.</p>
                            </div>
                            <div className="col-lg-8">
                                <div className="testimonial-1-block-wrap">
                                    <div className="testimonial-1-shape-1"><img src="assets/images/shape/pattern-1.png" alt=""/></div>
                                    <div className="testimonial-1-shape-2"><img src="assets/images/shape/pattern-1.png" alt=""/></div>
                                    <TestimonialSlider1/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
        {/* 
                <section className="team-2-section theme-gray-bg">
                    <div className="auto-container">
                        <div className="section_heading text-center mb_70">
                            <span className="section_heading_title_small">Exclusive Team</span>
                            <h2 className="section_heading_title_big">We Have A Professional Team <br/> Members</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="team-2-block">
                                    <div className="team-2-image">                              
                                        <div className="team-2-image-wrap"><img src="assets/images/resource/team-5.jpg" alt=""/></div>
                                        <div className="team-2-share-icon-area">
                                            <ul className="team-2-social-icon">
                                                <li><Link href="/about"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                            <div className="team-2-share-icon"><i className="icon-11"></i></div>
                                        </div>
                                    </div>
                                    <h4 className="team-2-title">Wade Warren</h4>
                                    <p className="team-2-designaiton">Volunteer</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-2-block">
                                    <div className="team-2-image">                             
                                        <div className="team-2-image-wrap"><img src="assets/images/resource/team-6.jpg" alt=""/></div>
                                        <div className="team-2-share-icon-area">
                                            <ul className="team-2-social-icon">
                                                <li><Link href="/about"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                            <div className="team-2-share-icon"><i className="icon-11"></i></div>
                                        </div>
                                    </div>
                                    <h4 className="team-2-title">Guy Hawkins</h4>
                                    <p className="team-2-designaiton">Volunteer</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-2-block">
                                    <div className="team-2-image">                             
                                        <div className="team-2-image-wrap"><img src="assets/images/resource/team-7.jpg" alt=""/></div>
                                        <div className="team-2-share-icon-area">
                                            <ul className="team-2-social-icon">
                                                <li><Link href="/about"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                            <div className="team-2-share-icon"><i className="icon-11"></i></div>
                                        </div>
                                    </div>
                                    <h4 className="team-2-title">Bessie Cooper</h4>
                                    <p className="team-2-designaiton">Volunteer</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-2-block">
                                    <div className="team-2-image">                               
                                        <div className="team-2-image-wrap"><img src="assets/images/resource/team-8.jpg" alt=""/></div>
                                        <div className="team-2-share-icon-area">
                                            <ul className="team-2-social-icon">
                                                <li><Link href="/about"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/about"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                            <div className="team-2-share-icon"><i className="icon-11"></i></div>
                                        </div>
                                    </div>
                                    <h4 className="team-2-title">Devon Lane</h4>
                                    <p className="team-2-designaiton">Volunteer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}
