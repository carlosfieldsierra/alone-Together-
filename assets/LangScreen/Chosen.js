import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import Color from "../../Colors/Color"

function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Circle cx={10} cy={10} r={10} fill={Color.white}/>
      <Path d="M13 10a3 3 0 11-6 0 3 3 0 016 0z" fill={Color.red}/>
    </Svg>
  );
}

export default SvgComponent;
