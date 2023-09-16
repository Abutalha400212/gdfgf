import React from "react";
import Link from "next/link";
import { socialContacts } from "../../utilis/tools";
import { motion } from "framer-motion";
import { styles } from "../../styles/styles";
import { zoomIn } from "@/utilis/motion";
import Image from "next/image";
export default function Hero() {
  return (
    <section
      id="home"
      className="md:flex relative  justify-between items-center md:gap-x-10 mt-28 mb-20 md:-mb-36">
      <div className={`home-sci`}>
        {socialContacts.map((social, i) => (
          <Link
            className="even:animate-slideRight even:opacity-0 first:animate-slideBottom first:opacity-0 last:animate-slideTop last:opacity-0"
            key={i}
            target="_blank"
            href={social.link}>
            {social.icon}
          </Link>
        ))}
      </div>
      <div>
        <h1 className={`head-text animate-slideRight opacity-0`}>
          Hi! I'm <span className="text-[#915EFF]">Abu Talha</span>
        </h1>
        <p className={`hero-sub-text animate-slideRight opacity-0`}>
          I develop full stack, user interfaces and web applications. I consider
          myself as a fully dedicated, dynamic, punctual, efficient, quick
          responder, and also very convivial. Good communication, documentation
          and analytical skills.
        </p>
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/1AHaid7wcWsgg3sK4VECtJgKrIilNP9ut/view?usp=sharing"
          className="animate-slideTop opacity-0 bg-gradient-to-r from-indigo-800  to-pink-600 text-lg font-bold inline-flex w-48 rounded-md h-14 items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-indigo-800 hover:transition-all hover:duration-300  ">
          Get Touch
        </Link>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={zoomIn(0.8, 0.7)}
        className="my-10 md:my-0 border-solid border-4  w-[400px] h-[400px] border-[#c41af3] rounded-[50%] overflow-hidden ">
        <Image
          width={400}
          height={400}
          src={"/profile.png"}
          className="object-cover flex justify-center items-center"
          alt="Abu Talha"
        />
      </motion.div>
    </section>
  );
}
