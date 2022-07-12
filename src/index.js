import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Promosi from "views/tombol/Promosi";
// import Informasi from "views/tombol/Informasi";
import Peta1 from "views/tombol/Peta1";
import Peta from "views/tombol/Peta";
import Landing from "views/Landing";
import Profile from "views/Profile";
import Profil from "views/Profil";
import Simwas from "views/Simwas";
import Reformasi from "views/Reformasi";
import KinerjaOpd from "views/grafik/KinerjaOpd";
import Dashboard from "views/admin/Dashboard";
import Slide from "views/Slide";
import PembinaanPengawasan from "views/PembinaanPengawasan";
import PelayananPublik from "views/PelayananPublik";
import Berita from "views/Berita";
import Beritastat from "views/Beritastat";
import BeritaDetail from "views/BeritaDetail";
import PenegakanIntegritas from "views/PenegakanIntegritas";
import LayananKonsultasi from "views/LayananKonsultasi";
import LayananPengaduan from "views/LayananPengaduan";
import LayananWBS from "views/LayananWBS";
import LayananPermohonan from "views/LayananPermohonan";
import Beranda from "views/Beranda";
// import Informasi from "views/Informasi";



// import Pb from "views/Pb";




// multi step
import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";

import Account from "./components/steps/Account";
import Details from "./components/steps/Details";
import Payment from "./components/steps/Payment";
import Final from "./components/steps/Final";





ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/promosi/:id" component={Promosi} />
      {/* <Route path="/informasi/:id" component={Informasi} /> */}
      <Route path="/BeritaDetail/:id" component={BeritaDetail} />
      <Route path="/dashboard" component={Admin} />
      <Route path="/peta1/:id" component={Peta1} />
      <Route path="/peta" component={Peta} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/slide" exact component={Slide} />
      <Route path="/PembinaanPengawasan" exact component={PembinaanPengawasan} />
      <Route path="/Beranda" exact component={Beranda} />
      <Route path="/Berita" exact component={Berita} />
      <Route path="/Beritastat" exact component={Beritastat} />
      <Route path="/Berita/:params" exact component={Berita} />
      {/* <Route path="/BeritaDetail" exact component={BeritaDetail} />
      <Route path="/BeritaDetail/:params" exact component={BeritaDetail} />
     {/* <Route path="/Informasi/:id" exact component={Informasi} />
      <Route path="/Informasi" exact component={Informasi} />
      <Route path="/Informasi/:params" exact component={Informasi} /> */}
      <Route path="/reformasi" exact component={Reformasi} />
      <Route path="/PelayananPublik" exact component={PelayananPublik} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/profil" exact component={Profil} />
      <Route path="/PenegakanIntegritas" exact component={PenegakanIntegritas} />
      <Route path="/LayananKonsultasi" exact component={LayananKonsultasi} />
      <Route path="/LayananPengaduan" exact component={LayananPengaduan} />
      <Route path="/LayananWBS" exact component={LayananWBS} />
      <Route path="/LayananPermohonan" exact component={LayananPermohonan} />
 
     

      
      {/* <Route path="/Pb" exact component={Pb} /> */}
      
      {/* <Route path="/Berita" exact component={BEr} /> */}
      <Route path="/grafik/kinerja-opd" component={KinerjaOpd} />
      <Route path="/" exact component={Simwas} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
