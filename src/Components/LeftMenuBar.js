import React from 'react'
import styled from 'styled-components'
import TitleIcon from '../Assets/svgs/TitleIcon';

function LeftMenuBar() {
  const Wrapper = styled.div`
    width: 269px;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #3344FF;
    border-radius: 0px 20px 20px 0px
  `;
  const TitleUserWrapper = styled.div`
    display:flex;
    height: 65px;
    left: 27px;
    margin-top: 60px;
  `;
  const TitleUsers = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  `;
  return (
    <Wrapper>
        <TitleUserWrapper>
            <img src='../Images/logo.png'/>
        </TitleUserWrapper>
        <TitleUsers>
            Admin Consoles
        </TitleUsers>
    </Wrapper>
  )
}

export default LeftMenuBar