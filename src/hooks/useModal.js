import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle(isVisible) {
    setIsShowing(isVisible);
  }

  return {
    isShowing,
    toggle,
  };
};

export default useModal;
