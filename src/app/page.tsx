import { AccordionDemo } from "@/components/AccordionDemo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="header relative">

        <nav className="navbar">
          <div className="img-logo">
            <img src="../../logo.png" alt="logo" className="logo-img" />
          </div>
          <ul className="links">

            <li>
              <a className="social-btn" href="#">Social</a>
            </li>

          </ul>

        </nav>

        <div className="text-box">
          <h1 className="heading">

            <span className="heading-1">Pixie MGMT</span>
            <span className="block uppercase mt-6 text-xl text-wrap px-4">PIXIE is a top-tier management agency that elevates digital content creators to their highest potential. We provide tailored strategies and expert support to enhance visibility, engagement, and earnings. At PIXIE, we turn creativity into exceptional success in the digital space.</span>
          </h1>
          <a href="#contact-section" className="social-btn">Contact Us</a>
          <img src="../../flow3.png" alt="rose" className="absolute h-auto w-3/12 object-cover -z-10 header-left-follower" />

        </div>
        <img src="../../flow1.png" alt="rose" className="absolute h-auto w-2/12 object-cover -z-10 header-right-follower" />



      </header>
      <main>

        <section className="py-48 relative ">
          <img src="../../flow1.png" alt="rose" className="absolute h-auto w-2/12 object-cover -z-10 acordion-right-follower" />

          <div className="flex items-center justify-center">
            <AccordionDemo />
          </div>
          <img src="../../flow3.png" alt="rose" className="absolute h-auto w-2/12 object-cover -z-10 acordion-left-follower" />
        </section>


        <section className="contact-section relative" id="contact-section">
          <img src="../../flow1.png" alt="rose" className="absolute h-auto w-2/12 object-cover -z-10 contact-right-follower" />
          <div className="contact-title">
            <h1 className="contact-heading">
              <span className="contact text-4xl font-semibold">CONTACT</span>


            </h1>
          </div>


          <form className="contact" >
            <div className="input-group">
              <input type="text" placeholder="Name *" />
              <input type="text" placeholder="Email *" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="OnlyFans" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Instagram" />
              <input type="text" placeholder="TikTok" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Twitter" />
              <input type="text" placeholder="Message" />
            </div>
            <input type="button" value="Send" />
          </form>
          <img src="../../flow3.png" alt="rose" className="absolute h-auto w-2/12 object-cover -z-10 contact-left-follower" />

        </section>

      </main>
     
      <footer className=" px-48  text-center pt-24 pb-6 relative">
        <img src="../../flow3.png" alt="rose" className="absolute h-auto w-2/12 object-cover -z-10 footer-left-follower" />
        <div className="flex justify-between gap-28">
          <div className="flex flex-col">
            <h2 className="text-white text-4xl font-semibold text-nowrap">PIXIE MGMT</h2>
            <p className="text-white xl:text-2xl text-[1.2rem]">Copyright © 2024 Pixie MGMT</p>
          </div>
          <div className="flex flex-col">
          <h5 className="text-rose-100 text-3xl  font-semibold mb-4 text-nowrap">Follow On</h5>
            <a className="text-rose-100 text-2xl" href="">Instagram</a>
            <a className="text-rose-100 text-2xl my-3" href="">Twitter</a>
            <a className="text-rose-100 text-2xl" href="mailto:">Email</a>
          </div>
        </div>
        <img src="../../flow1.png" alt="rose" className="absolute h-auto w-2/12 object-cover -z-10 footer-right-follower" />
      </footer>

    </>
  );
}
