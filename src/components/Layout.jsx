import React from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="stars-wrapper">
        <div className="star"></div>
      </div>
      <section className="w-full h-screen overflow-hidden">
        <motion.span
          initial={{ y: "-30px" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#00ff7f] opacity-80 absolute left-[100px] text-lg font-tags-font top-2"
        >
          <span>&lt;/html&gt;</span>
          <br />
          <span className="ml-8">&lt;body&gt;</span>
        </motion.span>

        <section
          className="overflow-y-auto h-screen scroll-smooth snap-y snap-mandatory"
          id="scroll-container"
        >
          {children}
        </section>

        <motion.span
          initial={{ y: "30px" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#00ff7f] opacity-80 absolute bottom-1 left-[100px] text-lg font-tags-font bottom-tags"
        >
          <span className="ml-8">&lt;/body&gt;</span>
          <br />
          <span>&lt;/html&gt;</span>
        </motion.span>
      </section>
    </>
  );
};

export default Layout;
