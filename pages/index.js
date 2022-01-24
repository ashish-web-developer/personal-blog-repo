import Header from "../components/Header";
import Nav from "../components/Nav";
import { useState } from "react";
import MobileNav from "../components/MobileNav";
export default function Home() {
  return (
    <>
      <MobileNav />
      <Header />
      <Nav />
    </>
  );
}
