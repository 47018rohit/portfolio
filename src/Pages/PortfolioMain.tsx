import { useEffect } from "react";
import { startBlobEngine } from "../utils/blobEngine";

const PortfolioMain = () => {
  useEffect(() => {
    const stop = startBlobEngine({
      points: 200,
      baseRadius: 50,
      maxRadius: 300
    });

    return stop;
  }, []);

  return <div className="icon-plus" />;
};

export default PortfolioMain;