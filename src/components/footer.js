import React, { Component } from "react";
import { Link } from "gatsby"
import facebook from '../images/social/facebook.svg'
import instagram from '../images/social/instagram.svg'
//import twitter from '../images/social/twitter.svg'
//import linkedin from '../images/social/linkedin.svg'
import email from '../images/social/email.svg'

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="footer_inner">
                    <div className="container">
                        <div className="footer-widget footer-content">
                            <section id="nav_menu-8" className="widget widget_nav_menu">
                                <div className="menu-main-container">
                                    <ul id="menu-main" className="menu">
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/blogs">Blogs</Link></li>
                                        <li><Link to="/store">Store</Link></li>
                                        <li><Link to="/contact-us">Contact</Link></li>
                                        <li><Link to="/copyright">Copyright</Link></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    
                    <div className="column is-4 social">
                    <a title="facebook" href="https://www.facebook.com/Caslify" target="_blank" rel="noopener noreferrer">
                     <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img
                   src={instagram}
                   alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="email" href="mailto:info@caslify.com.ng">
                  <img 
                    src={email}
                    alt="email"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>

                {/*
                <a title="twitter" href="https://twitter.com/caslify" target="_blank" rel="noopener noreferrer">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                
                <a title="linkedin" href="https://www.linkedin.com/company/caslify/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                  */}
              </div>
                    <div className="footer-bottom social-right-menu ">
                        <div className="site-info">
                         ©<span>{new Date().getFullYear()}</span> Caslify. All right reserved.
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
