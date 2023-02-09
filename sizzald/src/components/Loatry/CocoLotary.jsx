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
    borderBottom: '1px solid red',
  },
  // hide last border
  '&:last-child td, &:last-child th': {},
}));

const rows = [
  {
    image1: <img src={star}></img>,
    text: "5 NUMBERS JACKPOT BALL",
    player: (
      <Box
        sx={{
          width: "240px",
          height: "54px",
          background:
            " linear-gradient(260.32deg, rgba(3, 251, 117, 0.4) -24.69%, rgba(3, 251, 117, 0.16) 26.75%, rgba(20, 22, 61, 0) 78.18%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Box sx={{ display: "flex",alignItems:'center', gap: 1 }}>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
        </Box>
        <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
      </Box>
    ),
    betid: "$100,000.00",
    button: "1.9x",
    // bitcoin: <img src={bitcoin}></img>,
    bitcoinText: '0.66667598645',
  },
  {
    // image1: <img src={image2}></img>,
    text: "5 NUMBERS JACKPOT BALL",
    player: (
      <Box
        sx={{
          width: "240px",
          height: "54px",
          background:
            " linear-gradient(260.54deg, rgba(3, 251, 117, 0.4) -10.18%, rgba(3, 251, 117, 0.16) 49.49%, rgba(20, 22, 61, 0) 109.16%)rgba(1, 2, 47, 1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px"}}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
        </Box>
        <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
      </Box>
    ),
    betid: "$100,000.00",
    button: "1.9x",
    // bitcoin: <img src={bitcoin}></img>,
    // bitcoinText: '0.66667598645',
  },
  {
    // image1: <img src={image3}></img>,
    text: "5 NUMBERS JACKPOT BALL",
    player: (
      <Box
        sx={{
          width: "240px",
          height: "54px",
          background:
            " linear-gradient(260.54deg, rgba(3, 251, 117, 0.4) -10.18%, rgba(3, 251, 117, 0.16) 49.49%, rgba(20, 22, 61, 0) 109.16%)rgba(1, 2, 47, 1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
        </Box>
        <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
      </Box>
    ),
    betid: "$100,000.00",
    button: "1.9x",
    // bitcoin: <img src={bitcoin}></img>,
    // bitcoinText: '0.66667598645',
  },
  {
    // image1: <img src={image4}></img>,
    text: "5 NUMBERS JACKPOT BALL",
    player: (
      <Box
        sx={{
          width: "240px",
          height: "54px",
          background:
            " linear-gradient(260.54deg, rgba(3, 251, 117, 0.4) -10.18%, rgba(3, 251, 117, 0.16) 49.49%, rgba(20, 22, 61, 0) 109.16%)rgba(1, 2, 47, 1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
        </Box>
        <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
      </Box>
    ),
    betid: "$100,000.00",
    button: "1.9x",
    // bitcoin: <img src={bitcoin}></img>,
    // bitcoinText: '0.66667598645',
  },
  {
    // image1: <img src={image2}></img>,
    text: "5 NUMBERS JACKPOT BALL",
    player: (
      <Box
        sx={{
          width: "240px",
          height: "54px",
          background:
            " linear-gradient(260.54deg, rgba(3, 251, 117, 0.4) -10.18%, rgba(3, 251, 117, 0.16) 49.49%, rgba(20, 22, 61, 0) 109.16%)rgba(1, 2, 47, 1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
        </Box>
        <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
      </Box>
    ),
    betid: "$100,000.00",
    button: "1.9x",
    // bitcoin: <img src={bitcoin}></img>,
    // bitcoinText: '0.66667598645',
  },
  {
    // image1: <img src={image3}></img>,
    text: "5 NUMBERS JACKPOT BALL",
    player: (
      <Box
        sx={{
          width: "240px",
          height: "54px",
          background:
            " linear-gradient(260.54deg, rgba(3, 251, 117, 0.4) -10.18%, rgba(3, 251, 117, 0.16) 49.49%, rgba(20, 22, 61, 0) 109.16%)rgba(1, 2, 47, 1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
          <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
        </Box>
        <Avatar sx={{ background: "#ffffff",height:"32px",width:"32px" }}></Avatar>
      </Box>
    ),
    betid: "$100,000.00",
    button: "1.9x",
    // bitcoin: <img src={bitcoin}></img>,
    // bitcoinText: '0.66667598645',
  },
];
const typo = { fontSize: '16px', fontWeight: 400, color: '#ffffff' };
export default function CustomizedTables() {
  return (
    <Box sx={{ paddingRight: '20px' }}>
      <Typography
        sx={{
          fontSize: "23px",
          fontWeight: 700,
          fontFamily: 'Poppins',
          lineHeight: '40px',
          color: '#ffffff',
          paddingBottom: '20px',
        }}
      >
        COCO LOTTERY RULE
      </Typography>

      <TableContainer
        component={Paper}
        sx={{ background: "rgba(43, 45, 80, 0.6)", width: "100%" }}
      >
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead
            sx={{ background: '#14163D', borderBottom: '1px solid #221F25' }}
          >
            <TableRow>
              <StyledTableCell>Matches</StyledTableCell>
              <StyledTableCell align='left'>Numbers</StyledTableCell>
              <StyledTableCell align='left'>Prize</StyledTableCell>
              {/* <StyledTableCell align='left'>Payout</StyledTableCell>
              <StyledTableCell align='left'>Profile</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row" align="left">
                  <Box sx={{ display: "flex",alignItems:"center", gap: 1 }}>
                    {row.image1}
                    <Typography
                      sx={{
                        color: index === 0 ? "#03FB75" : "#ffffff",
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: 'poppins',
                      }}
                    >
                      {row.text}
                    </Typography>
                  </Box>
                </StyledTableCell>
                <StyledTableCell sx={typo} align='left'>
                  <Box
                    sx={{
                      width: '291px',
                      height: '54px',
                      background:
                        ' linear-gradient(260.32deg, rgba(3, 251, 117, 0.4) -24.69%, rgba(3, 251, 117, 0.16) 26.75%, rgba(20, 22, 61, 0) 78.18%)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderRadius: '8px',
                      paddingLeft: '10px',
                      paddingRight: '10px',
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Avatar sx={{ background: '#ffffff' }}></Avatar>
                      <Avatar sx={{ background: '#ffffff' }}></Avatar>
                      <Avatar sx={{ background: '#ffffff' }}></Avatar>
                      <Avatar sx={{ background: '#ffffff' }}></Avatar>
                      <Avatar sx={{ background: '#ffffff' }}></Avatar>
                    </Box>
                    <Avatar sx={{ background: '#ffffff' }}></Avatar>
                  </Box>
                </StyledTableCell>
                <StyledTableCell sx={typo} align="left">
                  <Box sx={{ display: "flex",alignItems:"center", gap: 1 }}>
                    {row.image1}
                    <Typography
                      sx={{
                        color: index === 0 ? "#03FB75" : "#ffffff",
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: 'poppins',
                      }}
                    >
                      {row.betid}
                    </Typography>
                  </Box>
                </StyledTableCell>
                {/* <StyledTableCell align='left'>
                  <Button
                    sx={{
                      background: '#45D91E',
                      borderRadius: '16px',
                      height: '26px',
                    }}
                  >
                    {row.button}
                  </Button>
                </StyledTableCell> */}
                {/* <StyledTableCell align='left'>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {row.bitcoin}
                    <Typography sx={typo}>{row.bitcoinText}</Typography>
                  </Box>
                </StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
