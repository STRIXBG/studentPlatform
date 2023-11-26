import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import Header from "../components/Header";

function Home() {
  return (
    <div>
      < Header />
      <Footer />
    </div>
  );
}

export default Home;
