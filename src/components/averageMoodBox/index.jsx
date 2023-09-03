import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GoodMood from "../../assets/Emojis/Good mood.png";
import {
  AvgEmployeeMoodBoxStyle,
  MoodContentBoxStyle,
  MoodContentTextStyle,
  MoodContentSubTextStyle,
  MoodEmojiBoxStyle,
  MoodEmojiImgStyle,
  MoodEmojiDescStyle,
} from "../layout/muiStyles";

function AvgEmployeeMoodBox() {
  return (
    <Box gridColumn="span 1" gridRow="span 1" sx={AvgEmployeeMoodBoxStyle}>
      <Box>
        <Box sx={MoodContentBoxStyle}>
          <Typography variant="body1" sx={MoodContentTextStyle}>
            Avg Employee’s Mood
          </Typography>
        </Box>
        <Box sx={{ marginLeft: "70px" }}>
          <Typography variant="body1" sx={MoodContentSubTextStyle}>
            Based on the results
          </Typography>
        </Box>
      </Box>
      <Box sx={MoodEmojiBoxStyle}>
        <img src={GoodMood} alt="Good Mood" style={MoodEmojiImgStyle} />
        <Typography variant="body1" sx={MoodEmojiDescStyle}>
          Good
        </Typography>
      </Box>
    </Box>
  );
}

export default AvgEmployeeMoodBox;
