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
        <h1 className="text-6xl text-white">Pixie MGMT</h1>
     
          {/* <a href="#contact-section" className="social-btn">Contact Us</a> */}
          

        </div>
        <div className=" mt-48  flex  flex-col items-center justify-center">
            <span className="text-white mb-12 text-6xl">01</span>
            <h1 className="text-white my-4 text-3xl text-center">Top-tier management agency elevating digital content creators</h1>
            <span className="text-white  my-12 text-6xl">02</span>
            <h1 className="text-white my-4 text-3xl text-center">Tailored strategies and expert support to enhance visibility, engagement, and earnings</h1>
            <span className="text-white  my-12 text-6xl ">03</span>
            <h1 className="text-white my-4 text-3xl text-center">Transforming creativity into exceptional success in the digital space</h1>


          </div>
     

      </header>
      <main>

        <section className=" relative pt-24">
          <h2 className="text-white text-center  text-4xl font-semibold uppercase">services</h2>
           

          <div className="flex items-center justify-center">
            <AccordionDemo />
          </div>
         
        </section>


        <section className="contact-section relative" id="contact-section">
         
          <div className="contact-title">
            <h1 className="contact-heading">
              <h2 className="contact text-4xl font-semibold uppercase ">Reach new heights</h2>


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
          

        </section>

      </main>

      <footer className=" px-48  text-center pt-24 pb-6 relative">
    
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
      
      </footer>

    </>
  );
}
