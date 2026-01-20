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

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let scrollTimeout: NodeJS.Timeout;
    let isScrolling = false;
    let lastScrollTime = 0;
    const SCROLL_DEBOUNCE = 150; // Debounce time in ms

    // Use IntersectionObserver to track current section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id;
            const index = Array.from(sections).findIndex(
              (s) => s.id === sectionId
            );
            if (index !== -1) {
              setCurrentSection(index);
              history.replaceState(null, "", `#${sectionId}`);
            }
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Smooth scroll to section on wheel with debouncing
    const handleWheel = (event: WheelEvent) => {
      const now = Date.now();
      
      // Debounce rapid scroll events
      if (now - lastScrollTime < SCROLL_DEBOUNCE) {
        return;
      }
      lastScrollTime = now;

      if (isScrolling) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionTops = Array.from(sections).map((s) => ({
        top: s.offsetTop,
        bottom: s.offsetTop + s.offsetHeight,
        id: s.id,
      }));

      // Find current section based on scroll position
      let currentSectionIndex = 0;
      for (let i = 0; i < sectionTops.length; i++) {
        if (
          scrollPosition >= sectionTops[i].top &&
          scrollPosition < sectionTops[i].bottom
        ) {
          currentSectionIndex = i;
          break;
        }
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = currentSectionIndex + direction;

      // Only snap if scrolling to next/prev section and within reasonable bounds
      if (nextIndex >= 0 && nextIndex < sections.length) {
        const nextSection = sections[nextIndex];
        const distanceToNext = Math.abs(
          scrollPosition - (direction > 0 ? nextSection.offsetTop : sectionTops[currentSectionIndex].top)
        );

        // Only snap if we're close to the edge or scrolling fast
        const scrollSpeed = Math.abs(event.deltaY);
        const shouldSnap = distanceToNext < window.innerHeight * 0.3 || scrollSpeed > 50;

        if (shouldSnap) {
          event.preventDefault();
          isScrolling = true;

          nextSection.scrollIntoView({ behavior: "smooth", block: "center" });
          history.pushState(null, "", `#${nextSection.id}`);

          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            isScrolling = false;
          }, 800);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      observer.disconnect();
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    setExpandedExperience("");
  }, [currentSection]);

  return (
    <main className="flex flex-col min-h-[100vh] space-y-10 overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <section id="hero" className="h-screen flex items-center justify-center snap-start snap-always">
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
        className="h-screen flex flex-col items-center justify-center snap-start snap-always"
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
        className="h-screen flex flex-col items-center justify-center snap-start snap-always"
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
                  setExpandedExperience(value);
                }}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education" className="h-screen flex flex-col justify-center snap-start snap-always">
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
        className="h-screen flex flex-col items-center justify-center snap-start snap-always"
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

      {DATA.projects && DATA.projects.length > 0 && (
        <section
          id="projects"
          className="min-h-screen flex flex-col items-center justify-center py-10 snap-start snap-always"
        >
          <div className="flex flex-col items-center gap-y-6 max-w-6xl w-full px-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold tracking-wide">Projects</h2>
            </BlurFade>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {(DATA.projects as unknown as Array<{
                title: string;
                href?: string;
                description: string;
                dates: string;
                technologies: readonly string[];
                image?: string;
                video?: string;
                links?: readonly any[];
              }>).map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                >
                  <ProjectCard
                    title={project.title}
                    href={project.href}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    link={project.href}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        id="contact"
        className="h-screen flex items-center justify-center snap-start snap-always"
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
