import React from "react";
import AppointmentForm from "../Components/AppointmentForm";
import Navbar from "../Components/Navbar"; 
import Footer from "../Components/Footer";
import BookAppointment from "../Components/BookAppointment";
import "../Styles/BookAppointment.css";

function Appointment() {

    return (
    <>
      <Navbar />
     
  
    
      <AppointmentForm />
      <Footer/>
    </>
  );
}

export default Appointment;
