export const activeHelper = (button: HTMLButtonElement) => {
  let activeElement;
  let activeClass;

  if (button.classList.contains("colour-option")) {
    activeElement = document.querySelector<HTMLButtonElement>(".active-colour");
    activeClass = "active-colour";
  } else {
    activeElement =
      document.querySelector<HTMLButtonElement>(".active-pointer");
    activeClass = "active-pointer";
  }

  if (activeElement) {
    activeElement.classList.remove(activeClass);
  }

  button.classList.add(activeClass);
};
