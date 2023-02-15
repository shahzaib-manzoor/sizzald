
import { Box } from "@mui/material";
import DetailedCard from "../../../ui-components/DetailCard/index";
import Network from "../../../ui-components/Network";
import DavidLuizComp from "./DavidLuizComp";
import AfaComp from "./DavidLuizComp";
export default function DavidLuiz () {

  return (
    <Box sx={{padding:'25px'}}>
    <DavidLuizComp/>
      <Box>
        <DetailedCard />
      </Box>
      <Network />
    </Box>
  );
};


