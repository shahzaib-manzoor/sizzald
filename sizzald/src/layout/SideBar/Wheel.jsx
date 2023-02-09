import { useEffect, useState } from 'react';
import './style.css';
import spinColorWheel from '../../assets/spinColorWheel.svg';
import spinCenter from '../../assets/spinCenter.svg';
import { Box, Button, Typography } from '@mui/material';
const Wheel = ({spin,setSpin}) => {
  const [rotation, setRotation] = useState(0);
  const [prizeIndex, setPrizeIndex] = useState(null);

  const prizes = [
    { name: 'Prize 1', image: '/slice_1.svg', degree: '0' },
    { name: 'Prize 2', image: '/slice_1.svg', degree: '45' },
    { name: 'Prize 3', image: '/slice_1.svg', degree: '90' },
    { name: 'Prize 4', image: '/slice_1.svg', degree: '135' },
    { name: 'Prize 5', image: '/slice_1.svg', degree: '180' },
    { name: 'Prize 6', image: '/slice_1.svg', degree: '225' },
    { name: 'Prize 7', image: '/slice_1.svg', degree: '270' },
    { name: 'Prize 8', image: '/slice_1.svg', degree: '315' },
    { name: 'Prize 9', image: '/slice_1.svg', degree: '360' },
    { name: 'Prize 10', image: '/slice_1.svg', degree: '0' },
    { name: 'Prize 11', image: '/slice_1.svg', degree: '45' },
    { name: 'Prize 12', image: '/slice_1.svg', degree: '90' },
    { name: 'Prize 13', image: '/slice_1.svg', degree: '135' },
    { name: 'Prize 14', image: '/slice_1.svg', degree: '180' },
    { name: 'Prize 15', image: '/slice_1.svg', degree: '225' },
    { name: 'Prize 16', image: '/slice_1.svg', degree: '270' },
    // Add more prizes as needed
  ];

  const handleSpin = () => {
    console.log('Spin')
    // setRotation(0);
    // setPrizeIndex(null);
    // Generate a random number to determine the prize
    const randomIndex = Math.floor(Math.random() * prizes.length);

    // Calculate the rotation angle
    const angle = (360 / prizes.length) * randomIndex;
    console.log(angle);
    setRotation(angle + 1800);

    // Update the rotation state
    let angleC = (360 / prizes.length) * randomIndex + 720 + 360 * 5;
    //angle + 720 + Math.floor(Math.random() * 360)

    // setRotation(angleC);
    setPrizeIndex(randomIndex);
    setSpin()
  };
  console.log(rotation);
  console.log(prizeIndex);

  //(360 / prizes.length) * index

  useEffect(()=>{
if(spin){
    setRotation(0);
    setPrizeIndex(null);
    handleSpin()
}
  },[spin])
//   console.log(prizes[prizeIndex]?.name)
  return (
    <div className='wheel-container'>
        
      <Box
        sx={{
          backgroundImage: `url(${spinColorWheel})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
        className='wheel'
        style={{
          transform: `rotate(${-rotation}deg)`,
          transition: 'transform 5s',
        }}
      >
    
        {prizes.map((prize, index) => (
          <Box
            className="prize" key={index}
            style=
            {{
              transform: `rotate(${(360 / prizes.length) * index}deg)`,
              // height:`${}`
            }}
            >{/* <img src={prize.image} alt={prize.name} /> */}
            {/* <p>{prize.name}</p> */}
            {/* <span >this tet</span> */}
            <Typography sx={{width:'40px',height:'50px',color:'black'}} className='rotateText'>${index+1}</Typography>
          </Box>
        ))}
      </Box>
      <div className='center_spin_div'>
        <img className='center_spin_img' src={spinCenter} />
      </div>
      {prizeIndex !== null && (
        <div className='result'>
          {/* <p>You won:</p> */}
          {/* <p>{prizes[prizeIndex].name}</p> */}
        </div>
      )}
      {/* <Button onClick={handleSpin}>Spink</Button> */}
    </div>
  );
};

export default Wheel;
