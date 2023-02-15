import davidbanner from "../../../assets/sponserships/davidbanner.svg";
import davidCelebrete from "../../../assets/sponserships/davidCelebrete.svg";
import davidPlayers from "../../../assets/sponserships/davidPlayers.svg";
import davidWelcome from "../../../assets/sponserships/davidWelcome.svg";
import davidGroup from "../../../assets/sponserships/davidGroup.svg";

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
    ...bgImg(davidbanner),
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
    ...bgImg(davidCelebrete),
  },
  gridimg2: {
    width: "100%",
    height: "100%",
    ...bgImg(davidPlayers),
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
    ...bgImg(davidWelcome),
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
      groupImgSrc:davidGroup,
      groupImg:{
        height:"100%",
        width:'100%',
      }
    },
  },
};
