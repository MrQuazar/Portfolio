import "./Home.scss";
import Navbar from "../components/Navbar/Navbar";
import Section from "../components/Section/Section";
import LHS from "../components/LHS/LHS";
import RHS from "../components/RHS/RHS";
import Content from "../components/Content/Content";

import aboutImage from "../assets/images/intro.png";
import chess2Title from "../assets/images/Chess2Logo.png";
import chess2Img1 from "../assets/images/chess 1.png";
import chess2Img2 from "../assets/images/chess 2.png";
import chess2Bg from "../assets/images/chess2Bg.png";

import kiteSim from "../assets/images/kiteSim.png";
import kiteSimBG from "../assets/images/kitesimbg.png";

import ds5 from "../assets/images/ds5.jpg";
import heuBg from "../assets/images/heuBg.png";

import fadingWaters from "../assets/images/fadingWaters.png";
import fadingWatersTitle from "../assets/images/FWTitle.png";

import rwalker from "../assets/images/rwalker.png";
import rwalkerBg from "../assets/images/rwalkerBg.png";

import iCanFly from "../assets/images/icf.png";
import iCanFlyBg from "../assets/images/icfbg.png";

import divider from "../assets/images/divider.png";
import contactBg from "../assets/images/contactBg.png";
import email from "../assets/images/email.png";
import location from "../assets/images/location_on.png";

