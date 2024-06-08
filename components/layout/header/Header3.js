import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-two"> */}
            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container d-flex align-items-center justify-content-between">
                            <div className="logo-box">
                                <div className="logo"><a href="/"><img src="assets/images/logo.png" alt=""/></a></div>
                            </div>
                            <div className="right-column d-flex align-items-center">     
                                <div className="nav-outer">
                                    <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="assets/images/icons/icon-bar.png" alt=""/></div>
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                            <Menu />
                                        </div>
                                    </nav>
                                </div>
                                <div className="header-upper-phone-number"><i className="icon-22"></i><a href="tel:(91)-xxx-xxx-xxxx">(91)-xxx-xxx-xxxx</a></div>                   
                                {/*<div className="header-link-btn d-none d-md-block"><a href="/" className="btn-1">Donation Now <span></span></a></div>*/}
                            </div>                        
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    {/* Header Upper */}
                        <div className="header-upper">
                            <div className="auto-container">
                                <div className="inner-container d-flex align-items-center justify-content-between">
                                    <div className="logo-box">
                                        <div className="logo"><a href="/"><img src="assets/images/logo.png" alt=""/></a></div>
                                    </div>
                                    <div className="right-column d-flex align-items-center">     
                                        <div className="nav-outer">
                                            <div className="mobile-nav-toggler"><img src="assets/images/icons/icon-bar.png" alt=""/></div>
                                            <nav className="main-menu navbar-expand-md navbar-light">
                                                <Menu />
                                            </nav>
                                        </div>
                                        <div className="header-upper-phone-number"><i className="icon-22"></i><a href="tel:(239)-543-217-0108">(239)-543-217-0108</a></div>                   
                                        {/*<div className="header-link-btn d-none d-md-block"><a href="/" className="btn-1">Donation Now <span></span></a></div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/*End Header Upper*/}
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}
                <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />

            </header>

        </>
    )
}
