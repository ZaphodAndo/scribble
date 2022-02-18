import { useRef } from "react";
import { activeHelper } from "~/helpers/activeHelper";
import { updateCanvasColour } from "~/helpers/canvasHelper";

type ColourOptionProps = {
  className?: string;
  colour: string;
};

const ColourOption = ({ className, colour }: ColourOptionProps) => {
  const buttonEl = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    updateCanvasColour(colour);

    if (buttonEl.current) {
      activeHelper(buttonEl.current);
    }
  };

  return (
    <button
      ref={buttonEl}
      className={"colour-option " + className}
      style={{ backgroundColor: colour }}
      onClick={handleClick}
    />
  );
};

export default ColourOption;
