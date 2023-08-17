// import React from "react";
import chaska from "/chaska-logo.png";

export function Root() {
  return (
    <main className="h-screen w-screen overflow-hidden text-neutral-100 bg-neutral-900 flex flex-col items-center py-40 gap-60">
      {/* <div className="text-6xl font-bold">Chaska-SAT-2</div> */}
      <img src={chaska} alt="Chaska's logo" />
      <button className="text-xl bg-neutral-600 rounded-full w-44 h-11">
        Start mission
      </button>
    </main>
  );
}
