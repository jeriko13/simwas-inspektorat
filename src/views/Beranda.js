import React, { useState, useEffect } from "react";
import Axios from "axios";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { SearchIcon } from "@heroicons/react/outline";

import Navbar from "components/Navbars/Nav.js";
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
  const [info, setInfo] = useState({
    ikm: "...",
    ipp: "...",
    irb: "...",
    kod: "...",
    sakip: "...",
  });

  useEffect(() => {
    getSwiper();
  }, [0]);

  const getSwiper = () => {
    Axios.get(`${API_URL}/list/cv_swiper`)
      .then((res) => {
        const data = res.data;
        setSwiperContent(data.cv_swiper);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };






  // let { params } = useParams();
  // const [keywords, setKeywords] = useState(params ? params : "");
  const [dataInformasi, setDataInformasi] = useState([]);
  const [startPage, setStartPage] = useState(1);
  const [totalRecordCount, setTotalRecordCount] = useState(0);

  const [dataPromosi, setDataPromosi] = useState([]);

  useEffect(() => {
    checkInfo();
  }, []);

  // useEffect(() => {
  //   checkPromo()
  // }, []);

  const checkInfo = () => {
    try {
      Axios.get(
        `${API_URL}/list/cv_berita?cmd=search&t=cv_berita&x_kategori_berita_id=${keywords}`
      )
        .then((res) => {
          // console.log(res.data);
          const data = res.data;
          setTotalRecordCount(data.totalRecordCount);
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
  console.log(dataInformasi);

  const handlePagination = (btn) => { 
    if (btn == "next") {
      try {
        Axios.get(`${API_URL}/api/list/cv_informasi?start=${startPage + 7}`)
          .then(res => {
            const data = res.data.cv_informasi;
            console.log(data);
            setDataInformasi(data);
            setStartPage(startPage + 7 );

          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        Axios.get(`${API_URL}/api/list/cv_informasi?start=${startPage - 7}`)
          .then(res => {
            const data = res.data.cv_informasi;
            console.log(data);
            setDataInformasi(data);
            setStartPage(startPage - 7 );
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      } catch (error) {
        console.log(error);
      }
    }
   
  }



  return (
    <>
    <br></br>
    <br></br>
    <br></br>
 
  
   
      <Navbar transparent />
      <div className="h-screen">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          className="mb-10 h-screen"
          style={{
            height: "83%",
          }}
        >
          {swiperContent.map((item) => (
            <SwiperSlide>
              <div
                className="w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage: `url(${item.gambar.replace(" ", "%10")})`,
                }}
              >
                <div
                  className="h-full flex flex-col items-center justify-center"
                  style={{ backgroundColor: "rgba(0,0,0,.1)" }}
                >
                  <div
                    className="p-4 w-10/12 mx-auto"
                    style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                  >
                    <h1 className="text-white font-semibold text-xl mx-auto">
                      {item.judul}
                    </h1>
                    <p className="mt-4 text-lg text-blueGray-200">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <br></br>

        <div
          className="w-full flex items-center justify-center"
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
              <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Indeks Kepuasan Masyarakat (IKM)
                </p>
                <p className="font-semibold text-lg text-center">{info.ikm}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-4/12 p-2">
              <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)
                </p>
                <p className="font-semibold text-lg text-center">
                  {info.sakip}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-4/12 p-2">
              <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Indeks Reformasi Birokrasi (IRB)
                </p>
                <p className="font-semibold text-lg text-center">{info.irb}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-4/12 p-2">
              <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Indeks Pelayanan Publik (IPP)
                </p>
                <p className="font-semibold text-lg text-center">{info.ipp}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-4/12 p-2">
              <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Kematangan Organisasi Daerah (KOD)
                </p>
                <p className="font-semibold text-lg text-center">{info.kod}</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <br></br>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-30">
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
                  <h1 className="text-white font-semibold text-5xl">
              
                  Halaman Berita
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    {/* Aplikasi Layanan Promosi, dan Informasi DBHCHT */}
                  </p>
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
            <div className="flex flex-wrap justify-center lg:-mt-50 -mt-20">
              <div className="w-full lg:w-full px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <div className="flex-auto p-5 lg:p-1">
              
              {dataInformasi.map((hasil) => {
                return (

                  
                  <a
                    href={`/beritadetail/${hasil.berita_id}`}
                    className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                    type="button"
                  >
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                      <img
                        alt="..."
                        src={`https://simwas.inspektorat.banjarkota.go.id/web_upload/files/${hasil.gambar}`}
                        className="w-full bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-5"
                      />
                      <br></br>
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
                            <p> {hasil.judul} </p>
                            <p> {hasil.tanggal} </p>
                          </h4>{" "}
                        </center>
                      </blockquote>
                    </div>
                  </a>
                );
              })}

           {/*    {
                  (totalRecordCount - startPage < 6) ? <button onClick={() => handlePagination('prev')} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 flex-auto rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button">Prev</button> : ""
                } */}
            {/*   {
                  (startPage == 1) ? <button onClick={() => handlePagination('next')} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 flex-auto rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button" >Next</button> : ""
                } */}

            </div>
          </div>
          </div></div></div>
        </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="p-8" id="about">
      <Footer />
      </div>
    </>
  );
}
