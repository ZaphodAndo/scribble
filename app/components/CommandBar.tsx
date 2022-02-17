import { enablePencil, enableRubber } from "~/helpers/canvasHelper";
import PencilIcon from "~/icons/PencilIcon";
import RubberIcon from "~/icons/RubberIcon";
import ColourOption from "./ColourOption";
import PointerOption from "./PointerOption";

const CommandBar = () => {
  const pencilClick = () => {
    enablePencil();
  };

  const rubberClick = () => {
    enableRubber();
  };

  return (
    <div className="command-bar">
      <div className="actions">
        <button onClick={pencilClick}>
          <PencilIcon />
        </button>
        <button onClick={rubberClick}>
          <RubberIcon />
        </button>
      </div>
      <div className="pointers">
        <PointerOption className="small-pointer" width={5} />
        <PointerOption className="large-pointer" width={15} />
      </div>
      <div className="colours">
        <ColourOption colour="#000000" />
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
