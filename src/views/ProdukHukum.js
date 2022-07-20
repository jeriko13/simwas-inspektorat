import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../config/config";
// components
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Pegawai() {
  let { id } = useParams();

  const [dataInformasi, setDataInformasi] = useState([]);

  useEffect(() => {
    checkInfo();
  }, []);

  const checkInfo = () => {
    console.log(id);
    try {
      Axios.get(`${API_URL}/list/t_produk_hukum`)
        .then((res) => {
          const data = res.data;
          setDataInformasi(data.t_produk_hukum);
          console.log(data);
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
      <main className="informasi-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://drive.google.com/uc?export=view&id=1WeIQcIEB6Tclb8_A7RZ30a1YVjhLWYkF')",
              // https://drive.google.com/uc?export=view&id=1WeIQcIEB6Tclb8_A7RZ30a1YVjhLWYkF
              // https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section className="relative py-10 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-2/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={
                          "https://img.freepik.com/free-vector/universal-declaration-human-rights-concept-illustration_114360-7568.jpg?size=626&ext=jpg"
                        }
                        className="w-full align-middle rounded-t-lg"
                      />
                      <div></div>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      Produk Hukum
                    </h3>
                    <br></br>
                  </div>

                  <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead>
                        <tr>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            File
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Link
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Keterangan
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {dataList1.sort((a, b) => parseInt(b.tahun.split('/')[0]) - parseInt(a.tahun.split('/')[0])).map((item, key) =>  */}
                        {dataInformasi.map((item, key) => (
                          <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {item.file}
                            </th>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {item.link}
                            </th>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {item.keterangan}
                            </th>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
