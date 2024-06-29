import React from 'react'

function Footer() {
    const year=new Date().getFullYear();
    return (
        <div className="footer">
            <h3 className="footer-head">CONFERENCES@IIIT-K ({year})</h3>
            <p className="footer-foot">All Rights Reserved.</p>
        </div>
    )
}

export default Footer
