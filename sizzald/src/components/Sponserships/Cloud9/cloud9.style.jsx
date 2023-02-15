import cloud9banner from "../../../assets/sponserships/cloud9banner.svg";
import cloud9Celebrete from "../../../assets/sponserships/cloud9Celebrete.svg";
import cloud9Players from "../../../assets/sponserships/cloud9Players.svg";
import cloud9Welcome from "../../../assets/sponserships/cloud9Welcome.svg";
import cloud9Group from "../../../assets/sponserships/cloud9Group.svg";

const bgImg = (img) => {
  return {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: {
      xs:'cover',
      lg:'cover',
      xl:'cover'
    },
    borderRadius: '6px'
  };
};
export const useStyle = {
  sponserContainer: {
    color: "white",
  },

  banner: {
    ...bgImg(cloud9banner),
    width: "100%",
    height: "350px",
  },
  gridContent: {
    padding: "10px",
    overflow: "hidden",
  },
  boldText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: {xs:'17px',xl:"22px",lg:"20px"},
    lineHeight: "40px",
    letterSpacing: " 0.01em",
    color: "#FFFFFF",
    textTransform: 'uppercase'

  },
  normalText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: {xs:'13px',xl:"17px",lg:"15px"},
    lineHeight: "26px",
    letterSpacing: " 0.01em",
    color: "#FFFFFF",
  },
  gridimg1: {
    width: "100%",
    height: "100%",
    ...bgImg(cloud9Celebrete),
  },
  gridimg2: {
    width: "100%",
    height: "100%",
    ...bgImg(cloud9Players),
  },
  last: {
    width: "100%",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lastContent: {
    width: "80%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    ...bgImg(cloud9Welcome),
    content: {
      welcomeTxt: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "60px",
        lineHeight: "90px",
        color: "#FFFFFF",
        textAlign: 'center'
      },
      cryptoTxt: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "30px",
        lineHeight: "60px",
        color: "#00FF11",
      },
      groupImgSrc:cloud9Group,
      groupImg:{
        height:"100%",
        width:'100%',
      }
    },
  },
};
