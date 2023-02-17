import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom'

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
function Header() {

  const history = useHistory()
  const {User} = useContext(AuthContext)

  console.log(User,"<<<<<<<<<>>>>>")
  const {Firebase} = useContext(FirebaseContext)
      console.log(Firebase,'//////////////////////');
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div onClick={()=>{
          history.push('/')
        }} className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{User ? `${User.displayName}` :'Login'}</span>
          <hr />
        </div>

          {User && <span className='pointer' onClick={()=>{
            Firebase.auth().signOut();
            history.push('/login')
          }} >LogOut</span>}

        <div onClick={()=>{
          history.push('/create')
        }} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
