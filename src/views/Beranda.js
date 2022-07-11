import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { SearchIcon } from '@heroicons/react/outline';

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

import {ROOT_URL, API2_URL} from 'config/config'




SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);






  
export default function Beranda() {
    const [dataPeraturan, setDataPeraturan] = useState([])
    const [counter, setCounter] = useState(null)
    const [keywords, setKeywords] = useState('')
    const [swiperContent, setSwiperContent] = useState([])
    const [info, setInfo] = useState({
        ikm: "...",
        ipp: "...",
        irb: "...",
        kod: "...",
        sakip: "..."
    })
    useEffect(() => {
        (async () => {
            const resPeraturan = await Axios.get(`${API2_URL}/api/list/peraturan_terkait`).then(res => res.data.peraturan_terkait);
            setDataPeraturan(resPeraturan);
            // console.log(dataPeraturan)
        })()
        
        getSwiper();
      
    }, []);



    const getSwiper = () => {
        Axios.get(`${API2_URL}/api/list/swiper`)
        .then(res => {
          const data = res.data;
          setSwiperContent(data.swiper)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
    
    

    return (
        
    <>
        <Navbar />
        <div className="h-screen">
        <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation
                autoplay={{ 
                    delay: 5000,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                loop
                className="mb-10 h-screen"
                style={{
                    height: '83%'
                }}
            >
                {
                    swiperContent.map(item => (
                        <SwiperSlide>
                            <div
                                className="w-full h-full bg-center bg-cover"
                                style={{
                                    backgroundImage: `url(https://satudata.banjarnegarakab.go.id/data_csv/${item.gambar.replace(' ', '%20')})`
                                }}
                            >
                                <div className="h-full flex flex-col items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,.1)'}}>
                                    <div className="p-4 w-10/12 mx-auto" style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                                        <h1 className="text-white font-semibold text-xl">
                                            {item.judul}
                                        </h1>
                                        <p className="mt-4 text-lg text-blueGray-200">
                                            {item.deskripsi}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="w-full flex items-center justify-center" style={{height: '17%'}}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    autoplay={{ 
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop
                    className="mb-10 h-full w-11/12 lg:w-8/12 mx-auto"
                >
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Indeks Kepuasan Masyarakat (IKM)</p>
                            <p className="font-semibold text-lg text-center">{info.ikm}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)</p>
                            <p className="font-semibold text-lg text-center">{info.sakip}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Indeks Reformasi Birokrasi (IRB)</p>
                            <p className="font-semibold text-lg text-center">{info.irb}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Indeks Pelayanan Publik (IPP)</p>
                            <p className="font-semibold text-lg text-center">{info.ipp}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Kematangan Organisasi Daerah (KOD)</p>
                            <p className="font-semibold text-lg text-center">{info.kod}</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
         
        </div>
      
        <br/>
        <br/>
          
        <Footer/>
    </>
    )
    
}

