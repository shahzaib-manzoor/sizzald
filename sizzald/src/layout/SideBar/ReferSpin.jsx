import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import close from '../../assets/close.svg';
import Modal from '@mui/material/Modal';
import spinerBackground from '../../assets/spinerBackground.svg';
import buttonSpin from '../../assets/buttonSpin.svg';
import luckyspin from '../../assets/luckyspin.svg';
import lastSpinBox from '../../assets/lastSpinBox.svg';
import bronze from '../../assets/bronze.svg';
import LuckySpinNow from '../../assets/LuckySpinNow.svg';
import avtarSpin from '../../assets/avtarSpin.svg';
import Image from 'mui-image';
import { IconButton } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Wheel from './Wheel';
import { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { textAlign } from '@mui/system';
import Timer from './Timer';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 530,
  //   bgcolor: "background.paper",

  background: 'rgba(14, 6, 61, 0.3)',
  boxShadow: '1px 1px 10px rgba(255, 1, 62, 0.18)',
  backdropFilter: 'blur(50px)',
  p: 5,
  borderRadius: '8px',
  outline: 'none',
  backgroundImage: `url(${spinerBackground})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  padding: '0px',
};

export default function BasicModal({ handleOpen, handleCloseSpin, open }) {
  const [spin, setSpin] = useState(false);
  const [win, setWin] = useState(null);
  const [timer,setTimer]=useState('00:00:00');

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleCloseSpin}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            <img
              style={{
                position: 'absolute',
                top: '-3%',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
              src={close}
              alt=''
              onClick={handleCloseSpin}
            />
          </Box>
          <Box
            sx={{
              paddingTop: '40px',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            {/* first box */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor:'red',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '85px',
                  backgroundColor: ' rgba(14, 6, 61, 0.3)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: '8px',
                }}
              >
                {/* bronze box */}
                <Box>
                  <Button
                    sx={{
                      width: '88px',
                      height: '71px',
                      backgroundColor: '#5842F4',
                      position: 'relative',
                      marginRight: '10px',
                      marginLeft: '10px',
                    }}
                  >
                    <Box>
                      <Box
                        sx={{ position: 'absolute', top: '-8px', left: '17px' }}
                      >
                        <img src={luckyspin}></img>
                      </Box>
                      <Box sx={{ mt: '20px' }}>
                        <img src={buttonSpin}></img>
                      </Box>
                    </Box>
                  </Button>
                  <Button
                    sx={{
                      width: '88px',
                      height: '71px',
                      backgroundColor: '#5842F4',
                      position: 'relative',
                      marginRight: '10px',
                    }}
                  >
                    <Box>
                      <Box
                        sx={{ position: 'absolute', top: '-8px', left: '17px' }}
                      >
                        <img src={luckyspin}></img>
                      </Box>
                      <Box sx={{ mt: '20px' }}>
                        <img src={buttonSpin}></img>
                      </Box>
                    </Box>
                  </Button>
                  <Button
                    sx={{
                      width: '88px',
                      height: '71px',
                      backgroundColor: '#5842F4',
                      position: 'relative',
                    }}
                  >
                    <Box>
                      <Box
                        sx={{ position: 'absolute', top: '-8px', left: '17px' }}
                      >
                        <img src={luckyspin}></img>
                      </Box>
                      <Box sx={{ mt: '20px' }}>
                        <img src={buttonSpin}></img>
                      </Box>
                    </Box>
                  </Button>
                </Box>
                <Box sx={{ position: 'relative' }}>
                  <img src={bronze}></img>
                  <Typography
                    sx={{
                      position: 'absolute',
                      color: '#A7330E',
                      fontSize: '20px',
                      fontWeight: 600,
                      top: '10px',
                      left: '50px',
                    }}
                  >
                    Bronze
                  </Typography>
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: '53px',
                      fontSize: '15px',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontFamily: 'Poppins',
                    }}
                  >
                    Level 0 or Above
                  </Typography>
                </Box>
                {/* second box bronz */}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '30px',
            }}
          >
            <Wheel spin={spin} setSpin={() => setSpin(false)}  setWin={setWin}/>
          </Box>
          {/* second box banner spin  */}
          <Box>
            <Image src={LuckySpinNow}></Image>
          </Box>
          {/* button Box*/}
      {!spin?( <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '30px',
            }}
          >
            <Button
              sx={{
                background: '#5842F4',
                borderRadius: '50px',
                boxShadow: '0px 4px 4px 0px rgba(5, 5, 5, 0.25)',
                // marginTop: { sx: "10px", lg: "10px", xl: "30px" },
                padding: '5px 10px',
                height: '37px',
                
                
              }}
              onClick={() => setSpin(true)}
              variant='contained'
            >
              Spin now
              <IconButton sx={{ background: 'white', marginLeft: '12px' }}>
                <CallMadeIcon sx={{ fontSize: '10px' }} />
              </IconButton>
            </Button>
          </Box>):(<Timer timer={timer} setTimer={setTimer}/>)}
          {/* last box */}
          <Box
            sx={{
              backgroundImage: `url(${lastSpinBox})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100%',
              height: '100px',
              marginTop: '20px',
              display: 'flex',
            }}
          >
            {/* first box */}
            <Box
              sx={{
                width: '40%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 400,
                  fontFamily: 'Poppins',
                  color: '#ffffff',
                }}
              >
                SPIN BONUS TOTAL
              </Typography>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 700,
                  fontFamily: 'Poppins',
                  color: '#FFA325',
                  textTransform: 'uppercase',
                  textAlign: 'left',
                }}
              >
                $4,601,560.21
              </Typography>
            </Box>
            {/* second Box */}
            <Box sx={{ width: '60%', display: 'flex',gap:3,justifyContent:'center',alignItems:'center' }}>
              {/* first Box */}
              <Box>
                <Image src={avtarSpin}></Image>
              </Box>
              {/* second Box */}
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 400,
                    color: '#ffffff',
                    fontFamily: 'Poppins',
                  }}
                >
                  252MART
                </Typography>
                <Box sx={{ display: 'flex' ,gap:1,alignItems:'center'}}>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: 500,
                      fontFamily: 'Poppins',
                      color: '#969696',
                    }}
                  >
                    WIN
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      color: '#03FB75',
                      fontWeight: 700,
                      fontFamily: 'Poppins',
                      textTransform: 'uppercase',
                    }}
                  >
                   {win?.name?win?.name:0}
                  </Typography>
                  <Typography><ArrowForwardIosIcon sx={{color:'#ffffff',fontSize:'15px'}}/></Typography>
                </Box>
          <Box>
                  <Box sx={{ display: 'flex',gap:1 }}>
                    <Typography
                      sx={{
                        fontSize: '18px',
                        fontWeight: 500,
                        fontFamily: 'Poppins',
                        color: '#969696',
                      }}
                    >
                      IN
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '18px',
                        color: '#FFA325',
                        fontWeight: 700,
                        fontFamily: 'Poppins',
                        textTransform: 'uppercase',
                      }}
                    >
                      23000 shib
                    </Typography>
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
