import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import close from '../../assets/close.svg';
import Modal from '@mui/material/Modal';
import url from '../../constants/urls';
import { Styles } from './TaskPopUpStyle';
import bonusCode from '../../assets/bonusCode.svg';
import dollercoin from '../../assets/dollercoin.svg';
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
                <Box sx={Styles.secondBoxbonus}>
                  <Typography sx={Styles.firstTypo}>Bonus</Typography>
                </Box>
              </Box>
            </Box>

            {/* first flex box */}
            <Container maxWidth='xl'>
              <Box sx={Styles.bonusFlex}>
                <Box>
                  <Typography sx={Styles.sizzld}>What is Sizzld ?</Typography>
                  <Typography sx={Styles.sizzld2}>
                    SIZZLD (SIZZLD Dollar) is a special<br></br> currency
                    launched by SIZZLD.GAME. 1 <br />
                    SIZZLD = 1 USD. You can play games, tip,
                    <br />
                    coindrop & rain with SIZZLD.
                  </Typography>
                  <Typography sx={Styles.sizzld3}>1 SIZZLD = 1 USD</Typography>
                </Box>
                <Box>
                  <img src={dollercoin} style={Styles.img2}></img>
                </Box>
              </Box>
            </Container>
            <Box sx={Styles.unlockBox}>
              <Container>
                <Typography sx={Styles.unlockSizzld}>
                  How to unlock SIZZLD?
                </Typography>
                <Typography sx={Styles.unlockSizzld2}>
                  Locked SIZZLD is obtained through certain bonuses, such as
                  deposit bonus <br></br> and lucky spin. Unlocking SIZZLD is
                  easy! It’s essentially the same as rakeback & will unlock
                  <br /> proportionally through wager.
                </Typography>
                <Box sx={Styles.amountUnlock}>
                  <Typography sx={Styles.sizzld4}>
                    Unlock amount = wager amount * 1% * 20%
                  </Typography>
                </Box>
                <Typography sx={Styles.unlockSizzld3}>
                  How to claim unlocked SIZZLD?
                </Typography>
              </Container>
            </Box>
            <Container>
              <Typography sx={Styles.unlockSizzld5}>
                Can SIZZLD be exchanged to any other currency?
              </Typography>
              <Typography sx={Styles.unlockSizzld6}>
                Sure! The most exciting thing is that the value of 1 SIZZLD is
                bound to
                <br /> the priceof 1 USDT, and you can SIZZLDSwap SIZZLD into
                other currencies at any time.
              </Typography>
              <Typography sx={Styles.unlockSizzld5}>
                What is special about BCD?
              </Typography>
              <Typography sx={Styles.unlockSizzld6}>
                You can enjoy up to 10% annualized rate of return when you store
                <br/> your SIZZLD in Vault Pro. So enjoy collecting SIZZLD!
              </Typography>
            </Container>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
