
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}


export default function Banner() {
    return (
        <>
            <section className="banner-section style-three">
                <div className="banner-shape-3"><img src="assets/images/shape/pattern-3.png" alt=""/></div>
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="banner-feature-image d-none d-lg-block" style={{backgroundImage: 'url(assets/images/main-slider/banner-3.jpg)'}}></div>
                        <div className="content-outer">
                            <div className="content-box">
                                <div className="inner">
                                    <h4>Change The World</h4>
                                    <h1>Finding The <br/>
                                        Best <span>Senior Care</span> <br/>
                                        Services</h1>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> Turpis ridiculus tellus.</div>
                                    <div className="link-box">
                                        <Link href="/" className="btn-1 btn-large">Discover More <span></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="banner-feature-image d-none d-lg-block" style={{backgroundImage: 'url(assets/images/main-slider/banner-3.jpg)'}}></div>
                        <div className="content-outer">
                            <div className="content-box">
                                <div className="inner">
                                    <h4>Change The World</h4>
                                    <h1>Love & <br/> Care For <br/> Senior</h1>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/> Turpis ridiculus tellus.</div>
                                    <div className="link-box">
                                        <Link href="/" className="btn-1 btn-large">Discover More <span></span></Link>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <ul className="banner-social-icon d-flex">
                        <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link href="/"><i className="fab fa-linkedin-in"></i></Link></li>
                    </ul>
                </Swiper>
            </section>
        </>
    )
}
