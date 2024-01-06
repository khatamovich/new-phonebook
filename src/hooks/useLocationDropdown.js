import { useState } from "react";

export const useLocationDropdown = () => {
  const [active, setActive] = useState(false);

  const toggle = () => setActive((prev) => !prev);

  const close = () => setActive(false);

  return { active, toggle, close };
};
