import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import close from '../../assets/close.svg';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import ApiServices from '../../services/ApiServices';
import url from '../../constants/urls';

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
  //   border: "none",
  outline: 'none',
  //   border: "2px solid",

  //   borderImageSource:
  //     "linear-gradient(235.94deg, #FF6B2C 16.21%, #BF4B5A 47.23%, #B102CD 94.02%)",
};

export default function BasicModal({ handleOpen, handleCloseSpin, open }) {
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
          <Box sx={{ padding: '38px 0px' }}></Box>
        </Box>
      </Modal>
    </div>
  );
}
