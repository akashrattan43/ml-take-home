import React from "react";

function badComponent({bad}) {
  return (
    <div>
      {bad.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.type} className="image-class" />
            <h3>{item.legth}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default badComponent;
