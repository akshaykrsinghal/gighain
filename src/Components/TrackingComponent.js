import React from 'react';
import styled from 'styled-components';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import AllocateTableComponent from './AllocateTableComponent';
import { LocationOnOutlined } from '@mui/icons-material';


function TrackingComponent() {

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
  gap:24px;
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
        <SubMenuTitle>Track Gigs To Completion</SubMenuTitle>
        <Button variant="contained" startIcon={<LocationOnOutlined />}>View Map</Button>
        <SubMenuItems>
        <select>
          <option>Company</option>
        </select>
        <select>
          <option>Invoice ID</option>
        </select>
        <select>
            <option>Gigger</option>
        </select>
        <select>
            <option>Status</option>
        </select>
        </SubMenuItems>
      </SubMenuWrapper>
      <SubHeading>1023 Unallocated Open Gigs in the system</SubHeading>
      <SubMenuWrapper>
      <FormControlLabel control={<CheckBox />} label="Select All" />
      <SubMenuItems>
      <Button variant="outlined">Admin Verified</Button>
      <Button variant="outlined">Generate Report</Button>
      <Button variant="contained">Client Verified</Button>
      </SubMenuItems>
      </SubMenuWrapper>
      <AllocateTableComponent />
    </div>
  )
}

export default TrackingComponent