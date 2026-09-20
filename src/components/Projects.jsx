import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import BorderGlow from "../components/BorderGlow";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "GoCatering Customer Platform",
      category: "Marketplace",
      description:
        "Customer-facing catering marketplace with ordering, booking, vendor discovery, payment flow, and Norwegian business logic.",
      image: "/project1.jpeg",
      live: "http://gocatering.no/",
      number: "01",
    },
    {
      id: 2,
      title: "GoCatering Vendor Panel",
      category: "Vendor Dashboard",
      description:
        "Vendor-side dashboard for managing catering orders, menus, availability, customer requests, and operational workflows.",
      image: "/project2.png",
      live: "https://vendor.gocatering.no/",
      number: "02",
    },
    {
      id: 3,
      title: "GoCatering Admin Panel",
      category: "Admin Dashboard",
      description:
        "Administrative platform for marketplace control, settings, vendors, orders, invoicing, and internal business management.",
      image: "/project3.png",
      live: "http://admin.gocatering.no/",
      number: "03",
    },
    {
      id: 4,
      title: "Global Minds Consultants",
      category: "Consultancy Platform",
      description:
        "Professional consultancy website for services, programs, content, and client-facing information architecture.",
      image: "/project4.jpeg",
      live: "https://globalmindsconsultants.com/",
      number: "04",
    },
    {
      id: 5,
      title: "GMC Session Management",
      category: "Management System",
      description:
        "Session management application for organizing consultant sessions, workflows, and operational coordination.",
      image: "/project5.jpeg",
      live: "https://gmc-session-management.vercel.app/",
      number: "05",
    },
    {
      id: 6,
      title: "Exlon Tech",
      category: "Company Website",
      description:
        "Company website presenting services, brand presence, and production-ready web development capabilities.",
      image: "/project6.jpeg",
      live: "https://exlontech.com/",
      number: "06",
    },
    {
      id: 7,
      title: "HQA Fund",
      category: "Organization Website",
      description:
        "Public-facing organization website with structured pages, responsive layouts, and clear information delivery.",
      image: "/project7.jpeg",
      live: "https://hqa.exlontech.com/",
      number: "07",
    },
    {
      id: 8,
      title: "Alpha Trading Society",
      category: "Education Platform",
      description:
        "Trading education and community website built for program presentation, audience engagement, and lead flow.",
      image: "/project8.jpeg",
      live: "https://alphatradingsociety.com/",
      number: "08",
    },
    {
      id: 9,
      title: "Nitro Motors USA",
      category: "Automotive Website",
      description:
        "Automotive business website focused on vehicle presentation, browsing experience, and customer conversion.",
      image: "/project9.jpeg",
      live: "https://nitromotorsusa.com/",
      number: "09",
    },
    {
      id: 10,
      title: "Asomaa",
      category: "Business Website",
      description:
        "Responsive business website with polished presentation, clear navigation, and production deployment.",
      image: "/projects/coders-gym.png",
      live: "https://asomaa.com/",
      number: "10",
    },
  ];

  const glowProps = {
    edgeSensitivity: 25,
    glowColor: "200 90 65",
    backgroundColor: "#0B0E13",
    borderRadius: 18,
    glowRadius: 25,
    glowIntensity: 0.6,
    coneSpread: 30,
    animated: false,
    colors: ["#2563EB", "#22D3EE", "#3B82F6"],
    fillOpacity: 0.16,
  };

  return (
    <section id="projects" className="relative overflow-hidden bg-[#080A0D] py-10 text-white sm:py-12 md:py-14 lg:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mb-7 max-w-3xl sm:mb-9 md:mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">Live Work</span>
          </div>

          <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Live platforms
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">built for real businesses.</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:mt-4">
            A selection of deployed client and company projects across marketplaces, dashboards, consultancy, education, automotive, and business domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:gap-7 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: index * 0.04 }} whileHover={{ y: -10, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="h-full">
              <BorderGlow {...glowProps} className="h-full">
                <article className="group flex h-full flex-col p-3 transition-all duration-500 sm:p-4">
                  <div className="relative h-44 overflow-hidden rounded-[12px] border border-white/[0.06] bg-[#0F131A] transition-all duration-500 group-hover:border-cyan-400/30 sm:h-48 lg:h-52">
                    <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[60px] transition-all duration-700 group-hover:scale-150 group-hover:bg-cyan-400/30" />

                    <div className="absolute inset-4 overflow-hidden rounded-lg border border-white/10 bg-[#0B0E13] transition-all duration-700 group-hover:scale-[1.03] group-hover:border-cyan-400/30 sm:inset-5">
                      <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D]/75 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-blue-500/0 transition-all duration-700 group-hover:bg-cyan-400/10" />
                    </div>

                    <div className="absolute right-3 top-2.5 font-mono text-[10px] text-white/35 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-300">{project.number}</div>
                    <div className="absolute bottom-2.5 left-3">
                      <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[9px] text-white/75 backdrop-blur-md transition-all duration-500 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-100 sm:text-[10px]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col pt-4 sm:pt-5">
                    <h3 className="text-lg font-semibold tracking-tight transition-all duration-500 group-hover:text-cyan-300 sm:text-xl">{project.title}</h3>
                    <p className="mt-2.5 line-clamp-3 text-xs leading-5 text-white/60 transition-colors duration-500 group-hover:text-white/75 sm:text-[13px]">{project.description}</p>

                    <div className="mt-auto flex items-center gap-2.5 border-t border-white/[0.06] pt-4">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="group/link inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-[#080A0D] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto">
                        View Live
                        <ExternalLink size={13} className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                      <div className="ml-auto hidden h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/30 transition-all duration-500 group-hover:rotate-45 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5 group-hover:text-cyan-300 sm:flex">
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </div>
                </article>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;







