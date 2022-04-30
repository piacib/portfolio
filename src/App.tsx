import React from "react";
import "./App.css";
import React from "react";
interface BubbleProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
}
const Bubble: React.FC<BubbleProps> = ({ imageSrc, imageAlt, text }) => {
  return (
    <li>
      <div>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <p>text</p>
    </li>
  );
};

function App() {
  return (
    <div className="App">
      <div className="orbit">
        <div className="center-image">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <ul>
          <Bubble imageSrc="" imageAlt="" text="text" />
          <li>
            <div>
              <img src="" alt="" />
            </div>
            <p>Analytics & Reporting</p>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
            <p>Time & Attendance</p>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
            <p>Onboarding</p>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
            <p>HR Information System</p>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
            <p>Leaves & Holidays</p>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
            <p>Exit & Off-boarding</p>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
            <p>Travel & Requisitions</p>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
            <p>Disciplinary</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
