import React from "react";
import VapeTracker from "./VapeTracker";

export default function App() {
  return (
    <>
      <VapeTracker wakeUpTime={12} totalAllowed={100} />
    </>
  );
}
