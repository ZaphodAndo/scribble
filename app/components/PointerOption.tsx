import { useRef } from "react";
import { activeHelper } from "~/helpers/activeHelper";
import { updateCanvasLineWidth } from "~/helpers/canvasHelper";

type PointerOptionProps = {
  className: string;
  width: number;
};

const PointerOption = ({ className, width }: PointerOptionProps) => {
  const buttonEl = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    updateCanvasLineWidth(width);

    if (buttonEl.current) {
      activeHelper(buttonEl.current);
    }
  };

  return (
    <button
      ref={buttonEl}
      className={"pointer " + className}
      onClick={handleClick}
    />
  );
};

export default PointerOption;
