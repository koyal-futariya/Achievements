// components/Common/BackgroundAnimation.js (NEW FILE)
"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/Common/BackgroundAnimation.module.css"; // New CSS module for animation

const BackgroundAnimation = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only render the animation on larger screens or after a significant delay on mobile
    // This assumes desktop screens are > 768px. Adjust as needed.
    const handleLoad = () => {
      if (window.innerWidth > 768) {
        setShouldRender(true);
      } else {
        // For mobile, delay rendering significantly to not block LCP
        const timer = setTimeout(() => {
          setShouldRender(true);
        }, 3000); // Wait 3 seconds before rendering on mobile

        return () => clearTimeout(timer);
      }
    };

    // If already loaded, render immediately. Otherwise, wait for load.
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!shouldRender) {
    return null; // Don't render anything until conditions are met
  }

  return (
    <div className={styles.backgroundAnimation}>
      <div className={styles.starsec}></div>
      <div className={styles.starthird}></div>
      <div className={styles.starfourth}></div>
      <div className={styles.starfifth}></div>
    </div>
  );
};

export default BackgroundAnimation;
