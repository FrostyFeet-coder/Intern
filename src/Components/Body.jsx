import React from "react";
import logo1 from "./MotionArtEffect-logo.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import star from "./logo1.png";
import wand from "./wand.png";
import section from "./section.png";
import page from "./page.png";
import support from "./support.png";
import FeatureBox from "./FeatureBox";
import BackgroundEffect from "./Background";
import Navbar from "./Navbar";


function Body() {
    return (
      <div className="relative min-h-screen bg-transparent text-white p-5 text-center overflow-hidden">
        <BackgroundEffect />
        <div className="relative z-10">
          <div className="flex justify-between items-center justify-start">
            <span className="min-w-32 relative flex justify-evenly">
              <img src={logo1} alt="Motion Effect image" />
            </span>
            <button className="bg-white relative mt-14 border-white hover:bg-transparent hover:text-white hover:border-2 border-white text-black font-semibold py-4 px-10 rounded min-w-32">
              Purchase Now
            </button>
          </div>
          <div className="flex mt-12 block ml-50 justify-center items-center flex-col text-start">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold p-4 m-4">
              Attract Your <br />
              Visitors Attention <br /> With Colorful
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
                Motion Art Effect
              </span>
            </h1>
            <p className="mt-8 text-lg max-w-2xl mx-auto">
              Unleash the power of creativity with Motion Art for Elementor -
              your ultimate solution for seamlessly integrating captivating
              animations into your website.
            </p>
            <p className="mt-8 text-gray-400 font-bold text-2xl">
              Trusted by thousands of users around the world
            </p>
            <section className="flex mt-10 justify-evenly">
              <div className="flex flex-row flex-wrap justify-between gap-48">
                <div className="flex max-w-1/2 flex-wrap h-20">
                  <img src={img1} alt="Motion Effect image" />
                  <div className="flex flex-col items-start ml-3 w-1/2 mt-4">
                    <img src={star} alt="Star image" className="w-24 h-1/2" />
                    <article className="mt-2 flex flex-wrap">
                      4.5 score 9 Reviews
                    </article>
                  </div>
                </div>
                <div className="flex">
                  <img src={img2} alt="Motion Effect image" />
                  <div className="flex flex-col items-start ml-3 w-1/2 mt-4">
                    <img src={star} alt="Star image" className="w-32 h-1/2" />
                    <article className="mt-2">4.5 score 9 Reviews</article>
                  </div>
                </div>
                <div className="flex">
                  <img src={img3} alt="Motion Effect image" />
                  <div className="flex flex-col items-start ml-3 w-1/2 mt-4">
                    <img src={star} alt="Star image" className="w-24 h-1/2" />
                    <article className="mt-2">4.5 score 9 Reviews</article>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-32 flex flex-wrap lg:flex-nowrap">
              <div className="w-full lg:w-3/4">
                <h1 className="text-xl sm:text-5xl lg:text-5xl font-bold p-4 m-4 ml-10">
                  Turn Your Cursor Into A Colorful <br /> Magic Wand & Charm
                  Your Visitors
                </h1>
                <p className="text-xl sm:text-xl lg:text-xl p-4 m-4 ml-10">
                  Motion Art for Elementor is a groundbreaking plugin that{" "}
                  <br />
                  empowers you to effortlessly infuse your website with visually
                  stunning motion art elements.
                  <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105 md:py-4 md:px-8 mt-6 mr-5">
                    Purchase From Envato
                  </button>
                </p>
              </div>
              <div className="w-full lg:w-1/4 lg:ml-20 mt-8 lg:mt-0">
                <img src={wand} alt="Magic Wand" className="mx-auto lg:mx-0" />
              </div>
            </section>
            <section>
              <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-white">
                <h1 className="text-3xl font-bold mb-8">
                  Apply On Any Section Or Enable For Whole Page
                </h1>
                <div className="flex space-x-8">
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-h-fit mb-24">
                    {" "}
                    <h2 className="text-xl font-semibold mb-2">
                      Apply On Section
                    </h2>
                    <p>
                      Apply on section is a game-changer, offering an
                      unparalleled way to manage applications directly from your
                      website.
                    </p>
                    <img
                      src={section}
                      alt="Apply On Section"
                      className="w-full mb-4 rounded-lg"
                    />
                  </div>

                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-20">
                    <h2 className="text-xl font-semibold mb-2">
                      Apply On Page
                    </h2>
                    <p>
                      Take your website to new heights with Motion Art for
                      Elementor. Embrace the power of motion and animation.
                    </p>
                    <img
                      src={page}
                      alt="Apply On Page"
                      className="w-full mb-4 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-white">
                <div className="w-full max-w-6xl mx-auto px-8 py-16 sm:px-10 lg:px-12 bg-gradient-to-r from-black to-[#251E35] p-10 rounded-xl shadow-lg mb-12 text-center">
                  <h2 className="text-3xl font-semibold mb-4">
                    Supported by All Popular Browsers
                  </h2>
                  <p className="mb-6">
                    Rest assured, Motion Art is designed to be compatible with
                    all major web browsers.
                  </p>
                  <div className="flex flex-wrap justify-center space-x-0 sm:space-x-8">
                    <div className="text-center mb-4 sm:mb-0">
                      <img
                        src={support}
                        alt="Browser support"
                        className="mx-auto"
                      />
                    </div>
                    <div className="text-center mb-4 sm:mb-0"></div>
                    <div className="text-center mb-4 sm:mb-0"></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="min-h-screen bg-transparent  text-white flex flex-col items-center justify-center p-4">
              <header className="text-center mb-8 px-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  An All-Round Plugin With Powerful Features
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Whether you're a seasoned web designer or just starting out,
                  Motion Art for Elementor seamlessly integrates with the
                  Elementor platform, providing you with a seamless and
                  intuitive experience.
                </p>
              </header>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
                <FeatureBox
                  icon="⚡"
                  title="Light Weight"
                  description="Motion Art for Elementor is designed to be lightweight."
                />
                <FeatureBox
                  icon="👍"
                  title="100% Responsive"
                  description="Create a consistent visual experience across all devices."
                />
                <FeatureBox
                  icon="🌙"
                  title="User Friendly Interface"
                  description="Ensure a smooth experience for both applicants and administrators."
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
}

export default Body;
