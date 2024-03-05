//react
import { useState, useEffect, useRef, createContext, useContext } from "react";
//app
import App from "../App.tsx";
//components
import CvBtn from "../components/CvBtn/CvBtn.tsx";
import TypeWriter from "../components/TypeWriter/TypeWriter.tsx";
import Certificate from "../components/Certificate/Certificate.tsx";
import MagicCard from "../components/MagicCard/MagicCard.tsx";
import FooterIcons from "../components/FooterIcons/FooterIcons.tsx";
import Form from "../components/Form/Form.tsx";
import ListContainer from "../components/ListContainer/ListContainer.tsx";
import Brand from "../components/Brand/Brand.tsx";
import ProjectsContainer from "../components/ProjectsContainer/ProjectsContainer.tsx";
import Project from "../components/Project/Project.tsx";
import Learning from "../components/Learning/Learning.tsx";
import TechnologiesCarousel from "../components/TechnologiesCarousel/TechnologiesCarousel.tsx";
import Technology from "../components/Technology/Technology.tsx";
import Banner from "../components/Banner/Banner.tsx";
import CertificatesContainer from "../components/CertificatesContainer/CertificatesContainer.tsx";
import Contact from "../components/Contact/Contact.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Navbar from "../components/Navbar/Navbar.tsx";
import Projects from "../components/Projects/Projects.tsx";
import { Experiences } from "../components/Experiences/Experiences.tsx";
import { Experience } from "@/components/Experience/Experience.tsx";
import Skills from "../components/Skills/Skills.tsx";
//context
import ObserverProvider, { useObserver } from '../context/ObserverContext.tsx';
import ThemeProvider, { useTheme } from '../context/ThemeContext.tsx';
import { useInView } from "react-intersection-observer";
//scroll
import { Link } from 'react-scroll'
//react icons
import { LiaCertificateSolid } from 'react-icons/lia'
import { MdWatchLater } from 'react-icons/md'
import { MdWork } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi'
import { RiSendPlaneFill, RiMenu5Fill } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGmail, SiGooglemessages } from 'react-icons/si'
import { BsWhatsapp, BsSunFill, BsMoonFill } from 'react-icons/bs'
import { IoCloseSharp } from 'react-icons/io5'
import { IoMdRocket } from 'react-icons/io'
import { HiAcademicCap } from 'react-icons/hi2';
//data
import { certificates } from "../data/certificates.ts";
import { projects } from "../data/projects.ts";
import { backTechnologies, frontTechnologies } from "../data/technologies.ts";
import { experiences } from "@/data/experiences.ts";
//react multi carousel
import Carousel from "react-multi-carousel";
//api
import { sendMailsRequest } from "../services/mails/mails.api.ts";
import type { DataType } from "../types/Mails.d.ts";
//modules
import { toast } from 'sonner'
import { Typewriter } from 'react-simple-typewriter'
import axios from 'axios';
import { VerticalTimelineElement, VerticalTimeline } from "react-vertical-timeline-component";
//utils
import { generateToast } from "../utils/toast.utils.ts";
//config
import { ENV } from "./env.config.ts";
//types
import type { Technologies, Technology as TechnologyType } from "@/types/Technologies.js";
import type { HandleEmail, HandleMessage, HandleName, HandleSubmit } from "@/types/Form.d.ts";
import { ExperienceType, IExperience } from "@/types/Experiences.ts";

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
    TechnologiesCarousel,
    Technology,
    Banner,
    CertificatesContainer,
    Contact,
    Footer,
    Navbar,
    Projects,
    Experiences,
    Experience,
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
    LiaCertificateSolid,
    MdWatchLater,
    MdWork,
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
    HiAcademicCap,
    //data
    certificates,
    projects,
    backTechnologies,
    frontTechnologies,
    experiences,
    //modules
    Carousel,
    Typewriter,
    axios,
    toast,
    VerticalTimelineElement,
    VerticalTimeline,
    //api
    sendMailsRequest,
    DataType,
    //utils 
    generateToast,
    //config
    ENV,
    //enums
    ExperienceType,
};

export type {
    //types
    Technologies,
    TechnologyType,
    HandleEmail,
    HandleMessage,
    HandleName,
    HandleSubmit,
    IExperience
};

