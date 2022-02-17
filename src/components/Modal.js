import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const backDrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    y: "100vh",
    opacity: [1, 0.7, 0.3, 0],
    transition: { ease: "easeInOut" },
  },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  exit: {
    y: "-100vh",
    opacity: [1, 0.7, 0.3, 0],
    transition: { ease: "easeInOut" },
  },
};

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backDrop"
          variants={backDrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="modal"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Let's go!</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
