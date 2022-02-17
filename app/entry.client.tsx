import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import { canvasInit } from "./helpers/canvasHelper";

hydrate(<RemixBrowser />, document);
canvasInit();
