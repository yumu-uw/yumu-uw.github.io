import copyIcon from "./clipboard-document.svg";
import copiedIcon from "./clipboard-document-check.svg";
import { useState } from "react";

export default function CopyImageButton() {
  const [iconSrc, setIconSrc] = useState<string>(copyIcon.src);

  const clickHandler = () => {
    setIconSrc(copiedIcon.src);
    setTimeout(() => {
      setIconSrc(copyIcon.src);
    }, 2000);
  }

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <img src={iconSrc} alt="Copy" className="copy-btn" onClick={clickHandler} />
  )
}