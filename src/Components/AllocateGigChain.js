import React from 'react';
import styled from 'styled-components';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import AllocateTableComponent from './AllocateTableComponent';


function AllocateGigChain() {

const MenuTitleItems = ["Gig Allocation", "Attendence", "Tracking", "Payout", "History"];

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

const SubMenuWrapper = styled.div`
  display:flex;
  margin-top:40px;
  padding-right:15px;
`;

const SubMenuTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 42px;
  color: #2E2E2E;
`;

const SubMenuItems = styled.div`
  margin-left:auto;
  display:flex;
  gap:7px;
`;
  return (
    <div>
        <SubMenuWrapper>
        <SubMenuTitle>Allocate Gigs To Giggers</SubMenuTitle>
        <SubMenuItems>
        <select>
          <option>Company</option>
        </select>
        <select>
          <option>Invoice ID</option>
        </select>
        </SubMenuItems>
      </SubMenuWrapper>
      <SubHeading>1023 Unallocated Open Gigs in the system</SubHeading>
      <SubMenuWrapper>
      <FormControlLabel control={<CheckBox />} label="Select All" />
      <SubMenuItems>
      <Button variant="outlined">Auto Assign</Button>
      <Button variant="contained">Approve</Button>
      </SubMenuItems>
      </SubMenuWrapper>
      <AllocateTableComponent />
    </div>
  )
}

export default AllocateGigChain