import { useState } from "react";
import "./App.css";
import bitimoji from "./assets/bitimoji.png";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="nav">
        <h2 className="logo">Portfolio</h2>

        <button
          className="menu-btn"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </button>

        <ul className={showMenu ? "show" : ""}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="top-section">
        <div>
          <h1
            style={{
              fontFamily: "Showcard Gothic",
              fontSize: "50px",
            }}
          >
            DAYA ARAVIND
          </h1>

          <p
            style={{
              fontFamily: "Times New Roman, serif",
              fontSize: "20px",
            }}
          >
            Learning | Coding | Building
          </p>
        </div>

        <img src={bitimoji} alt="My Image" />
      </div>

      <div className="about" id="about">
        <h2           
         style={{
              fontFamily: "Times New Roman, serif",
              fontSize: "20px",
            }}>About Me</h2>

        <p>
          Hi! I'm a second-year B.Tech Computer Science student passionate
          about coding and technology.
          <br />
          I love learning new skills, building projects, and exploring the
          world of software development.
          <br />
          I'm always eager to grow as a developer and take on new challenges.
        </p>
      </div>

      <div className="projects" id="projects">
        <h2            
        style={{
              fontFamily: "Times New Roman, serif",
              fontSize: "20px",
            }}>Projects</h2>
        <p>Project done in a hackathon: DIGITAL WARDROBE</p>
      </div>

      <div className="skills" id="skills">
        <h2            
        style={{
              fontFamily: "Times New Roman, serif",
              fontSize: "20px",
            }}>Skills</h2>

        <p>
          CSS
          <br />
          JavaScript
          <br />
          Python
          <br />
          C
          <br />
          SQL
          <br />
          JAVA
          <br />
          HTML
        </p>
      </div>

      <div className="contact" id="contact">
        <h2>Contact</h2>

        <form>
          <label htmlFor="name">Name:<br /></label>
          <input type="text" id="name" name="name" />

          <br />
          <br />

          <label htmlFor="email">Email:<br /></label>
          <input type="email" id="email" name="email" />

          <br />
          <br />

          <label htmlFor="message">Message:<br /></label>
          <br />

          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
          ></textarea>

          <br />
          <br />

          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
}

export default App;