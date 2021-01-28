import React from "react";
import { RiderAndPos } from "./App";
import s from "./Rider.module.scss";

type RiderType = { data: RiderAndPos; index: number };

const RiderWithRef = React.forwardRef<HTMLLIElement, RiderType>(
  ({ data, index }, ref) => {
    return (
      <li
        className={`${s.riderOuter} js-rider`}
        style={{ zIndex: index }}
        ref={ref}
      >
        <img
          src={`/riders/${data.fileName}`}
          alt={data.name}
          style={{ transform: `rotate(${data.rotation}deg)` }}
        />
      </li>
    );
  }
);

export default RiderWithRef;
