import { DEFAULT_MARGIN } from "../Constant/Constant";
import * as COLORS from "../Constant/Colors";

const AppHeading = (props) => (
  <h5
    data-testid="app-heading"
    style={{
      color: COLORS.COLOR_ACCENT,
      marginTop: DEFAULT_MARGIN,
    }}
  >
    {props.title}
  </h5>
);

// Footer text
const FooterText = (props) => (
  <span style={{ color: COLORS.COLOR_GREY }}>{props.text}</span>
);
export { AppHeading, FooterText };
