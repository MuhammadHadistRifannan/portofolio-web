"use client";

import Head from 'next/head';
import Image from 'next/image';
import { motion , AnimatePresence} from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaXTwitter, FaPinterest } from 'react-icons/fa6';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

type Language = 'en' | 'ja';

const content: Record<Language, {
  title: string;
  desc: string;
  about: string;
  aboutDesc: string;
  projects: string;
  contact: string;
  email: string;
  experience: string;
}> = {
  en: {
    title: "Informatics Student\n& Game Developer",
    desc: "Passionate about software engineering, Game Dev. Currently pursuing BS in Computer Science with a focus on building scalable application and mantaining code.",
    about: "About Me",
    aboutDesc: "I'm a student at Politeknik Negeri Cilacap passionate about game development, software engineering, and competitive programming. I have worked on various apps and games using C#, Unity, .NET, and actively participate in tech competitions like LKS IT Software Solution.",
    projects: "Projects",
    contact: "Contact",
    email: "Email",
    experience: "Experience"
  },
  ja: {
    title: "情報工学の学生\n& ゲーム開発者",
    desc: "ソフトウェアエンジニアリングとゲーム開発に情熱を注いでいます。現在、拡張性の高いアプリケーションの構築と、保守性のあるコードの実装に取り組んでいます。",
    about: "私について",
    aboutDesc: "私はチラチャップ州立ポリテクニックの情報工学科の学生で、ゲーム開発、ソフトウェアエンジニアリング、競技プログラミングに強い関心を持っています。C#、Unity、.NETを活用した様々なアプリやゲームを開発し、LKS IT Software Solutionなどの技術コンテストにも積極的に参加しています。",
    projects: "プロジェクト",
    contact: "お問い合わせ",
    email: "メール",
    experience: "経験"
  }
};

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
}

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [langMenu, setLangMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <PageWrapper>
      {
        <div className="bg-white text-gray-800 font-sans scroll-smooth">
      <Head>
        <title>Hadist</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        <header className="fixed w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">Hadist</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 text-sm font-medium items-center">
            <button onClick={() => scrollToSection('about-details')} className="hover:text-blue-600">{content[lang].about}</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-blue-600">{content[lang].experience}</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600">{content[lang].projects}</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600">{content[lang].contact}</button>

            <div className="relative">
              <button
                onClick={() => setLangMenu(!langMenu)}
                className="px-3 py-2 border rounded-md bg-white hover:bg-gray-100 text-sm"
              >
                🌐 Language
              </button>

              <AnimatePresence>
                {langMenu && (
                  <motion.div
                    key="lang-menu"
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-32 min-w-[7rem] bg-white border rounded shadow-lg z-50"
                  >
                    <button
                      onClick={() => { setLang('en'); setLangMenu(false); }}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${lang === 'en' ? 'bg-gray-200 font-bold' : ''}`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => { setLang('ja'); setLangMenu(false); }}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${lang === 'ja' ? 'bg-gray-200 font-bold' : ''}`}
                    >
                      日本語
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Section */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl"
            >
              ☰
            </button>

            {/* Language Button (Mobile) */}
            <div className="relative">
              <button
                onClick={() => setLangMenu(!langMenu)}
                className="px-2 py-1 border rounded hover:bg-gray-100 text-sm"
              >
                🌐
              </button>

              <AnimatePresence>
                {langMenu && (
                  <motion.div
                    key="lang-menu"
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg z-50"
                  >
                    <button
                      onClick={() => { setLang('en'); setLangMenu(false); }}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${lang === 'en' ? 'bg-gray-200 font-bold' : ''}`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => { setLang('ja'); setLangMenu(false); }}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${lang === 'ja' ? 'bg-gray-200 font-bold' : ''}`}
                    >
                      日本語
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 md:hidden flex flex-col gap-3 z-40">
              <button onClick={() => { scrollToSection('about-details'); setIsMobileMenuOpen(false); }} className="hover:text-blue-600">{content[lang].about}</button>
              <button onClick={() => { scrollToSection('experience'); setIsMobileMenuOpen(false); }} className="hover:text-blue-600">{content[lang].experience}</button>
              <button onClick={() => { scrollToSection('projects'); setIsMobileMenuOpen(false); }} className="hover:text-blue-600">{content[lang].projects}</button>
              <button onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }} className="hover:text-blue-600">{content[lang].contact}</button>
            </div>
          )}
        </header>


      <main className="pt-32">
        <section id="about" className="px-6 py-20 text-left max-w-4xl mx-auto">

          <h2 className="text-5xl font-extrabold mt-4 whitespace-pre-line text-left">
            {content[lang].title}
          </h2>

          <p className="text-lg text-gray-600 mt-6 max-w-3xl">
            {content[lang].desc}
          </p>

          <div className="flex flex-col sm:flex-row justify-start gap-4 mt-10">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              View My Work →
            </button>

            <div
              onClick={() => window.location.href = 'mailto:ipanjabar933@gmail.com'}
              className="flex items-center justify-center gap-2 border px-6 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer"
            >
              <FaEnvelope/> Get In Touch
              
            </div>
          </div>
        </section>
        <SectionWrapper>
          
         <section id="about-details" className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">About Me</h3>
              <p className="mb-4 text-gray-700">
                I'm a Computer Science student at Politeknik Negeri Cilacap passionate about game development, software engineering, and competitive programming. I love building applications and games that are both functional and fun.
              </p>
              <p className="mb-4 text-gray-700">
                My projects span across full-stack development, AI integration, and game mechanics using C#, .NET, Unity, and MySQL. I’ve built bots, booking systems, portfolio sites, and action games with VFX using Unity HDRP.
              </p>
              <p className="mb-6 text-gray-700">
                I’ve participated in tech competitions like LKS IT Software Solution and actively contribute to open source projects on GitHub. My goal is to innovate through code and bring imaginative ideas to life.
              </p>

              <h4 className="text-xl font-semibold mb-2">Education</h4>
              <p className="font-medium">Politeknik Negeri Cilacap</p>
              <p className="text-sm text-gray-600 mb-1">D3 Teknik Informatika <span className="float-right">2021 - 2025</span></p>
              <p className="text-sm text-gray-600 mb-6">
                Relevant Coursework: Algoritma & Struktur Data, Pemrograman Berorientasi Objek, Basis Data, Machine Learning, Rekayasa Perangkat Lunak, Jaringan Komputer, Kecerdasan Buatan
              </p>

              <h4 className="text-xl font-semibold mb-2">Technical Skills</h4>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium">Programming Languages</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {['C#', 'Java', 'PHP', 'JavaScript', 'SQL'].map(skill => (
                      <span key={skill} className="bg-gray-200 px-2 py-1 rounded">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium">Tools & Frameworks</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {['Unity', '.NET', 'WinForms', 'Xamarin', 'VFX Graph'].map(skill => (
                      <span key={skill} className="bg-gray-200 px-2 py-1 rounded">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium">Web & DB</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {['HTML', 'CSS', 'JavaScript', 'MySQL'].map(skill => (
                      <span key={skill} className="bg-gray-200 px-2 py-1 rounded">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Achievements</h4>
              <ul className="mb-8 space-y-1 text-sm text-gray-700">
                <li>2+ <span className="text-gray-500">Software Awards</span></li>
                <li>1 <span className="text-gray-500">National Competition Medal</span></li>
                <li>10+ <span className="text-gray-500">Projects Completed</span></li>
              </ul>

              <h4 className="text-xl font-semibold mb-4">Recent Awards</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="font-semibold">🥇 Juara 1 LKS IT Software Solution</span><br />
                  <span className="text-gray-500">Tingkat Kabupaten, 2023</span>
                </li>
                <li>
                  <span className="font-semibold">🥈 Juara 2 LKS IT Software Solution</span><br />
                  <span className="text-gray-500">Tingkat Kabupaten, 2024</span>
                </li>
                <li>
                  <span className="font-semibold">📜 Sertifikasi Unity</span><br />
                  <span className="text-gray-500">Unity Junior Programmer & Unity Essentials</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        </SectionWrapper>
        <SectionWrapper>
          
        <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
            <h3 className="text-3xl font-bold mb-8 text-center">{content[lang].experience}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold">Intern - Game Programmer</h4>
                <p className="text-sm text-gray-600">JamDev Studio - Remote | Jan 2024 – Apr 2024</p>
                <p className="mt-2 text-gray-700 text-sm">Worked on mobile game mechanics using Unity and C#, implemented 2D physics and UI flow for puzzle adventure game. Collaborated in an agile team with designers and artists.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold">Freelance Software Developer</h4>
                <p className="text-sm text-gray-600">Self-employed | 2023 – Present</p>
                <p className="mt-2 text-gray-700 text-sm">Built custom applications using .NET and WinForms for local businesses, including POS systems and booking management tools. Integrated MySQL databases and maintained long-term updates.</p>
              </div>
            </div>
          </section>
        </SectionWrapper>
        <SectionWrapper>

        <section id="projects" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="mb-12 text-gray-600 text-sm md:text-base">
              A continuously flowing showcase of my expertise in machine learning, web development, and data science.
            </p>

            <div className="overflow-hidden">
              <div className="flex space-x-6 animate-scroll-left w-max">
                {["AI Telegram Bot", "Flight Booking App", "Hack and Slash Game", ".NET Jarvis", "Spotify Console App", "Mini Project Web"].map((title, i) => {
                  const descriptions = [
                    "Bot Telegram berbasis C# terintegrasi dengan Gemini AI API.",
                    "Aplikasi pemesanan tiket dengan .NET, WinForms, dan MySQL.",
                    "Game anime hack & slash dengan VFX Graph di Unity HDRP.",
                    "A .NET-based assistant integrated with AI APIs and speech recognition.",
                    "Console app built with .NET to control and interact with Spotify.",
                    "A simple web application built using HTML, CSS, JavaScript, and PHP."
                  ];

                  const tags = [
                    ["C#", "Telegram", "Gemini API"],
                    [".NET", "WinForms", "MySQL"],
                    ["Unity", "HDRP", "VFX Graph"],
                    [".NET", "AI Integration", "Speech Recognition"],
                    [".NET", "Spotify API", "Console App"],
                    ["HTML", "CSS", "PHP"]
                  ];

                  const highlights = [
                    ["Gemini Integration", "Real-time Chat"],
                    ["Booking System", "Payment Simulation"],
                    ["Hack & Slash", "Visual Effects"],
                    ["Voice Assistant", "AI Commands"],
                    ["Music Control", "CLI Interface"],
                    ["CRUD Function", "Simple Auth"]
                  ];

                  return (
                    <div key={i} className="min-w-[300px] max-w-[350px] bg-gradient-to-t from-black/70 to-transparent text-white rounded-xl shadow-lg hover:shadow-xl transition snap-center">
                      <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                        <span className="text-xs">📷 Image Placeholder</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2">{title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tags[i].map((tag, j) => (
                            <span key={j} className="bg-white/20 text-xs px-2 py-1 rounded">{tag}</span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-200 mb-4">{descriptions[i]}</p>
                        <ul className="mb-4 space-y-1 text-sm text-green-300 list-disc list-inside">
                          {highlights[i].map((point, k) => (
                            <li key={k}>{point}</li>
                          ))}
                        </ul>
                        <a href="#" className="inline-flex items-center gap-2 text-sm bg-white text-black font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13v6a2 2 0 002 2h-8a2 2 0 01-2-2V9a2 2 0 012-2h6l-4-4m4 4l4 4m-4-4V9" />
                          </svg>
                          View Project
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes scrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll-left {
              animation: scrollLeft 60s linear infinite;
            }
            .group-hover\:paused:hover {
              animation-play-state: paused;
            }
          `}</style>
        </section>



        </SectionWrapper>
        
        <SectionWrapper>
            <section id="contact" className="w-full flex justify-center bg-gray-50 py-20 px-6">
              <div className="text-center max-w-3xl">
                <h3 className="text-3xl font-bold mb-6">Let's Collaborate</h3>
                <p className="text-lg text-gray-600 mb-12">
                  I'm always interested in new opportunities in software engineering, mobile dev, and game dev. Whether it's an internship, research collaboration, or project work, I'd love to connect.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm mb-10">
                  <div className="text-center">
                    <FaEnvelope className="mx-auto text-2xl text-gray-600" />
                    <p className="font-semibold mt-2">Email</p>
                    <p className="break-words text-gray-700 text-sm">ipanjabar933@gmail.com</p>
                  </div>
                  <div className="text-center">
                    <FaGithub className="mx-auto text-2xl text-gray-600" />
                    <p className="font-semibold mt-2">GitHub</p>
                    <p className="break-words text-gray-700 text-sm">@MuhammadHadistRifannan</p>
                  </div>
                  <div className="text-center">
                    <FaXTwitter className="mx-auto text-2xl text-gray-600" />
                    <p className="font-semibold mt-2">X</p>
                    <p className="text-gray-700 text-sm">@CarloOutt</p>
                  </div>
                  <div className="text-center">
                    <FaInstagram className="mx-auto text-2xl text-gray-600" />
                    <p className="font-semibold mt-2">Instagram</p>
                    <p className="text-gray-700 text-sm">@bennedistus_</p>
                  </div>
                  <div className="text-center">
                    <FaPinterest className="mx-auto text-2xl text-gray-600" />
                    <p className="font-semibold mt-2">Pinterest</p>
                    <p className="text-gray-700 text-sm">@hadist</p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto text-2xl text-gray-600">📊</div>
                    <p className="font-semibold mt-2">Codeforces</p>
                    <p className="text-gray-700 text-sm">@dist_</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 flex-wrap" >
                  <button className="bg-gray-900 text-white py-2 px-6 rounded-lg flex items-center gap-2" onClick={() => window.location.href = 'mailto:ipanjabar933@gmail.com'}>
                    <FaEnvelope /> Get In Touch
                  </button>
                  <button className="border border-gray-300 py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-gray-100" onClick={() => window.open('https://www.linkedin.com/in/muhammad-hadist-rifannan-8b06a4274/', '_blank')}>
                    <FaLinkedin /> Connect on LinkedIn
                  </button>
                </div>
              </div>
            </section>
        </SectionWrapper>
      </main>

        <footer className="text-center text-sm text-gray-300 py-6 border-t bg-black">
          &copy; 2025 Muhammad Hadist Rifannan. All rights reserved.
        </footer>

    </div>
      }
    </PageWrapper>
    
  );
}
