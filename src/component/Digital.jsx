//import React, {useEffect, useState} from 'react'
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const Digital = () => {
  const [clockState, setClockState] = useState();
  
  useEffect (() => {
    setInterval(()=>{
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    },1000);
  }, [] );

  return (
    <div class="container-back-digi">
        <div class="container-DG">
          <h2>{clockState}</h2>
        </div>
    </div>
  );
};

export default Digital;

