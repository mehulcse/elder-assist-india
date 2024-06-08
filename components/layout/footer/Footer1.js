import Link from "next/link"

export default function Footer1() {
    return (
        <>
        <footer className="footer-1">
            <div className="footer-1-top">
                <div className="auto-container">
                    <div className="footer-1-top-content d-flex align-items-center justify-content-between">
                        <div className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" /></Link></div>
                        <ul className="footer-1-social-icon d-flex align-items-center">
                            <li><Link href="https://www.facebook.com/profile.php?id=61559504316514"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="https://x.com/eldercare07"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link href="https://www.linkedin.com/in/elder-assist-731765309/"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link href="https://www.instagram.com/eldercare07/"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-1-middle">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="about-widget-1">
                                <div className="footer-widget-title"><h4>About Us</h4></div>
                                <div className="about-widget-1-text">
                                    <p>Welcome to Elder Assist India, your partner in top-tier elderly care. We provide personalized services including <b>medical, everyday essentials, financial care, emergency assistance, & wellness activities</b>. Join us in supporting India's growing senior population, projected to reach 173 million by 2026, ensuring they lead dignified and fulfilling lives.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="link-widget-1 px-lg-5">
                                <div className="footer-widget-title"><h4>Quick Links</h4></div>
                                <ul className="link-widget-1-list">
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Services</Link></li>
                                    <li><Link href="#">Subscription Plans</Link></li>
                                    <li><Link href="#">Blogs</Link></li>
                                    <li><Link href="#">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="link-widget-1">
                                <div className="footer-widget-title"><h4>Useful Links</h4></div>
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
                                <div className="contact-widget-text">You can reach out to us at:</div>
                                <ul className="contact-widget-1-list">
                                    <li><i className="icon-14"></i> Elder Assist India, East Delhi, India</li>
                                    <li><i className="icon-3"></i><Link href="mailto:example@lovegiver.com">info@elderassistindia.com</Link></li>
                                    <li><i className="icon-2"></i><Link href="tel:3336660000">+91-xxxx-xxx-xxx</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">    
                    <div className="footer-bottom-row">
                        <div className="footer-bottom-text">Copyright © 2024 Elder Assist India | Designed by <a href="https://cognitivecoreai.com">CognitiveCoreAI</a> All Right Reserved.</div>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}
