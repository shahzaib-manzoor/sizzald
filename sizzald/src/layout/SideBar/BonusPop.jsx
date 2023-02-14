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
                <Box sx={Styles.containerFirstFlexBonus}>
                  <Typography sx={Styles.Typo}>
                    Wager to unlock BCD How to unlock A
                  </Typography>
                  <Box sx={Styles.flex}>
                    <Typography sx={Styles.aboutVip}>About VIP Level</Typography>
                    <ArrowForwardIosIcon sx={Styles.BonusForwardIcon}/>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
