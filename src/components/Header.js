import React,{useState} from "react";
import styled, { StyledComponent } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from "../features/car/carSlice";
import {useSelector} from 'react-redux'

function Header() {
  const [menuStatus,setMenuStatus]= useState(false);
  const cars=useSelector(selectCars)
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        {cars && cars.map((car, index)=>(
           <a key={index} href="#">{car}</a>
        ))}
{/*      
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a> */}
      </Menu>
      <RightMenu>
        <a href="#">shop</a>
        <a href="#">Tesla Account</a>
        <Customicon onClick={()=>setMenuStatus(true)}/>
      </RightMenu>
      <BurgerNav show={menuStatus}>
        <WrapClose>
        <CustomClose onClick={()=>setMenuStatus(false)}/>
        </WrapClose>
        {cars && cars.map((car, index)=>(
          //  <a key={index} href="#">{car}</a>
           <li>
          <a key={index} href="#">{car}</a>
        </li>
        ))}
        
        {/* <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li> */}
        <li>
          <a href="#">Solar Roof</a>
        </li>
        <li>
          <a href="#">Solar Panels</a>
        </li>
        <li>
          <a href="#">Exiting Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trad-in</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
       
      </BurgerNav>
      <Footer/>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  justify-content: space-between;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  justify-content:flex-end;
  align-items: center;
  // margin-right:-350px;
  a {
    font-weight: 600;
    text-transform: uppercase;

    // flex-wrap: nowrap;
    margin-right: 10px;
    // justify-content:flex-end;
  }
  @media (max-width: 768px) {
    // display: flex;
    // flex-direction:colomn;
    // justify-content:flex-end;
    margin-left:350px;
    // margin-right: -352px;
  }
`;
const Customicon = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform:${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition:transform 0.2s ease-in;
  li {
    padding: 9px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const CustomClose=styled(CloseIcon)`
margin-top:10px;
`
const WrapClose=styled.div`
display:flex;
justify-content:flex-end;


`
const Footer=styled.div`


`

