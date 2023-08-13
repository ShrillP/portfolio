import React from "react";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <img className="carousel-img" src={item.icon} />
      <div className="carousel-item-text">
        <h2 className="carousel-item-title">{item.title}</h2>
        {item.description}
        <h2 className="carousel-item-title">Tech Stack</h2>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          {item.techStack.map((tag, idx) => (
            <p key={idx} className='text-smallTextColor' style={{background: '#adadad', borderRadius: '10px', padding: '10px', marginRight: '5px', fontSize: '10px', marginTop: '3%'}}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
};