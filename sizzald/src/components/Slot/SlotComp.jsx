import { Box, Typography, IconButton } from "@mui/material";
import DetailedCard from "../../ui-components/DetailCard";
import Network from "../../ui-components/Network";
import Carousal from "../Picks/Carousal";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import LotteryInfo from "./LotteryInfo";
// import BalanceSlot from "./BalanceSlot";
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "rgba(76, 175, 80, 1)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

function SlotComp({ sliderTwo, settingCardTwo }) {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            textAlign: "right",
            padding: { xs: "10px 25px", md: "30px 33px" },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: {
                xs: "block",
                lg: "flex",
              },
              alignItem: "center",
              gap: "10px",
              width: "50%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "24px" },
                fontWeight: "700",
                lineHeight: "40px",
                letterSpacing: "1px",
                textAlign: "left",
                color: "white",
                textTransform: "uppercase",
              }}
              component="div"
            >
              Slot
            </Typography>
            <Button
              sx={{
                borderRadius: "50px",
                background: "rgba(255, 255, 255, 0.12)",
                marginRight: "10px",
              }}
              variant="contained"
              endIcon={
                <FormGroup>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AntSwitch
                      defaultChecked
                      inputProps={{ "aria-label": "ant design" }}
                    />
                  </Stack>
                </FormGroup>
              }
            >
              Blocked
            </Button>
          </Box>
          <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
            <Button
              sx={{
                width: "45%",
                borderRadius: "50px",
                background: "rgba(255, 255, 255, 0.12)",
                marginRight: "10px",
              }}
              variant="contained"
              endIcon={<KeyboardArrowDownIcon />}
            >
              SORT BY
            </Button>
            <Button
              sx={{
                width: "45%",
                borderRadius: "50px",
                background: "rgba(255, 255, 255, 0.12)",
                marginRight: "10px",
              }}
              variant="contained"
              endIcon={<KeyboardArrowDownIcon />}
            >
              ALL PROVIDER
            </Button>
          </Box>
        </Box>
        <Carousal sliderTwo={sliderTwo} settingCardTwo={settingCardTwo} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{
              color: "white",
              marginRight: "8px",
              background: "#FFFFFF33",
              height: { sx: "35px", md: "45px" },
              width: { sx: "35px", md: "45px" },
            }}
            onClick={() => sliderTwo?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon
              sx={{ fontSize: { xs: "16px", md: "23px" } }}
            />
          </IconButton>
          <Box sx={{ padding: "0px 10px" }}>
            <Typography
              sx={{ color: "rgba(52, 53, 89, 1)", paddingLeft: "17px" }}
              variant="h6"
            >
              <Typography sx={{ color: "rgba(3, 251, 117, 1)" }} variant="span">
                {" "}
                20
              </Typography>
              / 1050
            </Typography>
            <Box
              sx={{
                background: "rgba(52, 53, 89, 1)",
                borderRadius: "3px",
                height: "5px",
                width: "100px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  borderRadius: "3px",
                  background: "rgba(255, 107, 44, 1)",
                  position: "absolute",
                  height: "5px",
                  top: 0,
                  left: 0,
                  width: "15%",
                }}
              ></Box>
            </Box>
          </Box>
          <IconButton
            sx={{
              color: "white",
              background: "#FFFFFF33",
              height: { sx: "35px", md: "45px" },
              width: { sx: "35px", md: "45px" },
              marginLeft: "8px",
            }}
            onClick={() => sliderTwo?.current?.slickNext()}
          >
            <ArrowRightAltIcon sx={{ fontSize: { xs: "16px", md: "23px" } }} />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <DetailedCard />
      </Box>
      <Network />
      {/* <BalanceSlot /> */}
      {/* <LotteryInfo /> */}
    </Box>
  );
}

export default SlotComp;
