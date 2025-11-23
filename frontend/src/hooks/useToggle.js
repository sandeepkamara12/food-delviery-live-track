import { useState } from "react";

export const useToggle = () => {
const [toggle, setToggleState] = useState(false);
const setToggle = () => {
  setToggleState(!toggle);
}
  return {
    toggle, setToggle
  };
};
