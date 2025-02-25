"use client";

import { useEffect, useState } from "react";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiGo,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiC,
} from "react-icons/si";

const BLUR_FADE_DELAY = 0.04;

const skillIcons: Record<string, JSX.Element> = {
  React: <SiReact className="text-blue-400" />,
  "Next.js": <SiNextdotjs className="text-black-400" />,
  Typescript: <SiTypescript className="text-blue-500" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  Go: <SiGo className="text-cyan-400" />,
  Python: <SiPython className="text-black-400" />,
  Postgres: <SiPostgresql className="text-blue-400" />,
  C: <SiC className="text-blue-400" />,
};

export default function Page() {
  const [currentSection, setCurrentSection] = useState(0);
  const [expandedExperience, setExpandedExperience] = useState("");

  // useEffect(() => {
  //   let isScrolling = false;

  //   const sections = Array.from(document.querySelectorAll("section"));

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const visibleSection = entries.find((entry) => entry.isIntersecting);
  //       if (visibleSection) {
  //         setCurrentSection(sections.indexOf((visibleSection as any)?.target));
  //       }
  //     },
  //     { threshold: 0.6 }
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   const scrollToSection = (index: number) => {
  //     if (index >= 0 && index < sections.length) {
  //       isScrolling = true;
  //       sections[index].scrollIntoView({ behavior: "smooth" });

  //       setTimeout(() => {
  //         isScrolling = false;
  //       }, 600); // Adjust delay based on scroll speed
  //     }
  //   };

  //   const handleWheelScroll = (event: WheelEvent) => {
  //     if (isScrolling) return;
  //     event.preventDefault();

  //     const direction = event.deltaY > 0 ? 1 : -1;
  //     scrollToSection(currentSection + direction);
  //   };

  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (isScrolling) return;

  //     if (event.key === "ArrowDown" || event.key === "PageDown") {
  //       event.preventDefault();
  //       scrollToSection(currentSection + 1);
  //     } else if (event.key === "ArrowUp" || event.key === "PageUp") {
  //       event.preventDefault();
  //       scrollToSection(currentSection - 1);
  //     }
  //   };

  //   let touchStartY = 0;
  //   const handleTouchStart = (event: TouchEvent) => {
  //     touchStartY = event.touches[0].clientY;
  //   };

  //   const handleTouchMove = (event: TouchEvent) => {
  //     if (isScrolling) return;
  //     const touchEndY = event.touches[0].clientY;
  //     const direction = touchEndY < touchStartY ? 1 : -1;
  //     if (Math.abs(touchStartY - touchEndY) > 50) {
  //       scrollToSection(currentSection + direction);
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheelScroll, { passive: false });
  //   window.addEventListener("keydown", handleKeyDown);
  //   window.addEventListener("touchstart", handleTouchStart);
  //   window.addEventListener("touchmove", handleTouchMove, { passive: false });

  //   return () => {
  //     window.removeEventListener("wheel", handleWheelScroll);
  //     window.removeEventListener("keydown", handleKeyDown);
  //     window.removeEventListener("touchstart", handleTouchStart);
  //     window.removeEventListener("touchmove", handleTouchMove);
  //     observer.disconnect();
  //   };
  // }, [currentSection]);

  useEffect(() => {
    let isScrolling = false;
    const sections = document.querySelectorAll("section");
    let currentIndex = 0;

    const scrollToSection = (index: any) => {
      if (index >= 0 && index < sections.length) {
        currentIndex = index;
        const targetSection = sections[currentIndex];

        history.pushState(null, "", `#${targetSection.id}`);

        targetSection.scrollIntoView({ behavior: "smooth" });

        isScrolling = true;
        setTimeout(() => {
          isScrolling = false;
        }, 600);
      }
    };

    const handleScroll = (event: any) => {
      if (isScrolling) return;
      event.preventDefault();

      const direction = event.deltaY > 0 ? 1 : -1;
      scrollToSection(currentIndex + direction);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    setExpandedExperience("");
  }, [currentSection]);

  return (
    <main className="flex flex-col min-h-[100vh] space-y-10 overflow-hidden">
      <section id="hero" className="h-screen flex items-center justify-center">
        <div className="mx-auto w-full space-y-8 flex items-center">
          {/* Responsive layout */}
          <div className="flex flex-col-reverse sm:flex-row items-center gap-8 w-full">
            {/* Text Section */}
            <div className="flex flex-col flex-1 space-y-1.5 text-center sm:text-left">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${DATA.name}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-lg"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>

            {/* Avatar Image */}
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="h-screen flex flex-col items-center justify-center"
      >
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFadeText
          className="text-md text-justify mt-6"
          delay={BLUR_FADE_DELAY * 4}
          text={DATA.summary}
        />
      </section>

      <section
        id="work"
        className="h-screen flex flex-col items-center justify-center"
      >
        <div className="flex min-h-0 flex-col gap-y-3 items-center">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                expandedExperience={expandedExperience}
                setExpandedExperience={(value) => {
                  console.log(value);
                  setExpandedExperience(value);
                }}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education" className="h-screen flex flex-col justify-center">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl text-center font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="h-screen flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center gap-y-6 max-w-4xl">
          <BlurFade delay={0.4}>
            <h2 className="text-xl font-bold tracking-wide">
              Skills & Technologies
            </h2>
          </BlurFade>

          <div className="flex flex-wrap justify-center gap-3">
            {DATA.skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/30 bg-white/10 shadow-md backdrop-blur-lg hover:border-blue-500 transition-all"
              >
                {skillIcons[skill] || null}
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="h-screen flex items-center justify-center"
      >
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Feel free to reach out via{" "}
                <Link
                  href={DATA.contact.social.email.url}
                  className="text-blue-500 hover:underline"
                >
                  email
                </Link>{" "}
                ,{" "}
                <Link
                  href={DATA.contact.social.WhatsApp.url}
                  className="text-blue-500 hover:underline"
                >
                  WhatsApp
                </Link>{" "}
                or{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>{" "}
                —whether it's for a project, collaboration, or just a chit-chat.
                I’ll get back to you as soon as I can. Looking forward to
                connecting! 🚀
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
