import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import close from '../../assets/close.svg';
import Modal from '@mui/material/Modal';
import spinerBackground from '../../assets/spinerBackground.svg';
import buttonSpin from '../../assets/buttonSpin.svg';
import luckyspin from '../../assets/luckyspin.svg';
import bronze from '../../assets/bronze.svg';
import LuckySpinNow from '../../assets/LuckySpinNow.svg';
import Image from 'mui-image';
import { IconButton } from '@mui/material';
import CallMadeIcon from "@mui/icons-material/CallMade";
import Wheel from './Wheel'
import { useState } from 'react';

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
  const [spin,setSpin]=useState(false)
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
                top: '-5%',
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
                  borderRadius:'8px'

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
            }}
          >
            <Wheel spin={spin} setSpin={()=>setSpin(false)}/>
          </Box>
          {/* second box banner spin  */}
          <Box>
            <Image src={LuckySpinNow}></Image>
          </Box>
          {/* button Box*/}
          <Box sx={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
            <Button
              sx={{
                background: '#5842F4',
                borderRadius: '50px',
                boxShadow: '0px 4px 4px 0px rgba(5, 5, 5, 0.25)',
                // marginTop: { sx: "10px", lg: "10px", xl: "30px" },
                padding: '5px 10px',
                height: '37px',
                
                
              }}
              onClick={()=>setSpin(true)}
              variant='contained'
            >
              Spin now
              <IconButton sx={{ background: 'white', marginLeft: '12px' }}>
                <CallMadeIcon sx={{ fontSize: '10px' }} />
              </IconButton>
            </Button>
          </Box>
          {/* last box */}

          <Box>

          </Box>
        </Box>
      </Modal>
    </div>
  );
}
