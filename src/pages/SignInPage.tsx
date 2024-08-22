import React from "react";

// Components
import TopEcommerceSection from "../components/TopEcommerceSection.tsx";
import SignInSection from "../components/SignIn/SignInSection.tsx";

import Header from "../components/Header/Header.tsx";
import Footer from '../components/Footer/Footer.tsx'


const SignInPage: React.FC = () => {
  return (
    <>
    <Header/>
    <main >
      <TopEcommerceSection nameOfPage="Login" search="Login" />
      <SignInSection />
    </main>
    <Footer/>
    </>
  );
};

export default SignInPage;
