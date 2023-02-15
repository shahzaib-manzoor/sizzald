import { Box, Grid, Typography } from "@mui/material";
import { useStyle } from "./cloud9.style";
export default function Cloud9Comp() {
  return (
    <>
      <Box sx={useStyle.sponserContainer}>
        <Grid container spacing={2}>
         <Grid item xs={12}>
            <Box sx={useStyle.banner} />
          </Grid> 
          <Grid item xs={12}>
            <Typography sx={useStyle.boldText} >
            {'Sponsorships > '} <span style={{...useStyle.boldText,color:"#03FB75"}}>Cloud 9</span>
            </Typography>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Box sx={useStyle.gridimg1} />
            </Grid>
            <Grid item xs={6}>
              <Box sx={useStyle.gridContent}>
                <Typography sx={useStyle.boldText}>
                  Cloud9 Official Partner
                </Typography>
                <Typography sx={useStyle.normalText}>
                  {" "}
                  SIZZLD.GAME has officially become Cloud9’s official partner! A
                  new partnership is formed to offer BC.GAME community the
                  opportunity to be part of the growing iSports community led by
                  Cloud9. On top of holding the title of Crypto Casino of the
                  YEAR, BC.GAME is set to support Cloud9 on all CS:GO related
                  initiatives while continuously aiming for to take home the
                  next iGaming titles. Cloud9 is recognizable because of its
                  participation in the League Championship Series and League of
                  Legends. The organization is home to top-level esports players
                  around the world. It’s such an honor to be connected with a
                  legendary organization while bringing significant change to
                  iGaming and eSports.
                </Typography>
                <Typography sx={useStyle.boldText}>
                  A New Era of eSports and iGaming
                </Typography>
                <Typography sx={useStyle.normalText}>
                  {" "}
                  Have you ever imagined eSports and iGaming colliding and
                  forming one huge podium where both communities can interact
                  with each other? Well, welcome to the new era of eSports and
                  iGaming where crypto casino meets online video games! The new
                  partnership of SIZZLD.GAME and Cloud9 is a great start for a
                  new digital gaming revolution. Technology is evolving, so is
                  iGaming with SIZZLD.GAME !
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Box sx={useStyle.gridContent}>
                <Typography sx={useStyle.boldText}>
                  Cloud9 Official Partner
                </Typography>
                <Typography sx={useStyle.normalText}>
                  {" "}
                  After establishing a relationship with Cloud9, SIZZLD.GAME is
                  set to expand by connecting to other communities in the Sports
                  and Gaming industry. Be part of the growing community. Soon,
                  SIZZLD.GAME , Cloud9, and other major names in digital gaming
                  will come together and offer more utilities to players and
                  fans.
                </Typography>
                <Typography sx={useStyle.boldText}>
                  A New Era of eSports and iGaming
                </Typography>
                <Typography sx={useStyle.normalText}>
                  {" "}
                  With Cloud9 & SIZZLD.GAME partnership, there are huge events
                  in the future where the BC.GAME community can participate in
                  major giveaways like merchandise raffles, Crypto giveaways,
                  and more. As part of the existing relationship, SIZZLD.GAME
                  will be supporting Cloud9 all the way through all its CS:GO
                  events. More activities will be revealed, so make sure that
                  you’re part of growing BC.GAME ecosystem!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={useStyle.gridimg2} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box sx={useStyle.last}>
              <Box sx={useStyle.lastContent}>
                <Box>
                  <Typography sx={useStyle.lastContent.content.welcomeTxt}>
                    WELCOME
                  </Typography>
                  <Typography sx={useStyle.lastContent.content.cryptoTxt}>
                    Crypto Casino Sponsor
                  </Typography>
                </Box>
                <Box>
                  <Box sx={useStyle.lastContent.content.groupImg}>
                    <img src={useStyle.lastContent.content.groupImgSrc} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
