import React from "react";
import { RotatingLines } from "react-loader-spinner";

const PageLoader = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Element: any = RotatingLines;
  return (
    <div className="fixed w-full h-screen bg-white">
      <div className="absolute top-2/4" style={{ left: "45%" }}>
        <Element
          visible={true}
          height="96"
          width="96"
          color="#0A2540"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default PageLoader;
