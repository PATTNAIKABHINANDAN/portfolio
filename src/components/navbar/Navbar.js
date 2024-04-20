import React from 'react';
import { Link } from 'react-scroll';
import Swal from 'sweetalert2';
import Contact from '../contact/Contact'; // Import the Contact component
import { logo } from "../../assets/index"; // Import logo
import { navLinksdata } from "../../constants"; // Import navLinksdata
import './swal.css';
import { createRoot } from 'react-dom/client';

const Navbar = () => {

  const openContactModal = () => {
    Swal.fire({
      title: '',
      html: `<div id="contact-modal"></div>`,
      showCloseButton: true,
      showConfirmButton: false,
      customClass: {
        closeButton: 'contact-close-button',
        popup:'swalPopup'
      },
      didOpen: () => {
        // Render the Contact component inside the SweetAlert modal
        createRoot(document.getElementById('contact-modal')).render(
            <React.StrictMode>
              <Contact />
            </React.StrictMode>
        );
      }
    });
  };

  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
      <div className='h-[80px] w-[80px] border-[5px] rounded-full border-bold'>
        <img src={logo} alt="logo here" className='rounded-full' />
      </div>
      <div>
        <ul className='flex items-center gap-10'>
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'
              key={_id}
            >
              {link === "contacts" ? (
                <button onClick={openContactModal}>{title}</button>
              ) : (
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
