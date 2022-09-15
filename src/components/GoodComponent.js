import React from 'react'

function goodComponent({good}) {
  return (
    <div>
    {good.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.type} className="image-class" />
          </div>
        );
      })}
    </div>
  )
}

export default goodComponent