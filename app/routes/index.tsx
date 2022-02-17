import { LinksFunction } from "remix";
import CommandBar from "~/components/CommandBar";

import styles from "~/styles/root.css";
import commandBarStyle from "~/styles/commandBar.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: commandBarStyle,
    },
  ];
};

export default function Index() {
  return (
    <div>
      <canvas id="canvas" />
      <CommandBar />
    </div>
  );
}
