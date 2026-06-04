import star1Img from "../images/star4.png";
import star2Img from "../images/star5.png";

export default function Hero() {
  return (
    <>
      <img src={star1Img} alt="Star" id="star1" />
      <img src={star2Img} alt="Star" id="star2" />
      <h1 id="greeting">Hello, I'm Mihyeon!</h1>
      <h2 id="about-section">
        <p id="text1">Front-End Developer</p>
        <p id="text2">Aspiring Full Stack Web Developer</p>
      </h2>
      <div id="description-container">
        <p id="description">
          Full-stack developer graduated from Seneca Polytechnic. I build
          interactive, design-forward web experiences using React, Node.js,
          Express, Python, and SQL/NoSQL databases. Outside of
          code, I express myself through fashion, TouchDesigner, and
          exploring the world.
        </p>
      </div>
    </>
  );
}
