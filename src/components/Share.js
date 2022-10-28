import React, { useState } from 'react';
import {SlOptions} from 'react-icons/sl';
import { RWebShare } from 'react-web-share';
import { useEffect } from "react";
import {BiShare, BiCamera} from 'react-icons/bi';

const Share = () => {
    const [share, setShare] = useState(false);
    
    const handleShare = () => {
        setShare(!share);
    }

    const handleShareOut = (e) => {
        if (!e.target.closest('.options-icon')) {
            setShare(false);
        }
    }
    useEffect(() => {
        if(share) {
            document.body.addEventListener('click', handleShareOut);
        }

        return () => {
            document.body.removeEventListener('click', handleShareOut);
        }
    }, [share])

  return (
    <div>
        <RWebShare
        data={{
          text: "See my stage 1 task",
          url: "https://hng-stage1.vercel.app",
          title: "Task 1",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button className="share-icon flex items-center justify-center"><BiShare fontSize='1.3rem'/></button>
      </RWebShare>
      <button className="options-icon flex items-center justify-center" onClick={() => handleShare()}><SlOptions fontSize='1.3rem'/></button>
      {share && <div className="mobile-share">
        <RWebShare
          data={{
            text: "See my stage 1 task",
            url: "https://hng-stage1.vercel.app",
            title: "Task 1",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <button className="share-text">Share</button>
        </RWebShare>
      </div>}
    </div>
  )
}

export default Share;