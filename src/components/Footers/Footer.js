import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold"> INSPEKTORAT DAERAH KOTA BANJAR </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              KOTA BANJAR
              </h5>
             {/*  <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div> */}
            </div>
            
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-row items-top mb-6">
                <div className="">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    KONTAK KAMI
                  </span>
                  <h6>
                  Jl. Brigjen M. Isya SH. Km.2 (Komplek Perkantoran Purwaharja). KOTA BANJAR, 46331  
                    </h6>
                  <h6 className="mt-2">
                    Telp. (0265) 2730126 <br></br>
                    
                  </h6>
                </div>
                {/* <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    SOSIAL MEDIA
                  </span>
                  <ul className="list-unstyled">
                    <li className="flex items-center">
                      
                      <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm ml-1"
                      href="https://www.instagram.com/kabupatenbanjarnegara/"
                      target="blank"
                      >
                      <i className="lg:text-blueGray-600 fab fa-instagram text-lg leading-lg mr-1" />
                      Instagram
                      </a>
                    </li>
                    <li className="flex items-center">
                      
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm ml-1"
                        href="https://twitter.com/bna_dinkominfo"
                        target="blank"
                        >
                        <i className="lg:text-blueGray-600 fab fa-twitter text-lg leading-lg mr-1" />
                        Twitter
                      </a>
                    </li>
                    <li className="flex items-center">
                      
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm ml-1"
                        href="https://www.youtube.com/channel/UCTbbEF2tvniXW06O-uzTDyQ"
                        target="blank"
                      >
                      <i className="lg:text-blueGray-600 fab fa-youtube text-lg leading-lg mr-1" />
                      Youtube
                      </a>
                      
                    </li>
                  </ul>
                </div> */}
                
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} INSPEKTORAT DAERAH KOTA BANJAR{" "}
            {/*     <a
                  href="https://www.creative-tim.com?ref=nr-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
             
                </a> */}
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
