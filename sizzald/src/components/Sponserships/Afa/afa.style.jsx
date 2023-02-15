import afaBanner from "../../../assets/sponserships/afaBanner.svg";
import afaCelebrete from "../../../assets/sponserships/afaCelebrete.svg";
import afaPlayers from "../../../assets/sponserships/afaPlayers.svg";
import afaWelcome from "../../../assets/sponserships/afaWelcome.svg";
import afaGroup from "../../../assets/sponserships/afaGroup.svg";
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
    ...bgImg(afaBanner),
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
    fontSize: {xs:'13px',xl:"15px",lg:"14px"},
    lineHeight: "26px",
    letterSpacing: " 0.01em",
    color: "#FFFFFF",
  },
  gridimg1: {
    width: "100%",
    height: "100%",
    ...bgImg(afaCelebrete),
  },
  gridimg2: {
    width: "100%",
    height: "100%",
    ...bgImg(afaPlayers),
  },
  last: {
    width: "100%",
    height: "450px",
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
    ...bgImg(afaWelcome),
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
      groupImgSrc:afaGroup,
      groupImg:{
        height:"100%",
        width:'100%',
      }
    },
  },
};
