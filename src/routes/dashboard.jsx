import React from "react";

export default function Dashboard() {
  return (
    // create a div that will generate a white box for dashboard components
    <div className="flex flex-row">
      <div className="flex  border-cyan-700 border">
        <div className="flex border-red-700 border">
          <div className="flex border justify-start border-slate-800">
            <h1>Left zone</h1>
            <div className="flex border justify-end border-slate-800">
              <h1>right zone</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
