import React from 'react';

export type NanLabsIconProps = {
  fill?: string;
  width?: string;
  height?: string;
  filter?: string;
};

const NanLabsIcon = (props: NanLabsIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 108 108" {...props}>
      <path d="m54 0c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54zm16.2 14v60.8l-30.3-61.6c4.4-1.5 9.1-2.4 14.1-2.4 5.7 0 11.2 1.1 16.2 3.2zm-59.4 40c0-13.6 6.3-25.8 16.2-33.7v67.4c-9.9-7.9-16.2-20.1-16.2-33.7zm26.9 40v-60.8l30.3 61.6c-4.4 1.5-9.1 2.4-14.1 2.4-5.7 0-11.2-1.1-16.2-3.2zm43.3-6.3v-67.4c9.9 7.9 16.2 20.1 16.2 33.7s-6.4 25.8-16.2 33.7z"></path>
    </svg>
  );
};

export default NanLabsIcon;
