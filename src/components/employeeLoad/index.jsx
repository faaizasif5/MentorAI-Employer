import { Box, useTheme, Divider } from "@mui/material";
import ProgressLine from "../LinearProgressGraphs/progressline";
import EmojiBox from "../LinearProgressGraphs/emojiBox";
import Percentage from "../LinearProgressGraphs/percentagecomponent";
import HappyGreen from "../../assets/Emojis/happyGreen.png";
import LoadType from "../LinearProgressGraphs/loadType";
import HappyYellow from "../../assets/Emojis/happyYellow.png";
import HappyBlue from "../../assets/Emojis/happyBlue.png";
import HappyRed from "../../assets/Emojis/happyRed.png";
import { tokens } from "../../theme";
import {
  EmployeeBoxStyle,
  LoadBox,
  ProgressBox,
  ProgressText,
  PieChartTypographyStyle,
} from "../layout/muiStyles";

function EmployeeLoad() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      gridColumn="span 1"
      gridRow="span 1"
      width="597px"
      height="378px"
      backgroundColor={colors.primary[400]}
      sx={EmployeeBoxStyle}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            ...LoadBox,
            background: "rgba(84, 209, 77, 0.10)",
            border: "1px solid #54D14D",
          }}
        >
          <EmojiBox emoji={HappyGreen} />
        </Box>
        <Box sx={ProgressBox}>
          <ProgressLine value={73} color="#54D14D" />
          <Box sx={ProgressText}>
            <LoadType text="Normal" />
            <Percentage perc="%73" />
          </Box>
        </Box>
      </Box>
      <Divider sx={PieChartTypographyStyle} />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            ...LoadBox,
            background: "rgba(75, 126, 239, 0.10)",
            border: "1px solid #4B7EEF",
          }}
        >
          <EmojiBox emoji={HappyBlue} />
        </Box>
        <Box sx={ProgressBox}>
          <ProgressLine value={34} color="#35C2FD" />
          <Box sx={ProgressText}>
            <LoadType text="Normal" />
            <Percentage perc="%34" />
          </Box>
        </Box>
      </Box>
      <Divider sx={PieChartTypographyStyle} />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            ...LoadBox,
            background: "rgba(245, 195, 0, 0.10)",
            border: "1px solid #F5C300",
          }}
        >
          <EmojiBox emoji={HappyYellow} />
        </Box>
        <Box sx={ProgressBox}>
          <ProgressLine value={51} color="#EF7E5D" />
          <Box sx={ProgressText}>
            <LoadType text="Medium" />
            <Percentage perc="%51" />
          </Box>
        </Box>
      </Box>
      <Divider sx={PieChartTypographyStyle} />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            ...LoadBox,
            background: "rgba(252, 69, 69, 0.20)",
            border: "1px solid #FC4545",
          }}
        >
          <EmojiBox emoji={HappyRed} />
        </Box>
        <Box sx={ProgressBox}>
          <ProgressLine value={51} color="#dd0000" />
          <Box sx={ProgressText}>
            <LoadType text="High" />
            <Percentage perc="%51" />
          </Box>
        </Box>
      </Box>
      <Divider sx={PieChartTypographyStyle} />
    </Box>
  );
}

export default EmployeeLoad;
