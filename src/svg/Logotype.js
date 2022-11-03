import React from "react";
export default function Logotype(props) {
  let h = "170";
  let vbox = "";
  if (props.scroll === true) {
    h = "50";
    vbox = "0, 0 ,150,150";
  } else {
    h = "170";
    vbox = "0,0,150,150";
  }
  return (
    <svg width={"130"} height={h} viewBox={vbox}>
      <text x="0" y="42" className="logoS" fill="DarkGreen">
        SANDANI
      </text>
      <rect x="0" y="50" width="90" height="100" />
      <text x="150" y="55" transform="rotate(90,126,25)" className="logoP">
        PRIM
      </text>
      {/* left */}
      <rect x="4" y="55" width="5" fill="#fff" height="90" />
      <rect x="4" y="55" width="40" fill="#fff" height="5" />
      <rect x="40" y="55" width="5" fill="#fff" height="90" />
      <rect x="4" y="140" width="40" fill="#fff" height="5" />
      {/* right */}
      <rect x="48" y="55" width="5" fill="#fff" height="90" />
      <rect x="48" y="55" width="38" fill="#fff" height="5" />
      <rect x="81" y="55" width="5" fill="#fff" height="90" />
      <rect x="48" y="140" width="38" fill="#fff" height="5" />
      <rect x="48" y="75" width="38" fill="#fff" height="5" />
    </svg>
  );
}
