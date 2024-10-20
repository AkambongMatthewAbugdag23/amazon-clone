import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <Link to="/">
              <img 
               className="header__logo" 
               src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
               alt="amazon-logo"
              />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                  <div className="header__optionBasket">
                    <AddShoppingCartIcon />
                    <span className="header__optionLineTwo 
                    header__basketCount">0</span>
                  </div>
                </Link>
            </div>
        </div>
    )
}

export default Header