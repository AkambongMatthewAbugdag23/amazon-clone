import React from 'react'
import './header.css'

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src="/Users/mac/amazon-clone/src/amazon-logo-1024x683.png" />

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                {/* Logo */}
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello Sign In</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
            </div>
        </div>
    )
}

export default Header