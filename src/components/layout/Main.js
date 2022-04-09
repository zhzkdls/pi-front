import React, { useState } from "react";

import MapContainer from "./MapContainer ";

function Main() {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  return (
    <>
      <MapContainer searchPlace={Place} />
    </>
  );
}

export default Main;
