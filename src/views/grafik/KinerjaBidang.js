import React, {useEffect, useState} from "react";
import Chart from "chart.js";
import Axios from 'axios';
import {API_URL} from '../../config/config';

// 0: {nama_singkat: 'Dinkes', anggaran: '100', realisasi: '44.4242'}
// 1: {nama_singkat: 'Dinperindag Industri', anggaran: '100', realisasi: '0.0000'}
// 2: {nama_singkat: 'Dinperindag UKM', anggaran: '100', realisasi: '0.0000'}
// 3: {nama_singkat: 'Dinpertan', anggaran: '100', realisasi: '14.5317'}
// 4: {nama_singkat: 'Disnaker', anggaran: '100', realisasi: '1.3762'}
// 5: {nama_singkat: 'Satpol PP', anggaran: '100', realisasi: '0.0000'}

export default function KinerjaBidang({id}) {
    useEffect(() => {
      (async () => {
        let kinerjaOpd = await Axios.get(`${API_URL}/api/list/cv_kinerjabidang`).then(res => res.data.cv_kinerjabidang);
        kinerjaOpd = kinerjaOpd.filter(i => i.periode_id == id).filter(x => x.bidang !== null);
        console.log(kinerjaOpd);
        let config = {
        type: "bar",
        data: {
            labels: kinerjaOpd.map(i => i.bidang),
            datasets: [
            {
                label: "Anggaran",
                backgroundColor: "#ed64a6",
                borderColor: "#ed64a6",
                data: kinerjaOpd.map(i => parseFloat(i.anggaran)),
                fill: false,
                barThickness: 20,
            },
            {
                label: "Realisasi",
                fill: false,
                backgroundColor: "#4c51bf",
                borderColor: "#4c51bf",
                data:  kinerjaOpd.map(i => parseFloat(i.realisasi)),
                barThickness: 20,
            },
            ],
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
            display: false,
            text: "Orders Chart",
            },
            tooltips: {
            mode: "index",
            intersect: false,
            },
            hover: {
            mode: "nearest",
            intersect: true,
            },
            legend: {
            labels: {
                fontColor: "rgba(0,0,0,.4)",
            },
            align: "end",
            position: "bottom",
            },
            scales: {
            xAxes: [
                {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Organisasi Perangkat Daerah",
                },
                gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.3)",
                    zeroLineColor: "rgba(33, 37, 41, 0.3)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                },
                },
            ],
            yAxes: [
                {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Realisasi (%)",
                },
                gridLines: {
                    borderDash: [2],
                    drawBorder: false,
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.2)",
                    zeroLineColor: "rgba(33, 37, 41, 0.15)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                },
                },
            ],
            },
        },
        };
        let ctx = document.getElementById("bar-chart").getContext("2d");
        window.myBar = new Chart(ctx, config);
      })()
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Grafik Tiap Bidang 
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                REALISASI
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="chart-container relative h-350-px w-96">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
