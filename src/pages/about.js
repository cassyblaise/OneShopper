import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
    render() {
        return ( <
            Layout >
            <SEO title="About" keywords={[`gatsby`, `About`, `react`]} /> <
            div className = "site-About" >
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h2>About Us</h2>
                    <p>This Zuri skincare website is an Ecommerce  with built Gatsby + Contentful and snipcart</p>
                    <div class="row">
                        <div class="col-sm-2">
                            
                        </div>
                        <div class="col-sm-8">
                            <h2 class="mb-1">Cassy Blaise</h2>
                            <p class="mb-0">
                                <a href="https://zuri.netlify.app/" target="_blank" rel="noopener noreferrer">Website</a>
                            </p>
                            <p class="mb-0">
                                <a href="mailto:cassyblaise@gmail.com">Gmail</a>
                            </p>
                            <p class="mb-0">
                                <a href="https://github.com/cassyblasie" target="_blank" rel="noopener noreferrer">Github</a>
                            </p>
                            
                        </div>
                    </div>
                    <h2>Features</h2>
                    <ul>
                        <li>Blog post listing with for each blog post.</li>
                        <li>Store page with all Product with few good features like Rating, Price, Checkout, More then one Product images with tabbing.</li>
                        <li>Contact form with Email notification.</li>
                        <li>Index pages design with Latest Post, Latest Blog and Deal of week and Banner.</li>
                        <li>So many other Good features</li>
                    </ul>
                    <h2>Setup</h2>
                    <h3>Create a Gatsby site.</h3>
                   
                    <p>Navigate into your new site’s directory and start it up.</p>
                    <code>
                        Zuri Shop
                    </code>

                </div>
            </div>
        </div> 
        < /div> 
        </Layout >
        )
    }
}
export default About
