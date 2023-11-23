import { useEffect, useRef } from "react";
const HiddenInput = ({ focused }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (focused) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [focused]);
  return (
    <input
      type="text"
      ref={inputRef}
      onBlur={() => {
        if (focused) inputRef.current.focus();
      }}
    />
  );
};
export default HiddenInput;
