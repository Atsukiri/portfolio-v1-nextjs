import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SkillWheel({ name, percent, color = '#FFCC00' }) {
  return (
    <div style={{ width: 120, margin: '1rem' }}>
      <CircularProgressbar
        value={percent}
        text={`${percent}%`}
        styles={buildStyles({
          pathColor: color,
          trailColor: '#004C4C',      // darker teal for contrast
          textColor: '#FFFFFF',       // legible white text
          backgroundColor: 'transparent',
          strokeLinecap: 'round',
          textSize: '16px',
          pathTransitionDuration: 0.5,
        })}
      />

      <div style={{ textAlign: 'center', marginTop: '0.5rem', fontWeight: 500 }}>
        {name}
      </div>
    </div>
  );
}