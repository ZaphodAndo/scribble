import PencilIcon from "~/icons/PencilIcon";
import RubberIcon from "~/icons/RubberIcon";

const CommandBar = () => {
  return (
    <div className="command-bar">
      <div className="actions">
        <PencilIcon />
        <RubberIcon />
      </div>
      <div className="pointers">
        <div className="pointer small-pointer"></div>
        <div className="pointer large-pointer"></div>
      </div>
      <div className="colours">
        <div style={{ backgroundColor: "#000000" }}></div>
        <div style={{ backgroundColor: "#7F7F7F" }}></div>
        <div style={{ backgroundColor: "#880015" }}></div>
        <div style={{ backgroundColor: "#ED1C24" }}></div>
        <div style={{ backgroundColor: "#FF7F27" }}></div>
        <div style={{ backgroundColor: "#FFF200" }}></div>
        <div style={{ backgroundColor: "#22B14C" }}></div>
        <div style={{ backgroundColor: "#00A2E8" }}></div>
        <div style={{ backgroundColor: "#3F48CC" }}></div>
        <div style={{ backgroundColor: "#A349A4" }}></div>
      </div>
    </div>
  );
};

export default CommandBar;
