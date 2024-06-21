// declarations.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'react-headroom' {
  import * as React from 'react';

  interface HeadroomProps {
    disable?: boolean;
    downTolerance?: number;
    upTolerance?: number;
    wrapperStyle?: React.CSSProperties;
    parent?: () => HTMLElement;
    pinStart?: number;
    calcHeightOnResize?: boolean;
    onPin?: () => void;
    onUnpin?: () => void;
    onUnfix?: () => void;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
  }

  const Headroom: React.FC<HeadroomProps>;

  export default Headroom;
}
