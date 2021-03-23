import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

const About = () => {
  const { name } = useParams();
  const match = useRouteMatch("/about/The Richest Man In Babylon");

  const showBuyButton = match && match.isExact;
  return (
    <>
      <h1>About {name}</h1>
      {showBuyButton && <button>Buy Now</button>}
    </>
  );
};

export default About;
