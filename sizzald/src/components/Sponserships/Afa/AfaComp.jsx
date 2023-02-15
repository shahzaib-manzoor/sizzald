import { Box, Grid, Typography } from "@mui/material";
import { useStyle } from "./afa.style";
export default function AfaComp() {
  return (
    <>
      <Box sx={useStyle.sponserContainer}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box sx={useStyle.banner} />
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Box sx={useStyle.gridimg1} />
            </Grid>
            <Grid item xs={6}>
              <Box sx={useStyle.gridContent}>
                <Typography sx={useStyle.boldText}>
                  Official AFA Sponsor
                </Typography>
                <Typography sx={useStyle.normalText}>
                  {" "}
                  is now an official sponsor of the Argentine Football
                  Association (AFA). This partnership with one of the leading
                  football associations in the world opens up more opportunities
                  for SIZZLD.GAME players and AFA fans alike. Both communities
                  have become connected now more than ever.
                </Typography>
                <Typography sx={useStyle.boldText}>A New Sports Era</Typography>
                <Typography sx={useStyle.normalText}>
                  {" "}
                  The evolution of technology and sports is truly admirable,
                  providing the best benefits to those who believe in the future
                  of both industries. Today, technology works magically to
                  establish the bridge for igaming and sports communities to
                  engage with convenience and confidence. The recent partnership
                  of BC.GAME and AFA is a prime example that both sectors can
                  work together to offer the best possible experience to sports
                  enthusiasts. Indeed, a new sports era is here—merging physical
                  and digital sports.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Box sx={useStyle.gridContent}>
                <Typography sx={useStyle.boldText}>
                  Official AFA Sponsor
                </Typography>
                <Typography sx={useStyle.normalText}>
                  {" "}
                  SIZZLD.GAME is now an official sponsor of the Argentine
                  Football Association (AFA). This partnership with one of the
                  leading football associations in the world opens up more
                  opportunities for SIZZLD.GAME players and AFA fans alike. Both
                  communities have become connected now more than ever.
                </Typography>
                <Typography sx={useStyle.boldText}>A New Sports Era</Typography>
                <Typography sx={useStyle.normalText}>
                  {" "}
                  The evolution of technology and sports is truly admirable,
                  providing the best benefits to those who believe in the future
                  of both industries. Today, technology works magically to
                  establish the bridge for igaming and sports communities to
                  engage with convenience and confidence. The recent partnership
                  of BC.GAME and AFA is a prime example that both sectors can
                  work together to offer the best possible experience to sports
                  enthusiasts. Indeed, a new sports era is here—merging physical
                  and digital sports.
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
