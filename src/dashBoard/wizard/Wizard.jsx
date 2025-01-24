import React, { useEffect, useState } from "react";
import "./wizard.scss";

const Wizard = () => {
  const sdlc = [
    { title: "Meeting", status: "Done" },
    { title: "Planning", status: "Done" },
    { title: "Designs", status: "proccessing" },
    { title: "Develop", status: "Pending" },
    { title: "Testing", status: "pending" },
    { title: "SEO", status: "pending" },
    { title: "Production", status: "pending" },
    { title: "Maintains", status: "pending" },
  ];
  const [count,setCount] = useState(0);

  useEffect(() => {
    const doneCount = sdlc.reduce(
      (accumulator, item) => (item.status === "Done" ? accumulator + 1 : accumulator),
      0
    );
    setCount(doneCount); // Update the state with the count
  }, [sdlc]);

  console.log("count",count);
  

  
  return (
    <div className="W-container">
      <div className="wizard">
      <div className="text_container">
        {sdlc.map((item) => (
          <div className={`text_item 
            ${item?.status == "Done" ? "done" : `${item.status == "proccessing" ? "proccessing" : "pending"}`}`}
>{item?.title}</div>
        ))}
      </div>

      <div className="wizard_line">
        <div className="progress" style={{width:`${14.2 * count}%`}}></div>
        {sdlc.map((item) => (
          <div
            title={`${item?.title} ${item?.status}`}
            className={`circle 
            ${item?.status == "Done" ? "done" : `${item.status == "proccessing" ? "proccessing" : "pending"}`}`}
          ></div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Wizard;
