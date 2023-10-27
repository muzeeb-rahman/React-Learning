import React from "react";
import ReactDOM from "react-dom/client";

//JSX - (Transpiled code before it reaches the JS engline) - PARCEL - BABEL
//JSX => Babel transapiled this into React.createElement() => ReactElement (JS object) => HtmlElement(render)

//React Element
const jsxHeading = <h1 className="head">Hello world from React Element!</h1>;

//React Functional Component
const Title = () => (
  <h1 className="head">Hello world from React Functional Component!</h1>
);

const HeadingComponent = () => {
  return (
    <div className="container">
      <div id="reactElement">{jsxHeading}</div>
      <div id="reactFuncComponent">
        <Title />
      </div>
      <p>React Functional Component!</p>
    </div>
  );
};

//
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
