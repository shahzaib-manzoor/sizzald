// import React from 'react'
import { Box, Container } from "@mui/material";
import Advertisment from "./Advertisment";
import AffiliateReward from "./AffiliateReward";
import EarningCard from "./EarningCard";
import SectionFour from "./SectionFour";
import SectionFiveCard from "./SectionFiveCard";
import SectionTabel from "./SectionTabel";
// import affilateRocket from '../../../../../../../assets/affilateRocket'
// import EarningCard from "./EarningCard";
// import AffiliateReward from "./AffiliateReward";
import DetailedCard from "../../ui-components/DetailCard/index";
import Network from "../../ui-components/Network";
import { useEffect,useState } from "react";
import ApiServices from "../../services/ApiServices";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
const index = () => {
  const dispatch=useDispatch();
  const uid = localStorage.getItem('uid');
  const [reward, setReward] = useState(null);
  const {user}=useSelector((state)=>state.user);
useEffect(() => {

  const token=window.atob(user?.token?user?.token:'');
  // console.log(token);
  if (user) {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/users`, {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization':token
  },
  // body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    // console.log('Success:', data);
    dispatch(setUser({...data?.data?.user,token:user?.token}))
  })
  .catch((error) => {
    console.error('Error:', error);
  });
    // ApiServices.get('auth/getCode/'+ uid).then((res) => {
    //   console.log(res)
    //   setReward(res?.data?.data?.user?.reward)
    // })
  }
}, [

])

  return (
    <Box sx={{ marginLeft: "20px", marginRight: "20px" }}>
      <Advertisment />
      <EarningCard />
      <AffiliateReward reward={reward}/>
      <SectionFour />
      <SectionFiveCard />
      <SectionTabel />
      <DetailedCard />
      <Network />
    </Box>
  );
};

export default index;
