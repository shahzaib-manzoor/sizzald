import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import image1 from "../../assets/image1.svg";
import star from '../../assets/starLotary.svg';
import bitcoinAffilate from '../../assets/bitcoinAffilate.svg';

import { Avatar, Box, Button, Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: '#FFFFFF',
    // borderRadius: '8px',
    borderBottom: '1px solid #221F25',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    // borderBottom: '1px solid #221F25',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    color: '#FFFFFF',
  },

  '&:last-child td, &:last-child th': {},
}));

const rows = [
  {
    image1: bitcoinAffilate,
    text: 'Bigbest',
    betid: '500.00',
  },
  {
    image1: bitcoinAffilate,
    text: 'Bigbest',
    betid: '500.00',
  },
  {
    image1: bitcoinAffilate,
    text: 'Bigbest',
    betid: '500.00',
  },
  {
    image1: bitcoinAffilate,
    text: 'Bigbest',
    betid: '500.00',
  },
  {
    image1: bitcoinAffilate,
    text: 'Bigbest',
    betid: '500.00',
  },
  {
    image1: bitcoinAffilate,
    text: 'Bigbest',
    betid: '500.00',
  },
];
const typo = { fontSize: '16px', fontWeight: 400, color: '#ffffff',padding:"0px",height:"40px",paddingRight:'30px' };
export default function CustomizedTables() {
  return (
    <Box sx={{ paddingRight: '20px' }}>
      <TableContainer
        component={Paper}
        sx={{
          background: 'rgba(43, 45, 80, 0.6)',
          width: '100%',
          borderRadius: '10px',
        }}
      >
        <Table
          sx={{ minWidth: { xs: 400, sm: 400, md: 400, lg: 450, xl: 500 } }}
          aria-label='customized table'
        >
          <TableHead
            sx={{ background: '#14163D', borderBottom: '1px solid #221F25' }}
          >
            <TableRow>
              <StyledTableCell
                sx={{
                  minWidth: '124px',
                  fontSize: '18px',
                  fontWeight: 400,
                  fontFamily: 'Poppins',
                  padding: '0px',
                  paddingLeft: '25px',
                }}
              >
                Player
              </StyledTableCell>
              <StyledTableCell align='right' sx={{padding:'0px',height:'50px',paddingRight:"30px"}}>
                Commission/Rewards
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell
                  component='th'
                  scope='row'
                  align='left'
                  sx={{ padding: '0px', paddingLeft: '25px' }}
                >
                  <Typography
                    sx={{
                      color: '#ffffff',
                      fontSize: '16px',
                      fontWeight: 700,
                      fontFamily: 'Poppins',
                    }}
                  >
                    {row.text}
                  </Typography>
                </StyledTableCell>

                <StyledTableCell sx={typo} align='right'>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 1,
                      justifyContent: 'flex-end',
                      //   marginRight: '13px',
                    }}
                  >
                    <img src={row.image1}></img>
                    <Typography
                      sx={{
                        color: '#ffffff',
                        fontSize: '16px',
                        fontWeight: 600,
                        fontFamily: 'poppins',
                      }}
                    >
                      {row.betid}
                    </Typography>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
