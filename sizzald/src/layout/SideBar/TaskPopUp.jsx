import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import close from '../../assets/close.svg';
import taskhubSecond from '../../assets/taskhubSecond.svg';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import ApiServices from '../../services/ApiServices';
import url from '../../constants/urls';
import { Styles } from './TaskPopUpStyle';
import { ButtonGroup, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import firstBoxTask from '../../assets/firstBoxTask.svg';

import { borderRadius } from '@mui/system';
import Image from 'mui-image';

export default function TaskPopUp({ handleOpen, handleClose, open }) {
  const [color, setColor] = useState(false);
  const changeHandler = () => {
    setColor(true);
  };
  const changeColorHandler = () => {
    setColor(false);
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={color ? Styles.mainStyle2 : Styles.mainStyle}>
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
                <Box sx={Styles.secondBox}>
                  <Typography sx={Styles.firstTypo}>Task Hub</Typography>
                </Box>
                <Box sx={Styles.taskHub}>
                  <Container sx={Styles.containerFriday}>
                    <Typography sx={Styles.friday}>Friday</Typography>
                    <Typography sx={Styles.friday}>Refresh in</Typography>
                  </Container>
                  <Container sx={Styles.ID10}>
                    <Typography sx={Styles.achieve}>
                      Achieve tasks and get rewards.
                    </Typography>
                    <Typography sx={Styles.achieve}>1D10 : 15 : 26</Typography>
                  </Container>
                </Box>
                <Container>
                  <Box sx={Styles.containerFirstFlex}>
                    <Box>
                      <ButtonGroup sx={Styles.buttonGroup}>
                        <Button
                          sx={color ? Styles.secondButton : Styles.firstButton}
                          onClick={changeColorHandler}
                        >
                          Daily Task
                        </Button>
                        <Button
                          sx={color ? Styles.toggle : Styles.secondButton}
                          onClick={changeHandler}
                        >
                          weekly task
                        </Button>
                      </ButtonGroup>
                    </Box>
                    <Box>
                      <Box sx={Styles.flex}>
                        <Typography sx={Styles.previousTask}>
                          Previous task
                        </Typography>
                        <ArrowForwardIcon sx={Styles.arrow} />
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ mt: '25px' }}>
                    <Box>
                      {color ? (
                        <img src={taskhubSecond} style={Styles.img}></img>
                      ) : (
                        <img src={firstBoxTask} style={Styles.img}></img>
                      )}
                    </Box>
                    <Box>
                      <img
                        src={firstBoxTask}
                        style={color ? Styles.display : Styles.img}
                      ></img>
                    </Box>
                    <Box>
                      <img
                        src={firstBoxTask}
                        style={color ? Styles.display : Styles.img}
                      ></img>
                    </Box>
                    <Box>
                      <img
                        src={firstBoxTask}
                        style={color ? Styles.display : Styles.img}
                      ></img>
                    </Box>
                  </Box>
                </Container>
              </Box>
              <Typography sx={Styles.expires}>Expires in 16:59:56</Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
