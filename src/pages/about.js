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
                    <h1>About Us</h1>
                    <h3>Introducing Zusi Skincare Company</h3>
                   
                    <p>Since 2011, the vision of Zusi Skincare Company has been simple: to develop scientifically formulated, sophisticated skincare products which work.</p>
                    <p>Because we come from a clinical background ourselves, and because we collaborate with leading bio-physicists, clinicians, plastic surgeons and dermatologists, we’re able to create created formulations which we know are effective, as well as having an easy-to-follow regimen at home.</p>

                    <p>You’ll also find we don’t use harmful filler ingredients – just raw, active and clinical-grade cosmeceuticals proven to make a positive difference.</p>
                    <p>Now after a decade, we’re proud to have grown as more and more people across Nigeria. We still remain an independent, and fully Nigeria owned and operated company.</p>
                    <p>As our journey continues and our product range grows, the reason we began Zusi Skincare Company remains the same. We’re here to help people achieve the best possible look, with honest products we stand behind and a shopping experience as easy-to-use as our skincare.</p>

                    <p>As always,if you have any questions or comments, please drop us a line.</p>

                </div>
            </div>
        </div> 
        < /div> 
        </Layout >
        )
    }
}
export default About
