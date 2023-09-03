import { Typography } from "@mui/material";
import { PercentageTextStyle } from "../../layout/muiStyles";

function Percentage(props) {
  const { perc } = props;
  return <Typography sx={PercentageTextStyle}>{perc}</Typography>;
}
export default Percentage;
