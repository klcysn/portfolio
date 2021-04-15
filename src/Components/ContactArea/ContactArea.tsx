import React from 'react'
import "./ContactArea.scss"

const ContactArea = () => {
    return (
    <footer className="mainfooter" role="contentinfo">
        
        <div className="footer-middle">
            <h4 className="footer-header">Contact with me</h4>
            <div className="container">
                <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="footer-pad">
                        <h4>E-Mail</h4>
                        <a href="mailto:klc.ysn19@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="footer-pad">
                    <h4>GitHub</h4>
                    <a href="https://github.com/klcysn" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="footer-pad">
                    <h4>Linkedin</h4>
                    <a href="https://linkedin.com/in/yasin-kilic" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
</footer>
    )
}

export default ContactArea;