export default function Home() {
  return (
    <>
      <div className="portfolio-container">
        <Navbar />

        {/* ABOUT */}
        <Section
          id="about"
          lhs={
            <LHS>
              <Content type="image" value={aboutImage} />
            </LHS>
          }
          rhs={
            <RHS headerText="Hi,">
              <Content
                type="text"
                value="I am Aartem, a game developer specialising in gameplay programming, with hands-on experience in Unity and Unreal Engine across platforms like Android, Windows and PS5."
              />
              <Content
                type="text"
                value="I design, build, and optimise gameplay systems with a strong focus on performance, scalability, and player experience. I take ideas from prototype to polished, production-ready games."
              />
              <Content
                type="text"
                value="My hobbies are music and gaming. I occasionally post guitar covers on Instagram and gameplay clips on Youtube."
              />
            </RHS>
          }
        />

        <img className="section-divider" src={divider} alt="" />

        {/* CHESS 2.0 */}
        <Section
          id="projects"
          bgImage={chess2Bg}
          topContent={<img className="title-img" src={chess2Title} alt="" />}
          lhs={
            <LHS>
              <Content type="image" value={chess2Img1} />
              <Content
                type="text"
                value="Chess 2.0 introduces an additional strategic layer that enhances player decision-making and long-term engagement."
              />
              <Content
                type="text"
                value="You can download the beta version of the game below:"
              />
              <Content
                type="button"
                value="Open Drive"
                url="https://drive.google.com/drive/folders/1kQzsCD7EirS74b3gr9cnErRZW41PuVX-?usp=sharing"
              />
            </LHS>
          }
          rhs={
            <RHS>
              <Content
                type="text"
                value="What happens when you rebalance one of the oldest board games ever created?"
              />
              <Content
                type="text"
                value="Chess 2.0 reimagines classic pieces by introducing new monarchy units, ability power-ups, and targeted nerfs to explore modern balance design."
              />
              <Content type="image" value={chess2Img2} />
            </RHS>
          }
        />

        <img className="section-divider" src={divider} alt="" />

        {/* KITE SIM */}
        <Section
          id="projects"
          bgImage={kiteSimBG}
          topContent={<h1>Kite Simulator</h1>}
          lhs={
            <LHS>
              <Content type="image" value={kiteSim} />
            </LHS>
          }
          rhs={
            <RHS>
              <Content
                type="text"
                value="I built this game using PS5 Devkit to explore the haptic functionalities of the PS5 Controller. I have used touch pad, microphone, trigger resistance,
                vibrations and lightbar in the game to enhance the virtual kite flying experience."
              />
              <Content
                type="text"
                value="During kite combat, players get to choose between multiple methods of input. With beta testing I found that using touchpad swiping during struggle mechanics is the better input approach and can be used in many struggle or spam based scenarios. "
              />
              <Content
                type="text"
                value="I have uploaded the game build and detailed report in the drive link below. This game can also be played on Windows with a PS5 Controller because of my DS5Bridge tuned for Unity. "
              />
              <Content
                type="button"
                value="Open Drive"
                url="https://drive.google.com/drive/folders/1kQzsCD7EirS74b3gr9cnErRZW41PuVX-?usp=sharing"
              />
            </RHS>
          }
        />

        <img className="section-divider" src={divider} alt="" />

        {/* DS5 BRIDGE */}
        <Section
          id="projects"
          bgImage={heuBg}
          topContent={<h1>DS5 Bridge</h1>}
          lhs={
            <LHS>
              <Content type="image" value={ds5} />
            </LHS>
          }
          rhs={
            <RHS>
              <Content
                type="text"
                value="DS5Bridge is a Windows C++ wrapper that exposes advanced PlayStation 5 DualSense features to Unity without requiring a PS5 Devkit."
              />
              <Content
                type="text"
                value="It supports adaptive triggers, rumble motors, lightbar control, player LEDs, microphone LED, and full input polling in a Unity-safe, thread-safe manner."
              />
              <Content
                type="text"
                value="Designed for stability and performance, it uses atomic device updates and cached output states for real-time gameplay use."
              />
              <Content
                type="text"
                value="The GitHub link below has the ready to use DLL with a detailed explanation guide for all fellow developers who wish to explore the PS5 Controller functionalities but do not have access to PS5 Devkit."
              />
              <Content
                type="button"
                value="Open Repository"
                url="https://github.com/MrQuazar/DS5Bridge"
              />
            </RHS>
          }
        />

        <img className="section-divider" src={divider} alt="" />

        {/* FADING WATERS */}
        <Section
          id="projects"
          bgImage={fadingWaters}
          topContent={<h1>Fading Waters</h1>}
          lhs={
            <LHS>
              <Content type="image" value={fadingWatersTitle} />
            </LHS>
          }
          rhs={
            <RHS>
              <Content
                type="text"
                value="Fading Waters is a 3D survival game developed in Unreal Engine using Blueprint-only workflows, aligned with UN SDG 14: Life Below Water."
              />
              <Content
                type="text"
                value="I worked as the sole game developer and producer, implementing core systems such as dynamic zone collapse, survival mechanics, environmental hazards, AI-driven ocean life, and event-based gameplay."
              />
              <Content
                type="text"
                value="The project emphasises modular, scalable Blueprint architecture supported by GitLab version control and Jira-based sprint planning."
              />
              <Content
                type="text"
                value="The GitHub repository has the project file, build and detailed explanation of my role in the MD file."
              />
              <Content
                type="button"
                value="Open Repository"
                url="https://github.com/MrQuazar/DSP5"
              />
            </RHS>
          }
        />

        <img className="section-divider" src={divider} alt="" />

        {/* RHYTHM WALKER */}
        <Section
          id="projects"
          bgImage={rwalkerBg}
          topContent={
            <h1>
              <u>Rhythm Walker</u>
            </h1>
          }
          lhs={
            <LHS>
              <Content type="image" value={rwalker} />
            </LHS>
          }
          rhs={
            <RHS>
              <Content
                type="text"
                value="Rhythm Walker is a music-based arcade game built with a scalable, data-driven architecture for rapid content creation."
              />
              <Content
                type="text"
                value="Its systems are designed so non-programmers can author levels without modifying core code."
              />
              <Content
                type="text"
                value="To play the game or modify it and add a round with your favourite song within 10 minutes, check out the repository below."
              />
              <Content
                type="button"
                value="Open Repository"
                url="https://github.com/MrQuazar/RhythmWalker"
              />
            </RHS>
          }
        />

        <img className="section-divider" src={divider} alt="" />

        {/* I CAN FLY */}
        <Section
          id="projects"
          bgImage={iCanFlyBg}
          topContent={<h1>I Can Fly</h1>}
          lhs={
            <LHS>
              <Content
                type="text"
                value="I Can Fly is an endless runner (flyer) featuring modular spawner systems for obstacles, collectibles, and backgrounds."
              />
              <Content
                type="text"
                value="The architecture focuses on performance optimisation and minimal runtime overhead for mobile platforms."
              />
              <Content
                type="text"
                value="The game was built for android platform and apk can be found in the drive below with game screenshots."
              />
              <Content
                type="button"
                value="Open Drive"
                url="https://drive.google.com/drive/folders/1kQzsCD7EirS74b3gr9cnErRZW41PuVX-?usp=sharing"
              />
            </LHS>
          }
          rhs={
            <RHS>
              <Content type="image" value={iCanFly} />
            </RHS>
          }
        />

        <img className="section-divider" src={divider} alt="" />

        {/* CONTACT */}
        <Section
          id="contact"
          bgImage={contactBg}
          topContent={<h1>Contact Me</h1>}
          lhs={
            <LHS>
              <div className="personal-info-container">
                <div className="personal-info">
                  <Content type="image" value={email} />
                  <Content
                    type="text"
                    value="Email: aartemsingh.uk@gmail.com"
                  />
                </div>
                <div className="personal-info">
                  <Content type="image" value={location} />
                  <Content type="text" value="London, UK" />
                </div>
              </div>
            </LHS>
          }
          rhs={
            <RHS>
              <div className="social-media-handles">
                <Content
                  type="button"
                  value="LinkedIn"
                  url="https://www.linkedin.com/in/aartem-singh/"
                />
                <Content
                  type="button"
                  value="Instagram"
                  url="https://www.instagram.com/guitar_amiable?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                />
                <Content
                  type="button"
                  value="YouTube"
                  url="https://youtube.com/@quazedbyquazar?si=aQYqqE0vvX7KDecb"
                />
                <Content
                  type="button"
                  value="GitHub"
                  url="https://github.com/MrQuazar"
                />
              </div>
            </RHS>
          }
        />
        <p className="portfolio-credit">
          ~ Built and maintained using React by Aartem
        </p>
      </div>
    </>
  );
}
