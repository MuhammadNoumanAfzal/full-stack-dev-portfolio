import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeSnippets = [
  {
    file: "Developer.jsx",
    language: "React",
    code: `const developer = {
  name: "Muhammad Nouman Afzal",
  role: "Full-Stack Developer",
  stack: ["MERN", "Laravel", "PHP"],
  focus: "production web platforms",
  available: true
};`,
  },
  {
    file: "platforms.js",
    language: "JavaScript",
    code: `const platforms = [
  "multi-vendor marketplaces",
  "booking and payment systems",
  "admin and CRM dashboards",
  "REST API architecture"
];`,
  },
  {
    file: "automation.js",
    language: "JavaScript",
    code: `async function automateWorkflow() {
  await connect("n8n", "Make.com");
  return reduceManualOverhead();
}`,
  },
];

const badges = [
  { label: "React", color: "text-[#61DAFB]", className: "-left-4 bottom-2 md:-left-8", delay: 0 },
  { label: "Node.js", color: "text-green-300", className: "-left-3 top-[65%] md:-left-4", delay: 0.5 },
  { label: "Laravel", color: "text-red-300", className: "-right-3 -bottom-6 md:-right-8", delay: 1 },
  { label: "MongoDB", color: "text-emerald-300", className: "-right-3 top-8 md:-right-8", delay: 0.8 },
  { label: "Stripe", color: "text-violet-300", className: "right-8 top-1/2 md:-right-3", delay: 1.2 },
];

const CodePanel = () => {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentSnippet = codeSnippets[snippetIndex];
  const fullCode = currentSnippet.code;

  useEffect(() => {
    const typingSpeed = isDeleting ? 15 : 20;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedCode.length < fullCode.length) {
          setDisplayedCode(fullCode.slice(0, displayedCode.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else if (displayedCode.length > 0) {
        setDisplayedCode(displayedCode.slice(0, -1));
      } else {
        setIsDeleting(false);
        setSnippetIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedCode, isDeleting, fullCode]);

  return (
    <div className="relative mx-auto w-full max-w-4xl px-4">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          animate={{ y: [0, index % 2 ? 7 : -8, 0, index % 2 ? -6 : 7, 0], rotate: [0, 1, -1, 0.5, 0] }}
          transition={{ duration: 9 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
          className={`absolute z-20 rounded-xl border border-white/10 bg-[#171922]/80 px-4 py-3 shadow-xl backdrop-blur-xl ${badge.className}`}
        >
          <span className={`font-mono font-bold ${badge.color}`}>{badge.label}</span>
        </motion.div>
      ))}

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111522]/90 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-4 font-mono text-sm font-semibold tracking-wide text-gray-400 sm:text-base">{currentSnippet.file}</span>
        </div>

        <div className="min-h-[420px] p-6 sm:p-10">
          <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-8 text-gray-300 sm:text-lg">
            <code>{displayedCode}</code>
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-cyan-300 align-middle" />
          </pre>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </div>
    </div>
  );
};

export default CodePanel;
