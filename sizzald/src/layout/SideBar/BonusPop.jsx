import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import close from '../../assets/close.svg';
import Modal from '@mui/material/Modal';
import url from '../../constants/urls';
import { Styles } from './TaskPopUpStyle';
import bonusCode from '../../assets/bonusCode.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'mui-image';
import { Container, ListItemText } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: '90vh',
  //   bgcolor: "background.paper",

  //   background: 'rgba(14, 6, 61, 0.3)',
  boxShadow: '1px 1px 10px rgba(255, 1, 62, 0.18)',
  backgroundImage: `url(${bonusCode})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backdropFilter: 'blur(50px)',
  p: 5,
  borderRadius: '8px',
  //   border: "none",
  outline: 'none',
  padding: '20px',
  //   border: "2px solid",

  //   borderImageSource:
  //     "linear-gradient(235.94deg, #FF6B2C 16.21%, #BF4B5A 47.23%, #B102CD 94.02%)",
};

export default function TaskPopUp({ handleOpen, handleClose, open }) {
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              overflowY: 'auto',
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <img
                style={{
                  position: 'absolute',
                  top: '-2.8%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                src={close}
                alt=''
                onClick={handleClose}
              />
            </Box>
            <Box>
              <Box sx={Styles.firstContainer}>
                <Box sx={Styles.secondBoxBonus}>
                  <Typography sx={Styles.firstTypo}>Bonus Code</Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography sx={Styles.amount}>
                Copy your Bonus code here:
              </Typography>
            </Box>
            <Box sx={Styles.copy}>
              <Typography sx={{ color: 'white', paddingLeft: '10px' }}>
                https://bc.co/i-9pp869wk-n/
              </Typography>
              <Button
                sx={{ background: ' rgba(14, 6, 61, 1)' }}
                variant='contained'
              >
                Copy Link
              </Button>
            </Box>
            {/* last box */}

            <Box sx={Styles.lastBox}>
              <Container>
                <Typography sx={Styles.Text}>
                  As with everything that SIZZLD.GAME does, even their bonus
                  <br />
                  codes are uniqueto the online Crypto casino space.
                  <br /> Nowhere else in the Crypto casino world are you going
                  to find bonus codes as a bonus! This is a SIZZLD.
                  <br />
                  GAME one-of-a-kind, designed to give our loyal players an
                  extra boost to enjoy everything on offer at our world-class
                  casino. There are many places to get your hands on a BC.GAME
                  bonus code and here are just a few:
                </Typography>
                <li style={Styles.li}>Special announcements </li>
                <li style={Styles.li2}>
                  Posts in the SIZZLD.GAME forum! Be sure to check it out and
                  <br /> join ourCrypto casino community{' '}
                </li>
                <li style={Styles.li2}>Onsite players chat room</li>
                <li style={Styles.li2}>During campaigns </li>
                <li style={Styles.li2}>Social Media pages and threads </li>
                <li style={Styles.li2}>Affiliate custom-created links </li>

                <Typography sx={Styles.Text2}>
                  <Typography sx={{ paddingTop: '15px' }}>
                    🎁 💩 🎁 💩 🎁 💩 🎁 💩{' '}
                  </Typography>
                  Have fun on-site using our randomly given casino bonus bonus
                  codes to experience even more big win opportunities to fill
                  your wallets. Keep your eyes open and visit our forum and
                  social media platforms regularly to find a SIZZLD.GAME bonus
                  code. Do take note however, that any player who attempts to
                  use a code from multiple accounts will be disqualified and
                  banned from any and all collection of winnings and bonuses.
                </Typography>
              </Container>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
