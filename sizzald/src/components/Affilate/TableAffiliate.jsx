import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Bitcoin from "../../assets/bitcoin.png";
import { Box } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: "rgba(48, 50, 85, 0.8)",
    color: theme.palette.common.white,
    bordrRadius: "8px",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  },
  [`&.${tableCellClasses.body}`]: {
    // fontSize: 14,
    // background: "rgba(1, 2, 47, 1)",
    color: "white",

    borderBottom: "none",
    bordrRadius: "8px",
    fontFamily: "Poppins",
    fontsize: "16px",
    fontWeight: "700",
    lineHeight: "22px",
    letterSpacing: "0px",
    textAlign: "left",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:first-child td, &:last-child th": {
    border: 0,
  },
}));

const tableData = [
  { level: "VIP 70", invest: "9217000", currency: "500.0", img: { Bitcoin } },
  { level: "VIP 70", invest: "9217000", currency: "500.0", img: { Bitcoin } },
  { level: "VIP 70", invest: "9217000", currency: "500.0", img: { Bitcoin } },
  { level: "VIP 70", invest: "9217000", currency: "500.0", img: { Bitcoin } },
  { level: "VIP 70", invest: "9217000", currency: "500.0", img: { Bitcoin } },
  { level: "VIP 70", invest: "9217000", currency: "500.0", img: { Bitcoin } },
  { level: "VIP 70", invest: "9217000", currency: "500.0", img: { Bitcoin } },
];

export default function CustomizedTables() {
  return (
    <TableContainer sx={{ borderRadius: "9px" }}>
      <Table
        sx={{ width: "100%", height: "500px" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow sx={{ borderRadius: "20px" }}>
            <StyledTableCell>Invitees’ VIP Level</StyledTableCell>
            <StyledTableCell>Total Wager</StyledTableCell>
            <StyledTableCell>Rewards</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((tableData, index) => (
            <TableRow
              key={index}
              sx={{
                border: "1px solid rgba(26, 28, 67, 0.6)",
                background:
                  index === 3
                    ? "linear-gradient(154deg, rgba(3, 251, 117, 0.4) 41.56%, rgba(20, 22, 61, 0) 105.75%)"
                    : "rgba(1, 2, 47, 1) !important",
              }}
            >
              <StyledTableCell component="th" scope="row">
                {tableData.level}
              </StyledTableCell>
              <StyledTableCell>{tableData.invest}</StyledTableCell>
              <StyledTableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src={tableData.img} alt="" /> {tableData.currency}
                </Box>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
