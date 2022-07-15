import React, { useState, useEffect } from "react";
import Axios from "axios";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { SearchIcon } from "@heroicons/react/outline";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

import { ROOT_URL, API_URL } from "config/config";
import { data } from "autoprefixer";

SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

export default function Beranda() {
  const [dataPeraturan, setDataPeraturan] = useState([]);
  const [counter, setCounter] = useState(null);
  const [keywords, setKeywords] = useState("");
  const [swiperContent, setSwiperContent] = useState([]);
  const [dataInformasi, setDataInformasi] = useState([]);
  const [info, setInfo] = useState({
    ikm: "...",
    ipp: "...",
    irb: "...",
    kod: "...",
    sakip: "...",
  });

  useEffect(() => {
    checkInfo();
  }, []);

  const checkInfo = () => {
    try {
      Axios.get(
        `${API_URL}/list/cv_berita?cmd=search&t=cv_berita&x_kategori_berita_id=${keywords}`
      )
        .then((res) => {
          // console.log(res.data);
          const data = res.data;
          setDataInformasi(data.cv_berita);
          // console.log(data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar transparent />
      <div className="flex mt-20 px-20 w-full   items-center flex-col md:flex-row">
        <div
          className="absolute  w-full h-full bg-center bg-cover "
          style={{
            backgroundImage:
              "url('https://drive.google.com/uc?export=view&id=1WeIQcIEB6Tclb8_A7RZ30a1YVjhLWYkF')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
          <svg
            className="absolute bottom-0 overflow-hidden "
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current "
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <div className="h-screen ">
        <main
          className="flex mt-20 px-20 w-full  p-4  items-center flex-col md:flex-row"
          id="faq"
        >
          <div className="w-full md:w-5/12 mr-auto ml-auto mb-4 "></div>
          <div className="flex-1 ml-2"></div>
        </main>

        <div
          className="w-full flex items-center justify-center"
          style={{ height: "60%" }}
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            className="mb-10 h-full w-10/12 lg:w-10/12 mx-auto"
            // className="mb-10 h-full w-14/14 lg:w-12/12 mx-auto"
          >
            {dataInformasi.map((hasil, key) => (
              <SwiperSlide className="w-4/14 p-2">
                <a
                  href={`/beritadetail/${hasil.berita_id}`}
                  // className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                  type="button"
                >
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      ></svg>
                      <center>
                        <h4 className="text-xl font-bold text-white">
                          {hasil.judul}
                        </h4>
                      </center>
                    </blockquote>
                    <img
                      alt="..."
                      src={hasil.gambar}
                      className="w-full align-middle rounded-t-lg"
                    />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <main
          className="flex mt-20 px-20 w-full  p-4  items-center flex-col md:flex-row"
          id="faq"
        >
          <div className="w-full md:w-4/12 mr-auto ml-auto mb-4 "></div>
          <div className="flex-1 ml-2"></div>
        </main>

        <div
          className="w-full flex items-center  justify-center"
          style={{ height: "15%" }}
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            className="mb-10 h-full w-11/12 lg:w-8/12 mx-auto"
          >
            <SwiperSlide className="w-4/12 p-2">
              <div className="w-11/12 rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Instansi Pemerintah (SAKIP)
                </p>
                <p className="font-semibold text-lg text-center">
                  {info.sakip}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-4/12 p-2">
              <div className="w-11/12 rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Indeks Reformasi Birokrasi (IRB)
                </p>
                <p className="font-semibold text-lg text-center">{info.irb}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-4/12 p-2">
              <div className="w-11/12 rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Indeks Pelayanan Publik (IPP)
                </p>
                <p className="font-semibold text-lg text-center">{info.ipp}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-4/12 p-2">
              <div className="w-11/12 rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Kematangan Organisasi Daerah (KOD)
                </p>
                <p className="font-semibold text-lg text-center">{info.kod}</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Footer />
    </>
  );
}
