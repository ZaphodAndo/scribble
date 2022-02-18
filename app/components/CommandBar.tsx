import { useState } from "react";
import { enablePencil, enableRubber } from "~/helpers/canvasHelper";
import PencilIcon from "~/icons/PencilIcon";
import RubberIcon from "~/icons/RubberIcon";
import ColourOption from "./ColourOption";
import PointerOption from "./PointerOption";

const CommandBar = () => {
  const [pencilStroke, setPencilStroke] = useState("#00A2E8");
  const [rubberStroke, setRubberStroke] = useState("#FFA4A4");

  const pencilClick = () => {
    enablePencil();
    setPencilStroke("#00A2E8");
    setRubberStroke("#FFA4A4");
  };

  const rubberClick = () => {
    enableRubber();
    setRubberStroke("#00A2E8");
    setPencilStroke("#FFA4A4");
  };

  return (
    <div className="command-bar">
      <div className="actions">
        <button onClick={pencilClick}>
          <PencilIcon stroke={pencilStroke} />
        </button>
        <button onClick={rubberClick}>
          <RubberIcon stroke={rubberStroke} />
        </button>
      </div>
      <div className="pointers">
        <PointerOption className="small-pointer active-pointer" width={5} />
        <PointerOption className="large-pointer" width={15} />
      </div>
      <div className="colours">
        <ColourOption colour="#000000" className="active-colour" />
        <ColourOption colour="#7F7F7F" />
        <ColourOption colour="#880015" />
        <ColourOption colour="#ED1C24" />
        <ColourOption colour="#FF7F27" />
        <ColourOption colour="#FFF200" />
        <ColourOption colour="#22B14C" />
        <ColourOption colour="#00A2E8" />
        <ColourOption colour="#3F48CC" />
        <ColourOption colour="#A349A4" />
      </div>
    </div>
  );
};

export default CommandBar;
