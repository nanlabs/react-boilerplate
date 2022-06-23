import React, { FC } from 'react';

/**
 * This component is an example to show that the project setup
 * can interpret .less .sass .scss files
 */

import './slicer.scss';
import './cracked.css';

export type CrackedProps = {
  children?: React.ReactNode;
};

const Cracked: FC<CrackedProps> = ({ children }) => (
  <div className="bg-text">
    <div className="slicer-gradient">
      {new Array(40).fill(1).map((_, i) => (
        <div key={`slice-${i + 1}`} className="text">
          {children}
        </div>
      ))}
    </div>
  </div>
);

export default Cracked;
