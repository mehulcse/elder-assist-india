
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog Details">
                <div>
                    <section className="blog-1-section">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="blog-1-block mb-0">
                                        <div className="blog-1-image">
                                            <img src="assets/images/resource/blog-11.jpg" alt=""/>
                                            <div className="blog-1-date"><span>15 </span><br/> APRIL</div>
                                        </div>
                                        <div className="blog-1-bottom-content alt mb_80">
                                            <h4 className="blog-1-title">Inspire Design Decisions Was With Giovanni Pintorie</h4>
                                            <ul className="d-flex blog-1-meta-info">
                                                <li><i className="icon-12"></i>Admin</li>
                                                <li><i className="icon-13"></i>0 Comnt</li>
                                            </ul>
                                            <p className="blog-1-excerpt">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi felis arcu maecenas pharetra, elementum orci orci. In tincidunt est viverra id. In habitant turpis pretium habitasse sapien, hendrerit. Consectetur auctor etiam purus senectus. <br/> <br/>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ornare non non massa elit rutrum. Eros proin nibh neque interdum accumsan, neque vitae. Tortor etiam sed suspendisse faucibus ac volutpat mattis tortor nec. Orc velit a, posuere turpis amet. Lectus lacus lectus habitasse amet quam libero, lorem. Volutpat odio maecenas viverra consequat condimentum diam donec aliquet. Natoque quam id vitae leo risus. Eget neque proin in dolor cursus bibendum urna dictum. Aliquam gravida et proin maecenas quis faucibus varius tristique. <br/> <br/> Pulvinar dolor aliquet netus ultrices neque, mi non accumsan ullamcorper. Et nunc scelerisque turpis facilisis pretium ut facilisis pharetra, ultrices. Duis imperdiet habitant arcu quis. Nunc euismod odio cursus in diam eget tincidunt mauris.</p> 
                                            <blockquote className="mt_40 mb_40">
                                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit purus tempor dui pharetra consequat nibh elit urna interdum viera quam a arcu duis quis lectus donec nulla aliquam sit fermentum morbi sed nisl molestie.”
                                                <cite>Darlene Robertson</cite>
                                            </blockquote>  
                                            <h4 className="fs_28 mb_20">Senior Living Community</h4>   
                                            <p className="mb_20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ornare non non massa elit rutrum. Eros proin nibh neque interdum accumsan, neque vitae. Tortor etiam sed suspendisse faucibus ac volutpat mattis tortor nec Orc velit a posuere turpis amet.</p>   
                                            <ul className="list-style-one mb_40">
                                                <li>Platea sed fames at egestas amet feugiat laoreet</li>
                                                <li>Duis et enim justo, in mauris posuere dolor magnis felis sapien sit egestas. Ut venenatis faucibus non sed faucibus mauris ultricies.</li>
                                                <li>Mauris donec ociis et magnis sapien etiam sapien sagittis congue tempor gravida done</li>
                                            </ul>  
                                            <div className="row mb_20">
                                                <div className="col-md-6">
                                                    <div className="image mb_30"><img src="assets/images/resource/blog-18.jpg" alt=""/></div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="image mb_30"><img src="assets/images/resource/blog-19.jpg" alt=""/></div>
                                                </div>
                                            </div>
                                            <h4 className="fs_28 mb_20">Trusted Senior Care</h4>
                                            <p className="mb_40">Eget neque proin in dolor cursus bibendum urna dictum. Aliquam gravida et proin maecenas quis faucibus varius tristique pulvinar dolor aliquet netus ultrices neque, mi non accumsan ullamcorper. Et nunc scelerisque turpis facilisis pretium ut facilisis pharetra, ultrices. Duis imperdiet habitant arcu quis. Nunc euismod odio cursus in diam eget tincidunt mauris.</p>
                                            <ul className="tag-cloud-widget-list alt d-flex flex-wrap">
                                                <li><Link href="/blog-grid">Caring</Link></li>
                                                <li><Link href="/blog-grid">Senior</Link></li>
                                                <li><Link href="/blog-grid">Elder</Link></li>
                                                <li><Link href="/blog-grid">Team</Link></li>
                                            </ul>                 
                                        </div>
                                        <div className="comments-area">
                                            <h4 className="fs_28 mb_30">2 Comments</h4>
                                            {/*Comment Box */}
                                            <div className="comment-box">
                                                <div className="comment">
                                                    <div className="author-thumb"><img src="assets/images/resource/testimonial-5.jpg" alt=""/></div>
                                                    <div className="comment-inner">
                                                        <h5>Mike Hardson</h5>
                                                        <div className="text">Lorem ipsum is simply free text used by copytyping eque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                                        <Link className="reply-comment-btn" href="#"> Reply</Link>
                                                    </div>
                                                </div>
                                            </div>        
                                            {/* Comment Box*/}
                                            <div className="comment-box">
                                                <div className="comment">
                                                    <div className="author-thumb"><img src="assets/images/resource/testimonial-7.jpg" alt=""/></div>
                                                    <div className="comment-inner">
                                                        <h5>Sarah Albert</h5>
                                                        <div className="text">Lorem ipsum is simply free text used by copytyping eque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                                        <Link className="reply-comment-btn" href="#"> Reply</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-form form-alt-2">  
                                            <h4 className="fs_28 mb_30">Leave a Comments</h4>
                                            <form method="post">
                                                <div className="row row-10">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="text" name="username" placeholder="Name*" required=""/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="email" name="email" placeholder="Email*" required=""/>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <textarea name="message" placeholder="Write Message"></textarea>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <button className="btn-1" type="submit" name="submit-form">Post Comment<span></span></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 ps-lg-60">
                                    <div className="tp-default-widget">
                                        <div className="search-widget">
                                            <form>
                                                <input type="search" placeholder="Search..."/>
                                                <button type="submit"><i className="icon-52"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="tp-default-widget alt">
                                        <h4 className="category-widget-title">Categories</h4>
                                        <ul className="category-widget-list">
                                            <li><Link href="/blog-grid">Eldercare <i className="icon-40"></i></Link></li>
                                            <li className="active"><Link href="/blog-details">Home Care <i className="icon-40"></i></Link></li>
                                            <li><Link href="/blog-grid">Insurance <i className="icon-40"></i></Link></li>
                                            <li><Link href="/blog-grid">Memory Care <i className="icon-40"></i></Link></li>
                                            <li><Link href="/blog-grid">Nursing <i className="icon-40"></i></Link></li>
                                            <li><Link href="/blog-grid">Senior Care <i className="icon-40"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="tp-default-widget alt">
                                        <h4 className="category-widget-title">Recent Article</h4>
                                        <div className="recent-post-widget">
                                            <div className="single-recent-post d-flex">
                                                <div className="single-recent-post-feature-image mr_20"><img src="assets/images/resource/blog-15.jpg" alt=""/></div>
                                                <div className="single-recent-post-content">
                                                    <h5 className="single-recent-post-title mb_10 fs_16"><Link href="/blog-grid">Project Concepts or <br/>
                                                        Related Queries</Link></h5>
                                                    <p className="single-recent-post-date">Apr 17, 2022</p>
                                                </div>
                                            </div>
                                            <div className="single-recent-post d-flex">
                                                <div className="single-recent-post-feature-image mr_20"><img src="assets/images/resource/blog-16.jpg" alt=""/></div>
                                                <div className="single-recent-post-content">
                                                    <h5 className="single-recent-post-title mb_10 fs_16"><Link href="/blog-grid">To Improve Your <br/> Express Application</Link></h5>
                                                    <p className="single-recent-post-date">Apr 17, 2022</p>
                                                </div>
                                            </div>
                                            <div className="single-recent-post d-flex">
                                                <div className="single-recent-post-feature-image mr_20"><img src="assets/images/resource/blog-17.jpg" alt=""/></div>
                                                <div className="single-recent-post-content">
                                                    <h5 className="single-recent-post-title mb_10 fs_16"><Link href="/blog-grid">Ensure that Copies of <br/> Documents</Link></h5>
                                                    <p className="single-recent-post-date">Apr 17, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-default-widget alt">
                                        <h4 className="category-widget-title">Photo Gallery</h4>
                                        <div className="gallery-widget d-flex flex-wrap">
                                            <div className="single-gallery-image">
                                                <Link href="assets/images/resource/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/project-6.jpg" alt=""/></Link>
                                            </div>
                                            <div className="single-gallery-image">
                                                <Link href="assets/images/resource/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/project-7.jpg" alt=""/></Link>
                                            </div>
                                            <div className="single-gallery-image">
                                                <Link href="assets/images/resource/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/project-8.jpg" alt=""/></Link>
                                            </div>
                                            <div className="single-gallery-image">
                                                <Link href="assets/images/resource/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/project-9.jpg" alt=""/></Link>
                                            </div>
                                            <div className="single-gallery-image">
                                                <Link href="assets/images/resource/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/project-10.jpg" alt=""/></Link>
                                            </div>
                                            <div className="single-gallery-image">
                                                <Link href="assets/images/resource/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/project-11.jpg" alt=""/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-default-widget alt">
                                        <h4 className="category-widget-title">Popular Tags</h4>
                                        <div className="tag-cloud-widget">
                                            <ul className="tag-cloud-widget-list d-flex flex-wrap">
                                                <li><Link href="/blog-grid">Caring</Link></li>
                                                <li><Link href="/blog-grid">Love & Care</Link></li>
                                                <li><Link href="/blog-grid">Old</Link></li>
                                                <li><Link href="/blog-grid">Nurseing</Link></li>
                                                <li><Link href="/blog-grid">Senior</Link></li>
                                                <li><Link href="/blog-grid">Team</Link></li>
                                                <li><Link href="/blog-grid">Community</Link></li>
                                                <li><Link href="/blog-grid">Elder</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>            
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}