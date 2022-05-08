import { COLOR_GREEN } from "../Constant/Colors";
import { DEFAULT_MARGIN, SMALL_MARGIN } from "../Constant/Constant";

const AppIcon = (props) => {
  return (
    <props.iconName
      style={{
        color: COLOR_GREEN,
        marginLeft: DEFAULT_MARGIN,
        marginBottom: SMALL_MARGIN,
      }}
    />
  );
};

export default AppIcon;
