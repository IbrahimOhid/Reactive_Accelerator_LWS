import { forwardRef, useImperativeHandle, useRef } from "react";

export const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, ()=> ({
    focus(){
      realInputRef.current.focus()
    }
  }))

  return <input className="border" {...props} ref={ref} />;
});
