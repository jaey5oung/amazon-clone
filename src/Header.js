import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket, dispatch }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_options">
          <span className="header_optionLineOne">ㅎㅇ</span>
          <Link to="/Login" className="homeLogin">
            <span className="header_optionLinTwo">로그인하기</span>
          </Link>
        </div>
        <div className="header_options">
          <span className="header_optionLineOne">돌아가기</span>
          <span className="header_optionLinTwo">주문내역</span>
        </div>
        <div className="header_options">
          <span className="header_optionLineOne">반가워요</span>
          <span className="header_optionLinTwo">구독 좋아요</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwoheader_basketCount">
              {basket?.length}
              {/* 옵셔널 체이닝 */}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
