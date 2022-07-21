import { useEffect, useState } from "react"
import { Form, Button } from 'semantic-ui-react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import InputField from "./InputField"
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import { ChevronRightIcon } from '@heroicons/react/solid'
import emailjs from 'emailjs-com';
import axios from "axios";
import { useHistory } from "react-router";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
// import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  let history = useHistory();
  
    // const [nik, setNik] = useState("");
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [pesan, setPesan] = useState("");
    // const [showAlert, setShowAlert] = React.useState(true);
  
    const sendDataToAPI = () => {
      axios
        .post(
          `https://simwas.inspektorat.banjarkota.go.id/inspektorat_api/api/add/t_laporan_konsultasi`,
          {
            // nik,
            nama,
            email,
            pesan,
          }
        )
        .then(() => {
          // history.push("/LayananKonsultasi");
          // setShowAlert(true);
        });
    };
  



 

  const [values, setValues] = useState({
    
    nama: '',
    email: '',
    pesan: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_su558ih', 'template_2tih8kv', values, 'M-vsME_mY2nCutYd6')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
         
          nama: '',
          email: '',
          pesan: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
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

          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h2 className="mt-4 text-white font-semibold text-4xl">
                    Layanan Pengaduan Masyarakat
                  </h2>
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <section className="relative block py-24 lg:pt-0">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">


                     <center>
                      <h4 className="text-2xl font-semibold">
                        Layanan Konsultasi
                      </h4>

                      <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                        Layanan Konsultasi Masyarakat
                      </p>
                    </center>
                    <div className="lg:mt-48 lg:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5">
      
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
      <center> <h3 className="text-gray-700 mb-7 text-xl font-semibold">Kirimkan Pesan Anda</h3> </center>
        <InputField value={values.nama} handleChange={handleChange} label="Nama Anda" name="nama" type="text" placeholder="John Doe" />
        <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="jphn@example.com" />
        <SelectField handleChange={handleChange} name="opsi" label="Opsi" />
        <TextareaField value={values.pesan} handleChange={handleChange} label="Isi Pesan Kamu disini" name="pesan" />
        <button type="submit" color="green"
        
        // <Button type='submit'  color="green" onClick={sendDataToAPI}>Submit</Button>
          className="mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none"
        >Send <ChevronRightIcon className="w-6 ml-2 float-right" />
        </button>
      </form>
    
    </div>
    
  
                    
 
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


const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>Pesan Anda Berhasil Terkirim!</p>
   
  </div>
  
)

export default ContactForm

