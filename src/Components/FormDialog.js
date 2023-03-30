import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function FormDialog({ giggers }) {
  const [open, setOpen] = React.useState(false);
  const [giggersValue, setgiggersValue] = React.useState(giggers);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const FormTitles = styled.div`
    width: 320px;
    height: 35px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #000000;
    margin: 0px 37px 0px 110px;
  `;

  const TitleWrapper = styled.div`
  display:flex;
  `;

  const Wrapper = styled.div`
    width: 566px;
    height: 361px;
    background: #FAFAFA;
    padding-top:35px;
    padding:38px;
  `;

  const GiggerWrapper = styled.div`
  width:500px;
  max-height: 255px;
  margin-top:20px;
  overflow-y: auto;
  `;

  const TableWrapper = styled.div`
  display:flex;
  margin-top:26px;
  `;
  const TableHeader = styled.div`
    width: 33%;
    text-align: center;
    height: 21px;
    /* font-family: 'Poppins'; */
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #808080;
    `;
  const TableRow = styled.div`
  width: 33%;
  height: 21px;
  text-align: center;
  /* font-family: 'Poppins'; */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-decoration-line: underline;
  color: #808080;
  `;


  return (
    <div>
      <ReactSVG src="../Images/linkIcon.svg" onClick={handleClickOpen} style={{cursor:'pointer'}} />
      <Dialog open={open} onClose={handleClose}>
        <Wrapper>
          <TitleWrapper>
            <FormTitles>
              Giggers Assigned to Gig ID 13456543:-
              (Max 5 Giggers can be assigned)
            </FormTitles>
            <Button variant='contained' style={{}}>Add</Button>
            <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
          </TitleWrapper>
          <GiggerWrapper>
            <TableWrapper>
              <TableHeader>
                Gigger ID
              </TableHeader>
              <TableHeader>
                Gigger Name
              </TableHeader>
              <TableHeader>
                Status
              </TableHeader>
            </TableWrapper>
            {giggers.map(gigger => {
              return (<TableWrapper>
                <TableRow>
                  123
                </TableRow>
                <TableRow>
                  Rakesh
                </TableRow>
                <TableRow>
                  Assigned
                </TableRow>
              </TableWrapper>)
            })}
          </GiggerWrapper>
        </Wrapper>
        <DialogActions>
          <Button onClick={handleClose} variant='contained' style={{
            marginRight: '39%',
            boxSizing: 'border-box',
            width: '96px',
            height: '39px',
            background: '#3344FF',
            border: '1px solid #3344FF',
            boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.025)',
            borderRadius: '10px'
          }}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}