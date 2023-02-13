import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import image1 from '../../assets/image1.svg';
import bitcoin from '../../assets/bitcoin.svg';
import image2 from '../../assets/image2.svg';
import image3 from '../../assets/image3.svg';
import image4 from '../../assets/image4.svg';
import { Box, Button, Typography } from '@mui/material';
import { width } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: '#FFFFFF',
    // borderRadius: '8px',
    borderBottom: '1px solid #221F25',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderBottom: '1px solid #221F25',
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

// function createData(Game,text, Player, BetID, Payout, Profile,bitcoin) {
//   return { Game, Player,text, BetID, Payout, Profile,bitcoin };
// }

const rows = [
  {
    image1: <img src={image1}></img>,
    text: '0x8a184ec8412f5..',
    player: 'name 1 ',
    betid: '789654789543315892',
    button: '1.9x',
    bitcoin: <img src={bitcoin}></img>,
    bitcoinText: '0.66667598645',
  },
  {
    image1: <img src={image2}></img>,
    text: '0x8a184ec8412f5..',
    player: 'name 1 ',
    betid: '789654789543315892',
    button: '1.9x',
    bitcoin: <img src={bitcoin}></img>,
    bitcoinText: '0.66667598645',
  },
  {
    image1: <img src={image3}></img>,
    text: '0x8a184ec8412f5..',
    player: 'name 1 ',
    betid: '789654789543315892',
    button: '1.9x',
    bitcoin: <img src={bitcoin}></img>,
    bitcoinText: '0.66667598645',
  },
  {
    image1: <img src={image4}></img>,
    text: '0x8a184ec8412f5..',
    player: 'name 1 ',
    betid: '789654789543315892',
    button: '1.9x',
    bitcoin: <img src={bitcoin}></img>,
    bitcoinText: '0.66667598645',
  },
  {
    image1: <img src={image2}></img>,
    text: '0x8a184ec8412f5..',
    player: 'name 1 ',
    betid: '789654789543315892',
    button: '1.9x',
    bitcoin: <img src={bitcoin}></img>,
    bitcoinText: '0.66667598645',
  },
  {
    image1: <img src={image3}></img>,
    text: '0x8a184ec8412f5..',
    player: 'name 1 ',
    betid: '789654789543315892',
    button: '1.9x',
    bitcoin: <img src={bitcoin}></img>,
    bitcoinText: '0.66667598645',
  },
];
const typo = {
  fontSize: '13px',
  fontWeight: 400,
  color: '#ffffff',
  minWidth: {xs:'0',sm:'0',md:'0',lg:'106px',xl:"142px"},
};
const typoId = {
  fontSize: '13px',
  fontWeight: 400,
  color: '#ffffff',
  minWidth: {lg:'188px',xl:'215px'},
};
export default function CustomizedTables() {
  return (
    <Box >
      <Box sx={{ margin:"40px 8px"}}>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "17px" },
            fontFamily: "Poppins",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
            textTransform: "uppercase",
            margin:"20px 0px"
          }}
        >
          Lobby
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: '20px' }}>
          <Button
            sx={{
              background: '#45D91E',
              borderRadius: '62px',
              color: '#ffffff',
              fontWeight:"700",
              height: '38px',
              width: '123px',
              fontSize:"14px",
              fontStyle:"semi-bold"
            }}
          >
            latest bets
          </Button>
          <Button
            sx={{
              borderRadius: '62px',
              color: '#ffffff',
              border: '1px solid rgba(3, 251, 117, 0.22)',
              height: '38px',
              width: "135px",
              fontSize:"14px",
              fontStyle:"semi-bold"
            }}
          >
            High Rollers
          </Button>
          <Button
            sx={{
              borderRadius: '62px',
              color: '#ffffff',
              border: '1px solid rgba(3, 251, 117, 0.22)',
              height: '38px',
              width: '135px',
              fontSize:"12px",
              fontStyle:"semi-bold"
            }}
          >
            Wager Contest
          </Button>
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ background: 'rgba(43, 45, 80, 0.6)', width: '100%' }}
      >
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead
            sx={{ background: '#14163D', borderBottom: '1px solid #221F25',borderRadius:"8px" }}
          >
            <TableRow sx={{height:"30px"}}>
              <StyledTableCell
                sx={{ padding: '0', paddingLeft: '30px' }}
              >
                Game
              </StyledTableCell>
              <StyledTableCell align='left'>Player</StyledTableCell>
              <StyledTableCell align='left'>Bet ID</StyledTableCell>
              <StyledTableCell align='left'>Payout</StyledTableCell>
              <StyledTableCell align='left'>Profile</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={`key${index}`}>
                <StyledTableCell
                  component='th'
                  scope='row'
                  align='left'
                  sx={{
                    padding: '0',
                    paddingLeft: {
                      xs: '0',
                      sm: '0',
                      md: '0',
                      lg: '30px',
                      xl: '30px',
                    },
                    minWidth:{xs:'0',sm:'0',md:'0',lg:"237px",xl:'237px'}
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {row.image1}
                    <Typography sx={typo}>{row.text}</Typography>
                  </Box>
                </StyledTableCell>
                <StyledTableCell sx={typo} align='left'>
                  {row.player}
                </StyledTableCell>
                <StyledTableCell sx={typoId} align='left'>
                  {row.betid}
                </StyledTableCell>
                <StyledTableCell align='left' sx={{ minWidth:{lg:"109px",xl:'180px'} }}>
                  <Button
                    sx={{
                      background: 'rgba(69, 217, 30, 0.6)',
                      borderRadius: '16px',
                      height: '26px',
                      color: '#ffffff',
                      boxShadow: "0px 0px 4px #AD63F5",
                    }}
                  >
                    {row.button}
                  </Button>
                </StyledTableCell>
                <StyledTableCell align='left'>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {row.bitcoin}
                    <Typography sx={typo}>{row.bitcoinText}</Typography>
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
