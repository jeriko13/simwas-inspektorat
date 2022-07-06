<nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
  <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
    <Link
      className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
      to="/"
    >
      Beranda
    </Link>

    <Link
      className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
      to="Profil"
    >
      Profil Inspektorat
    </Link>
    <Link
      className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
      to="PembinaanPengawasan"
    >
      Pembinaan Pengawasan
    </Link>
    <Link
      className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
      to="Reformasi"
    >
      Reformasi Birokrasi & Pencegahan Tipikor

     
    </Link>

    <Link
      className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
      to="PenegakanIntegritas"
    >
     
      Penegakan Integritas
    </Link>
    <Link
      className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
      to="PelayananPublic"
    >
     
      Pelayanan Publik
    </Link>

    <button
      className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
      type="button"
      onClick={() => setNavbarOpen(!navbarOpen)}
    >
      <i className="text-white fas fa-bars"></i>
    </button>
  </div>
  <div
    className={
      "lg:flex flex-grow items-center bg-blueGray-600 lg:bg-opacity-0 lg:shadow-none" +
      (navbarOpen ? " block rounded shadow-lg" : " hidden")
    }
    id="example-navbar-warning"
  >
    <ul className="flex flex-col lg:flex-row list-none mr-auto">
      <li className="flex items-center">
      
      </li>
    </ul>
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      {/* <li className="flex items-center">
        <PagesDropdown />
      </li> */}
      <li className="flex items-center">
        {/* <Link
          to="/admin/dashboard"
          className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"}
          >
          Dashboard
          </Link> */}
          {/* <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white" 
          href="/dashboard/realisasi-per-opd/0">
          Dashboard
          </a> */}
      </li>
     {/*  <li className="flex items-center">
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"  
        href="../dbhcht_opd/">
        Rekam Data OPD
        </a>
      </li>
      <li className="flex items-center">
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white" 
        href="../dbhcht_backoffice/">
        Monitoring
        </a>
      </li> */}
     {/*  <li className="flex items-center">
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white" 
        href="http://www.djpk.kemenkeu.go.id/wp-content/uploads/2021/01/PMK-206_PMK.07_2020-Penggunaan-Pemantautan-dan-Evaluasi-DBH-CHT.pdf">
        Peraturan Terkait
        </a>
      </li>
      <li className="flex items-center">
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white" 
        href="../map/">
        Maps DBHCHT
        </a>
      </li> */}

      <>

{/*  <a
className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"

href="#pablo"
ref={btnDropdownRef}
onClick={(e) => {
  e.preventDefault();
  dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
}}
>
Login
</a> */}

<div
ref={popoverDropdownRef}
className={
  (dropdownPopoverShow ? "block " : "hidden ") +
  "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
}
>
<span
  className={
    "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
  }
>
  Login
</span>
{/* <Link
  to="/admin/dashboard"
  className={
    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }
>
  Dashboard
</Link> */}

<a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"  
 href="../dbhcht_opd/" >
  Aplikasi Rekam Data OPD
</a>
<a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
 href="../dbhcht_backoffice/" >
  Aplikasi Monitoring
</a>


{/* <Link
  to="/auth/register"
  className={
    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }
>
  Register
</Link> */}
<div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />


</div>
</>
      {/* <li className="flex items-center">
        <a
          className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          href="https://www.instagram.com/kabupatenbanjarnegara/"
          target="_blank"
        >
          <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
          <span className="lg:hidden inline-block ml-2">Instagram</span>
        </a>
      </li>

      <li className="flex items-center">
        <a
          className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          href="https://twitter.com/bna_dinkominfo"
          target="_blank"
        >
          <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg " />
          <span className="lg:hidden inline-block ml-2">Tweet</span>
        </a>
      </li>

      <li className="flex items-center">
        <a
          className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          href="https://www.youtube.com/channel/UCTbbEF2tvniXW06O-uzTDyQ"
          target="_blank"
        >
          <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-youtube text-lg leading-lg " />
          <span className="lg:hidden inline-block ml-2">Youtube</span>
        </a>
      </li> */}

  

    </ul>
  </div>
</div>
</nav>