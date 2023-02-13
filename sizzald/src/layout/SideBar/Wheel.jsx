import { useEffect, useState } from 'react';
import './style.css';
import colorWheel from '../../assets/colorWheel.svg';
import goldBase from '../../assets/goldBase.svg';
import spinwheel from '../../assets/spinwheel.svg';
import { Box, Button, Typography } from '@mui/material';
const Wheel = ({ spin, setSpin,setWin }) => {
  const [rotation, setRotation] = useState(0);
  const [prizeIndex, setPrizeIndex] = useState(null);

  const prizes = [
    { name: '2554', image: '/slice_1.svg', degree: '0' },
    { name: '0.525', image: '/slice_1.svg', degree: '45' },
    { name: '2535', image: '/slice_1.svg', degree: '90' },
    { name: '254.5', image: '/slice_1.svg', degree: '135' },
    { name: '244.55', image: '/slice_1.svg', degree: '180' },
    { name: '244', image: '/slice_1.svg', degree: '225' },
    { name: '2.0', image: '/slice_1.svg', degree: '270' },
    { name: '53.5', image: '/slice_1.svg', degree: '315' },
    { name: '536.4', image: '/slice_1.svg', degree: '360' },
    { name: '23', image: '/slice_1.svg', degree: '0' },
    { name: '2.35', image: '/slice_1.svg', degree: '45' },
    { name: '2.3', image: '/slice_1.svg', degree: '90' },
    { name: '13.56', image: '/slice_1.svg', degree: '135' },
    { name: '53.56', image: '/slice_1.svg', degree: '180' },
    { name: '23.5', image: '/slice_1.svg', degree: '225' },
    { name: '200', image: '/slice_1.svg', degree: '270' },
    // Add more prizes as needed
  ];

  const handleSpin = () => {
    console.log('Spin');
    // setRotation(0);
    // setPrizeIndex(null);
    // Generate a random number to determine the prize
    const randomIndex = Math.floor(Math.random() * prizes.length);

    // Calculate the rotation angle
    const angle = (360 / prizes.length) * randomIndex;
    setRotation(angle + 360 * 5);
    // Update the rotation state
    let angleC = (360 / prizes.length) * randomIndex + 720 + 360 * 5;
    //angle + 720 + Math.floor(Math.random() * 360)

    // setRotation(angleC);
    setPrizeIndex(randomIndex);
    setSpin();
    setWin(prizes[randomIndex])
  };
  console.log(rotation);
  console.log(prizeIndex);
  //(360 / prizes.length) * index

  useEffect(() => {
    if (spin) {
    setRotation(0);
    setPrizeIndex(null);
      handleSpin();
}
  }, [spin]);
//   console.log(prizes[prizeIndex]?.name)
  return (
    <div className='wheel-container'>
      <Box
        sx={{
          backgroundImage: `url(${goldBase})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '358px',
          height: '314px',
          transform: 'rotate(-90deg)',
          padding: '16px',
        }}
      >
        <Box sx={{
         
            // color: 'white',
            width: '301px',
            transform:'rotate(90deg)',
            height:'312px'
        }}>

        
      <Box
        sx={{

           backgroundImage: `url(${colorWheel})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
           backgroundRepeat: 'no-repeat',
        }}
        className='wheel'
        style={{
          transform: `rotate(${-rotation}deg)`,
          transition: 'transform 5s',
        }}
      >
        {prizes.map((prize, index) => (
          <Box
              className='prize'
              key={index}
              style={{
              transform: `rotate(${(360 / prizes.length) * index}deg)`,
              // height:`${}`
            }}
            >
              {/* <img src={prize.image} alt={prize.name} /> */}
            {/* <p>{prize.name}</p> */}
            {/* <span >this tet</span> */}
              <Typography
                sx={{
                  width: '18px',
                  height: '113px',
                  color: 'black',
                //   padding: '24px',
                  textOrientation: 'mixed',
                  writingMode:'vertical-lr'
                }}
                className='rotateText'
              >
             
                {prize.name}
              </Typography>
          </Box>
        ))}
      </Box>
        </Box>
      <div className='center_spin_div'>
          <img className='center_spin_img' src={spinwheel} />
      </div>
      {prizeIndex !== null && (
        <div className='result'>
          {/* <p>You won:</p> */}
          {/* <p>{prizes[prizeIndex].name}</p> */}
        </div>
      )}
      </Box>
      {/* <Button onClick={handleSpin}>Spink</Button> */}
    </div>
  );
};

export default Wheel;
