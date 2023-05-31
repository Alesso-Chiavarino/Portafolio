//react
import { useState, useEffect, useRef, createContext, useContext } from "react";
//app
import App from "../App.jsx";
//components
import CvBtn from "../components/CvBtn/CvBtn.jsx";
import TypeWriter from "../components/TypeWriter/TypeWriter.jsx";
import Certificate from "../components/Certificate/Certificate.jsx";
import MagicCard from "../components/MagicCard/MagicCard.jsx";
import FooterIcons from "../components/FooterIcons/FooterIcons.jsx";
import Form from "../components/Form/Form.jsx";
import ListContainer from "../components/ListContainer/ListContainer.jsx";
import Brand from "../components/Brand/Brand.jsx";
import ProjectsContainer from "../components/ProjectsContainer/ProjectsContainer.jsx";
import Project from "../components/Project/Project.jsx";
import Learning from "../components/Learning/Learning.jsx";
import TecnologiesCarousel from "../components/TecnologiesCarousel/TecnologiesCarousel.jsx";
import Technology from "../components/Technology/Technology.jsx";
import Banner from "../components/Banner/Banner.jsx";
import CertificatesContainer from "../components/CertificatesContainer/CertificatesContainer.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Skills from "../components/Skills/Skills.jsx";
//context
import ObserverProvider, { useObserver } from '../context/ObserverContext.jsx';
import ThemeProvider, { useTheme } from '../context/ThemeContext.jsx';
import { useInView } from "react-intersection-observer";
//scroll
import { Link } from 'react-scroll'
//react icons
import { TbFileCertificate } from 'react-icons/tb'
import { MdWatchLater } from 'react-icons/md'
import { FiDownload } from 'react-icons/fi'
import { RiSendPlaneFill, RiMenu5Fill } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGmail, SiGooglemessages } from 'react-icons/si'
import { BsWhatsapp, BsSunFill, BsMoonFill } from 'react-icons/bs'
import { IoCloseSharp } from 'react-icons/io5'
import { IoMdRocket } from 'react-icons/io'
//data
import { certificates } from "../data/certificates.js";
import { projects } from "../data/projects.js";
import { backTechnologies, frontTechnologies } from "../data/technologies.js";
//react multi carousel
import Carousel from "react-multi-carousel";
//api
import { sendMailsRequest } from "../api/mails/mails.api.js";
//modules
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import { Typewriter } from 'react-simple-typewriter'
import axios from 'axios';
//utils
import { generateToast } from "../utils/toast.utils.js";
//config
import { ENV } from "./env.config.js";

export {
    //app
    App,
    //components
    CvBtn,
    TypeWriter,
    Certificate,
    MagicCard,
    FooterIcons,
    Form,
    ListContainer,
    Brand,
    ProjectsContainer,
    Project,
    Learning,
    TecnologiesCarousel,
    Technology,
    Banner,
    CertificatesContainer,
    Contact,
    Footer,
    Navbar,
    Projects,
    Skills,
    //context
    useObserver,
    useTheme,
    ObserverProvider,
    ThemeProvider,
    //obeserver
    useInView,
    //react
    useEffect,
    useState,
    useRef,
    createContext,
    useContext,
    //scroll
    Link,
    //react icons
    TbFileCertificate,
    MdWatchLater,
    FiDownload,
    RiSendPlaneFill,
    RiMenu5Fill,
    AiFillGithub,
    FaLinkedinIn,
    SiGmail,
    SiGooglemessages,
    BsWhatsapp,
    BsSunFill,
    BsMoonFill,
    IoCloseSharp,
    IoMdRocket,
    //data
    certificates,
    projects,
    backTechnologies,
    frontTechnologies,
    //modules
    Carousel,
    ToastContainer,
    Typewriter,
    axios,
    toast,
    //api
    sendMailsRequest,
    //utils 
    generateToast,
    //config
    ENV,
}