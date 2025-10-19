import { useState } from "react";

export const useFormInfo = () => {
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onchange: handleChangeValue,
  };
};
