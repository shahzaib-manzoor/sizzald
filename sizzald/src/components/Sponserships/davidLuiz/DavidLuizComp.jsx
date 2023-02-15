import { Box, Grid, Typography } from "@mui/material";
import { useStyle } from "./davidluiz.style";
export default function DavidLuizComp() {
  return (
    <>
      <Box sx={useStyle.sponserContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={useStyle.banner} />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={useStyle.boldText} >
            {'Sponsorships > '} <span style={{...useStyle.boldText,color:"#03FB75"}}>David Luiz</span>
            </Typography>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Box sx={useStyle.gridimg1} />
            </Grid>
            <Grid item xs={6}>
              <Box sx={useStyle.gridContent}>
                <Typography sx={useStyle.boldText}>
                  BC.GAME’s Official Brand Ambassador
                </Typography>
                <Typography sx={useStyle.normalText}>
                  {" "}
                  David Luiz, a Brazilian football player, is now BC.GAME’s
                  official brand ambassador. This ambassadorship will bring the
                  Brazilian football community and BC.GAME players closer
                  together while also opening up several exciting opportunities
                  for both communities to participate in the future. As one of
                  the best defenders of his generation, David Luiz’s flourishing
                  football career is built on the list of hardships he’s endured
                  and the achievements he’s obtained as a result of his hard
                  work. BC.GAME is honored to be associated with a highly
                  skilled and dedicated athlete like Luiz—one of the renowned
                  players in the Brazilian football community.
                </Typography>
                <Typography sx={useStyle.boldText}>
                  A Brand New Era Awaits
                </Typography>
                <Typography sx={useStyle.normalText}>
                  {" "}
                  The advancements in technology and sports have significantly
                  reshaped both industries in the best way possible. These
                  advancements have brought various advantages enjoyed by
                  members of their corresponding communities. Such technologies
                  have also helped connect different communities while having
                  one goal in mind. BC.GAME and Luiz will work together to bring
                  better experiences for both the digital and physical sports
                  communities. Such a collaboration introduces a new era for
                  physical and digital sports, which is something that BC.GAME
                  players and sports fans should definitely watch out for in the
                  future.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Box sx={useStyle.gridContent}>
                <Typography sx={useStyle.boldText}>The Next Chapter</Typography>
                <Typography sx={useStyle.normalText}>
                  {" "}
                  The BC.GAME community awaits more incredible things as it
                  opens a new chapter. Our partnership with Luiz is just one of
                  the many excellent opportunities that will help us reach out
                  to more audiences and penetrate different markets worldwide.
                  For the BC.GAME community, this serves as the chance to be
                  part of the next advancements that will bring further
                  betterment to the sports and tech industry.
                </Typography>
                <Typography sx={useStyle.boldText}>
                  What can the fans expect?
                </Typography>
                <Typography sx={useStyle.normalText}>
                  {" "}
                  Luiz’s fans can expect BC.GAME’s unwavering support for the
                  Brazilian footballer in the upcoming months. Several exciting
                  opportunities await both Brazilian football fans and the
                  BC.GAME community throughout the ambassadorship. Luiz will be
                  joining BC.GAME’s official social media activities and
                  engagements, giving BC.GAME players the chance to engage with
                  the Brazilian football star.
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
