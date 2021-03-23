// import {GetServerSidePropsContext, GetStaticPropsContext} from 'next'
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import { NextPage } from "next";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";

const About: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col px-6 pt-1 bg-gray-200 dark:bg-black-500 dark:bg-dark-200 flex-grow"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 text-base font-medium">
        I am currently pursuing my second Degree (final year) in Web
        Technologies-Development from South Western Illinois College. I have 3+
        years of experience in Web Development and I started kblDesigners, where
        I create Full Stack Web Applications with more intriguing UI/UX Design.
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 dark:bg-black-200 dark:bg-dark-500 flex-grow"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h5 className="my-3 text-xl font-extrabold tracking-wide">
          What I Offer
        </h5>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 dark:bg-black-200 dark:bg-dark-200 rounded-lg lg:col-span-1"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

// export const getServerSideProps = async (
//     context:getServerSidePropsContext
// ) => {
//
//     // Calculation
//     const res = await fetch('http://localhost:3000/api/services')
//     const data = await res.json()
//
//     console.log('SERVER', services)
//
//     return {
//         props:{
//             services: data.services,
//         },
//     }
// }
//
// export const getStaticProps = async (context: getStaticPropsContext) => {

// Calculation
//     const res = await fetch('http://localhost:3000/api/services')
//     const data = await res.json()
//
//     console.log('SERVER', services)
//
//     return {
//         props:{
//             services: data.services,
//         },
//     }
// }
