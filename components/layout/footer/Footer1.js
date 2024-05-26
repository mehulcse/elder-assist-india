import Link from "next/link"

export default function Footer1() {
    return (
        <>
        <footer className="footer-1">
            <div className="footer-1-top">
                <div className="auto-container">
                    <div className="footer-1-top-content d-flex align-items-center justify-content-between">
                        <div className="logo"><Link href="/"><img src="assets/images/logo-light.png" alt="" /></Link></div>
                        <ul className="footer-1-social-icon d-flex align-items-center">
                            <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link href="/"><i className="fab fa-linkedin-in"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-1-middle">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="about-widget-1">
                                <div className="footer-widget-title"><h4>About</h4></div>
                                <div className="about-widget-1-text">
                                    <p>Lorem ipsum dolor sit amet <br />
                                        consectetur adipiscing elitsollicit udin <br /> netus quis ornare. Massa pharetra in <br /> nec sed nunc.</p>
                                    <p>nisl viverra massa imperdiet. Dui <br /> mattis quis congue fames.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="link-widget-1 px-lg-5">
                                <div className="footer-widget-title"><h4>Quick Link</h4></div>
                                <ul className="link-widget-1-list">
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Services</Link></li>
                                    <li><Link href="#">Case</Link></li>
                                    <li><Link href="#">Pricing</Link></li>
                                    <li><Link href="#">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="link-widget-1">
                                <div className="footer-widget-title"><h4>Usefull Links</h4></div>
                                <ul className="link-widget-1-list">
                                    <li><Link href="#">Privacy Policy</Link></li>
                                    <li><Link href="#">Terms & Condition</Link></li>
                                    <li><Link href="#">Support</Link></li>
                                    <li><Link href="#">Disclaimer</Link></li>
                                    <li><Link href="#">Faq</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-widget-1">
                                <div className="footer-widget-title"><h4>Contact Us</h4></div>
                                <div className="contact-widget-text">Tincidunt neque pretium lectus
                                    donec risus.</div>
                                <ul className="contact-widget-1-list">
                                    <li><i className="icon-14"></i> New Hyde Park, NY 11040</li>
                                    <li><i className="icon-3"></i><Link href="mailto:example@lovegiver.com">example@lovegiver.com</Link></li>
                                    <li><i className="icon-2"></i><Link href="tel:3336660000">333 666 0000</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">    
                    <div className="footer-bottom-row">
                        <div className="footer-bottom-text">Copyright 2024 by lovegiver Template All Right Reserved.</div>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}
