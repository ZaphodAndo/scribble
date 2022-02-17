import { updateCanvasColour } from "~/helpers/canvasHelper";

type ColourOptionProps = {
  colour: string;
};

const ColourOption = ({ colour }: ColourOptionProps) => {
  const handleClick = () => {
    updateCanvasColour(colour);
  };

  return <div style={{ backgroundColor: colour }} onClick={handleClick}></div>;
};

export default ColourOption;
