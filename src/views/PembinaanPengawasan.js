import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../config/config";
// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { data } from "autoprefixer";

export default function PembinaanPengawasan() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://drive.google.com/uc?export=view&id=1WeIQcIEB6Tclb8_A7RZ30a1YVjhLWYkF')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>

          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl"></h1>
                  <h2 className="mt-4 text-white font-semibold text-4xl">
                    Pembinaan Dan Pengawasan
                  </h2>
                  <p className="mt-4 text-lg text-blueGray-200"></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="container mx-auto px-4">
              {/*  <div className="flex flex-wrap items-center mt-32"> */}

              <a
                href="berita/2"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/audit-concept-illustration_114360-6397.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>

                    <center>
                      <h4 className="text-xl font-bold text-white">Audit</h4>{" "}
                    </center>
                    {/* <p className="text-md font-light mt-2 text-white">
                       isi
                      </p> */}
                  </blockquote>
                </div>
              </a>

              <a
                href="berita/3"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/reviews-concept-landing-page_52683-18630.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>

                    <center>
                      <h4 className="text-xl font-bold text-white">Reviu</h4>{" "}
                    </center>
                  </blockquote>
                </div>
              </a>

              <a
                href="berita/3"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/team-leader-teamwork-concept_74855-6671.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>

                    <center>
                      <h4 className="text-xl font-bold text-white">
                        Monitoring
                      </h4>{" "}
                    </center>
                  </blockquote>
                </div>
              </a>

              <a
                href="berita/2"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/stock-market-analysis_23-2148598449.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>

                    <center>
                      <h4 className="text-xl font-bold text-white">Evaluasi</h4>{" "}
                    </center>
                  </blockquote>
                </div>
              </a>

              <a
                href="berita/1"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/kpi-task-management-workflow-optimization_335657-3157.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>

                    <center>
                      <h4 className="text-xl font-bold text-white">
                        Kegiatan Pengawasan Lainya
                      </h4>{" "}
                    </center>
                  </blockquote>
                </div>
              </a>

              <a
                href="berita/3"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899173.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>

                    <center>
                      <h4 className="text-xl font-bold text-white">
                        Asistensi
                      </h4>{" "}
                    </center>
                  </blockquote>
                </div>
              </a>

              <a
                href="berita/2"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/consultative-sales-concept-illustration_114360-7388.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>

                    <center>
                      <h4 className="text-xl font-bold text-white">
                        Konsultasi
                      </h4>{" "}
                    </center>
                  </blockquote>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
