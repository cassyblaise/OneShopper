import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Copyright extends React.Component {
    render() {
        return (
            < Layout >
                <SEO title="Copyright" keywords={[`gatsby`, `Copyright`, `react`]} />
                <div className="site-About">
                    <div className="container">
                        <div className="row">
                           <div className="col-sm-12">
                    <h1>Privacy Policy</h1>
                    <h5>This Privacy Policy was last modified on December 09, 2020.</h5>
                   
                    <p>Zusi Skincare Company (“us”, “we”, or “our”) operates https://zusiskincare.com/ (the “Site”). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.</p>
                    <p>We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at https://zusiskincare.com/</p>
                    

                    <p>While using our Site, we may ask you to provide us with certain personally identifiable 
                    information that can be used to contact or identify you. 
                    Personally identifiable information may include, but is not limited to, your name, email address, 
                    postal address and phone number (“Personal Information”).
                    </p>
                    
                    <h2>Log Data</h2>
                    <p>Like many site operators, we collect information that your browser sends whenever you visit our Site (“Log Data”). 
                       This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, 
                       the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.
                       </p>
                    
                    <h2>Cookies</h2>
                    <p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.
                       Like many sites, we use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, 
                       you may not be able to use some portions of our Site.</p>

                    <h2>Security</h2>
                    <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, 
                    or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, 
                    we cannot guarantee its absolute security.
                    </p>
                    
                    <h2>Links To Other Sites</h2>
                    <p>Our Site may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. 
                    We strongly advise you to review the Privacy Policy of every site you visit.
                    </p>

                    <p>Zusi Skincare Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party sites or services.</p>

                    <h2>Changes To This Privacy Policy</h2> 
                    <p>Zusi Skincare Company may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Site. 
                    You are advised to review this Privacy Policy periodically for any changes.
                    </p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us.</p>
                </div>
                    <div className="site-info">
                            ©<span>{new Date().getFullYear()}</span> Caslify. All right reserved.
                        </div>
                        </div>
                    </div>
                </div>
            </ Layout>
        )
    }
}

export default Copyright
