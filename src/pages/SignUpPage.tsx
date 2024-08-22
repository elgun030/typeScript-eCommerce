import React from "react";

// Components
import TopEcommerceSection from "../components/TopEcommerceSection.tsx";
import SignUpSection from "../components/SignUp/SignUpSection.tsx";
import Header from "../components/Header/Header.tsx";
import Footer from '../components/Footer/Footer.tsx'

const SignUpPage: React.FC = () => {
  return (
    <>
    <Header/>
    <main>
      <TopEcommerceSection nameOfPage="Sign up" search="Sign up" />
      <SignUpSection />
    </main>
    <Footer/>
    </>

  );
};

export default SignUpPage;
