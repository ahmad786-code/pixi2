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
            <span className="block uppercase mt-6 text-3xl text-nowrap">about me section goes here</span>
          </h1>
           

        </div>
        <img src="../../pink-circle.png" alt="rose" className="absolute h-auto w-3/12 object-cover top-30 right-0 -z-10" />
        <img src="../../round.png" alt="rose" className="absolute h-auto w-3/12 object-cover bottom-0 left-0   -z-10" />

      </header>
      <main>

        <section className="py-24 relative">
      
          <div className="flex items-center justify-center">
            <AccordionDemo />
          </div>
          <img src="../../cherry.png" alt="rose" className="absolute h-auto w-3/12 object-cover bottom-30 right-40 -z-10" />
        </section>


        <section className="contact-section relative" id="contact-section">
          <div className="contact-title">
            <h1 className="contact-heading">
              <span className="contact text-4xl font-semibold">CONTACT</span>


            </h1>
          </div>


          <form className="contact">
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
        <img src="../../3d.png" alt="rose" className="absolute h-auto w-3/12 object-cover bottom-20 left-40 -z-10" />
      </main>
      <img src="../../3d.png" alt="rose" className="absolute h-auto w-3/12 object-cover   left-40 -z-10" />
      <footer className="px-12 pt-24 pb-6">
        <div className="flex items-center justify-between">
          <img src="../../logo.png" alt="logo" className="logo-img" />
          <p className="text-white xl:text-2xl text-[1.2rem]">Copyright © 2024 Pixie MGMT</p>
        <div className="flex flex-col items-center mt-[7rem]">
          <h5 className="text-rose-100 text-3xl  font-semibold mb-4">Follow On</h5>
          <a className="text-rose-100 text-2xl" href="">Instagram</a>
          <a className="text-rose-100 text-2xl my-3" href="">Twitter</a>
          <a className="text-rose-100 text-2xl" href="mailto:">Email</a>
        </div>
        </div>
      </footer>

    </>
  );
}
