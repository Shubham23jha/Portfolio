import React, { useState } from 'react';

function Buttons() {
  const [popupContent, setPopupContent] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = (content) => {
    setPopupContent(content);
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000); // Hides the popup after 3 seconds (3000 milliseconds)
  };

  return (
    <div className=" flex justify-between absolute h-2/3 w-full pl-2 pr-2 pt-5 pb-5 bottom-8  lg:w-2/3 lg:right-5 lg:justify-around">
      <button
        className="button"
        role="button"
        onClick={() => openPopup('Software Developer')}
      >
        01
      </button>
      <button
        className="button"
        role="button"
        onClick={() => openPopup('Mern Stack Developer')}
      >
        02
      </button>
  

      {isPopupVisible && (
        <div className=" flex w-screen justify-center animate-ping-3s bottom-8  absolute  pl-5 pr-5 pt-5 pb-5">
          <h1 className='text-4xl font-semibold text-white'>{popupContent}</h1>
        </div>
      )}
    </div>
  );
}

export default Buttons;
