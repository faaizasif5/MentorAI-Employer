import React from "react";
import { EmojiBoxStyle } from "../../layout/muiStyles";

function EmojiBox(props) {
  const { emoji } = props;
  return <img src={emoji} alt="Happy Emoji" style={EmojiBoxStyle} />;
}
export default EmojiBox;
