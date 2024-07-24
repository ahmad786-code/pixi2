import { AccordionDemo } from "@/components/AccordionDemo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logos">
            <a className="logo-text" href="#">PixieMGMT</a>
          </div>

          <div className="img-logo">
            <img src="../../logo.png" alt="logo" className="logo-img" />
          </div>
          <ul className="links">

            <li>
              <a className="social-btn" href="#">Social</a>
            </li>
            <li>
              <a className="contact-btn" href="#contact-section">Contact</a>
            </li>

          </ul>
          <div className="toggle-btn">
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </nav>


        <div className="text-box">
          <h1 className="heading">

            <span className="heading-1">Pixie MGMT</span>
          </h1>
          <a href="./about.html" className="contact-btn">Read More</a>

        </div>
        <section className="galaxy-wrapper" id="particles">
          <canvas id="galaxy" width="100%" height="100%"></canvas>
        </section>
      </header>

      <main>

      <section className="py-24">
          <div className="flex items-center justify-center">
            <AccordionDemo />
          </div>
         
        </section>


      <section className="contact-section" id="contact-section">
            <div className="contact-title">
                <h1 className="contact-heading">
                    <span className="contact">CONTACT</span>


                </h1>
            </div>
              

            <form className="contact">
                <div className="input-group">
                    <input type="text" placeholder="Name *"/>
                    <input type="text" placeholder="Email *"/>
                </div>
                <div className="input-group">
                    <input type="text" placeholder="Phone"/>
                    <input type="text" placeholder="OnlyFans"/>
                </div>
                <div className="input-group">
                    <input type="text" placeholder="Instagram"/>
                    <input type="text" placeholder="TikTok"/>
                </div>
                <div className="input-group">
                    <input type="text" placeholder="Twitter"/>
                    <input type="text" placeholder="Message"/>
                </div>
                <input type="button" value="Send"/>
            </form>


        </section>

      </main>

      <footer className="footer">
        <p className="footer-text">Copyright © 2024 Pixie MGMT</p>
    </footer>
    </>
  );
}
