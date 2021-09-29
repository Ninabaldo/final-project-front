import React from "react";
import *as ReactNavbar from "react-responsive-animate-navbar";
import "./scss/NavBar.scss"



export default function Navbar({setSianedIn}) {

    return (
      <ReactNavbar.ReactNavbar
        color="rgb(25, 25, 25)"
       
        menu={[
          { name: "HOME", to: "/" },
          { name: "Simple colors", to: "/paleteSimpleColors" },
          { name: "Combinations", to: "/paleteCombi"},
          { name: "Ranking", to: "/Ranking" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    );
  }



