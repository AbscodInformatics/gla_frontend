import React from 'react';
import lax from 'lax.js';
 
class About extends React.Component {

    constructor(props) {
        super(props)
        lax.setup()
    
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
    
        lax.update(window.scrollY)
    }

    render(){
        return (
            <section className="about-area-two ptb-120 bg-image " style={{marginTop:"20px"}}>
                <div className="container">
                    <div className="row h-100 " >
                                <h2 className="text-justify" style={{marginBottom:"20px"}}>The largest network of the world’s top legal professionals, lawyers & legal technology providers.</h2>
                       

                        <div className="col-lg-6" style={{marginTop:"10px",}}>
                            <div className="about-image">
                                <img src="/images/about-image.JPG" className="about-img1" alt="about" style={{width:"100%",borderRadius:"40px"}} />

                                {/* <LaxButton /> */}
                            </div>
                        </div>
                         <div className="col-lg-6" >
                            <div className="about-content text-justify" >
                                <span><b>Who We Are</b></span>

                                <p>Global Legal Association (GLA) is <b>  a network of Legal Professionals </b> from all over the world that devote a majority of their practice to the legal industry. We are here to support and provide insight on all issues about legal matters. GLA provides a platform for <b> legal professionals </b> from around the world to engage, connect, generate, promote business prospects and receive the recognition they deserve. GLA represents a diverse and wide spectrum of individuals from law firms, Corporates, Universities, and Venture capitalists involved indirectly or directly in the practice of the law profession.</p>
                                
                                <p>GLA, <b> a network of Legal Professionals,</b> provides you with timely, relevant, and unique event outcomes enabling you to seamlessly connect with the right knowledge, ideas, people, marketplaces, and opportunities to remain ahead of the curve. <b> Legal counsel advice </b> intends to cover every aspect of legal matters in the few years to come. Our commitment to service and quality is the basis for our reputation as we tend to provide the best legal platform in the world. We, <b> the legal counselors,</b> influence international law reform's development and shapes the legal profession's future throughout the world.</p>

                                {/* <div className="signature">
                                    <img src={require("../../assets/images/signature.png")} alt="about" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;