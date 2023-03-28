import React from 'react'
import styled from 'styled-components'
import AllocateGigChain from './AllocateGigChain';
import TrackingComponent from './TrackingComponent';
import { ReactSVG } from "react-svg";


function RightMenuBar() {
  const RightWrapper = styled.div`
    text-align:left;
  `;

  const TitleWrapper = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 42px;
    color: #808080;
  `;

  const SubHeading = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #2951D5;
  `;

  const MenuWrapper = styled.div`
    display:flex;
  `;

  const MenuBoxWrapper = styled.div`
    width: 20%;
    height: 121px;
    margin-right:7px;
    ${(props) => props.isActive ? `background: #FFF;color: #000;` : `background: #3344FF; color: #FFF;`}
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.025);
    border-radius: 10px;
    text-align:center;
    cursor:pointer;
    padding-top:20px;
  `;

  const MenuTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  `;

  const MenuIconWraper = styled.div`
  
  `;

  const MenuTitleItems = ["Gig Allocation", "Attendence", "Tracking", "Payout", "History"];
  const [selectedMenu, setSelectedMenu] = React.useState(MenuTitleItems[0]);

  const selectedMenuComponent = () =>{
    switch(selectedMenu){
      case MenuTitleItems[0]: return <AllocateGigChain />; 
      case MenuTitleItems[2]: return <TrackingComponent />;
    }
  }

  const selectedMenuLogo = (i)=>{
    if(i==="logo-0" && MenuTitleItems[0] !== selectedMenu) return <ReactSVG src="../Images/logo7.svg" />
    if(i==="logo-2" && MenuTitleItems[0] !== selectedMenu) return <ReactSVG src="../Images/logo.svg" />
    switch(i){
      case "logo-0": return <ReactSVG src="../Images/logo.svg"  />; break;
      case "logo-1": return <ReactSVG src="../Images/logo1.svg" />; break;
      case 'logo-2': return <ReactSVG src="../Images/logo2.svg" />; break;
      case 'logo-3': return <ReactSVG src="../Images/logo3.svg" />; break;
      case 'logo-4': return <ReactSVG src="../Images/logo4.svg" />; break;
    }
  }

  return (
    <RightWrapper>
      <TitleWrapper>Gig Execution Module</TitleWrapper>
      <SubHeading>Allocate Gigs, Track Execution, Track Execution by Giggers</SubHeading>
      <MenuWrapper>
        {
          [0, 1, 2, 3, 4].map((item,index) => {
            return (
              <MenuBoxWrapper isActive={selectedMenu !== MenuTitleItems[item]} onClick={() => { setSelectedMenu(MenuTitleItems[item]) }} >
                {selectedMenuLogo(`logo-${item}`)}
                <MenuTitle>
                  <MenuIconWraper>
                    {MenuTitleItems[item]}
                  </MenuIconWraper>
                </MenuTitle>
              </MenuBoxWrapper>
            )
          })
        }
      </MenuWrapper>
      {selectedMenuComponent()}
      <h1>{selectedMenu}</h1>

    </RightWrapper>
  )
}

export default RightMenuBar