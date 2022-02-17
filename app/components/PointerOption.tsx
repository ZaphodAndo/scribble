import { updateCanvasLineWidth } from "~/helpers/canvasHelper";

type PointerOptionProps = {
  className: string;
  width: number;
};

const PointerOption = ({ className, width }: PointerOptionProps) => {
  const handleClick = () => {
    updateCanvasLineWidth(width);
  };

  return <div className={"pointer " + className} onClick={handleClick}></div>;
};

export default PointerOption;
