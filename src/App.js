import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <svg
          className="circle-container"
          viewBox="2 -2 28 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 270.18deg, #079F9F 2.44%, #F8A63F 36.19%, #F8A63F 66.03%, #FF3E79 96.35% */}
          <linearGradient id="gradient">
            <stop className="stop1" offset="16.44%" />
            <stop className="stop2" offset="36.19%" />
            <stop className="stop3" offset="66.03%" />
            <stop className="stop4" offset="96.5%" />
          </linearGradient>
          <circle
            className="circle-container__background"
            r="16"
            cx="16"
            cy="16"
            shape-rendering="geometricPrecision"
          ></circle>
          <circle
            className="circle-container__progress"
            r="16"
            cx="16"
            cy="16"
            style={{ "stroke-dashoffset": 20 }}
            shape-rendering="geometricPrecision"
          ></circle>
        </svg>

        {/* <svg>

        </svg> */}
      </div>
    </div>
  );
}
