import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return  (
<>
<div className="home" id="home" >
    <main>
        <h1>
            TechyStar
        </h1>
        <p>Solution to all your problems</p>
    </main>
  </div>

  <div className="home2">
    <img src={vg} alt="Graphics" />

    <div>
        <p>
            We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
    </div>
  </div>
  <div className="home3" id="about">
    <div>
      <h1>Who we are?</h1>
      <p>
We're your go-to destination for tech solutions, bridging the gap between everyday challenges and digital solutions.

With a focus on nurturing young problem-solvers, our mission drives us to innovate and empower the next generation.

Leading the charge in tech education, we equip children with the confidence and skills to conquer digital obstacles with flair.

Our commitment to excellence fuels our efforts to revolutionize tech engagement for learners of all ages.

Beyond troubleshooting, we foster resilience and creativity, shaping tomorrow's leaders in the digital age.

Join us in redefining education, as we inspire a future where every child thrives in a tech-driven world.
</p>
    </div>
  </div>


<div className="home4" id="brands">
  <div>
    <h1>Brands</h1>
    <article>
      <div style={{
        animationDelay: "0.3s",
      }}>
<AiFillGoogleCircle />
<p>Google</p>
      </div>

      <div style={{
        animationDelay: "0.5s",
      }}>
<AiFillAmazonCircle />
<p>Amazon</p>
      </div>

      <div style={{
        animationDelay: "0.7s",
      }}>
<AiFillYoutube/>
<p>Youtube</p>
      </div>

      <div style={{
        animationDelay: "1s",
      }}>
<AiFillInstagram/>
<p>Instagram</p>
      </div>
    </article>
  </div>
</div>
</>
  );
};

export default Home;
