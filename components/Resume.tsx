"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTwitter,
} from "react-icons/fi";
import { education, experience, profile, projects, skills } from "@/data/resume";

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  x: FiTwitter,
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <h2 className="whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-primary/80">
        {children}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent" />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-primary/70">{icon}</span>
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-muted-foreground">{value}</p>
        )}
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <main className="min-h-screen bg-secondary/30 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-lg border border-border/60 bg-card p-6 shadow-sm sm:p-12"
        >
          <section className="grid items-start gap-x-12 gap-y-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="relative md:col-span-1"
            >
              <div className="mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-full border-4 border-card bg-secondary shadow-lg md:max-w-none">
                <Image
                  src={profile.avatar}
                  alt={`Portrait of ${profile.name}`}
                  width={400}
                  height={400}
                  priority
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <div className="flex h-full flex-col justify-center md:col-span-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              >
                {profile.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="mt-2 text-lg text-muted-foreground"
              >
                {profile.role}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                className="mt-6 text-sm leading-relaxed text-muted-foreground"
              >
                {profile.bio}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/60 pt-6 text-sm"
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FiMail className="h-4 w-4" />
                  <span>{profile.email}</span>
                </a>
                {profile.socials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{social.handle}</span>
                    </a>
                  );
                })}
              </motion.div>
            </div>
          </section>

          <div className="mt-8 space-y-2">
            <section id="experience" className="py-6">
              <Reveal>
                <SectionHeading>Professional Experience</SectionHeading>
              </Reveal>
              {experience.map((job, index) => (
                <Reveal
                  key={job.id}
                  delay={0.05 * index}
                  className={
                    index < experience.length - 1
                      ? "mb-8 border-b border-border/60 pb-8"
                      : ""
                  }
                >
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.role}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {job.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {job.location}
                      </p>
                    </div>
                    <span className="whitespace-nowrap text-sm text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <span className="mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </section>

            <section id="projects" className="py-6">
              <Reveal>
                <SectionHeading>Selected Projects</SectionHeading>
              </Reveal>
              {projects.map((project, index) => (
                <Reveal
                  key={project.id}
                  delay={0.05 * index}
                  className={
                    index < projects.length - 1
                      ? "mb-8 border-b border-border/60 pb-8"
                      : ""
                  }
                >
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.tech.join(" · ")}
                      </p>
                    </div>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 whitespace-nowrap text-sm text-primary/80 transition-colors hover:text-primary hover:underline"
                      >
                        View Project
                        <FiArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <p
                    className={`text-sm leading-relaxed text-muted-foreground ${
                      project.highlights.length > 0 ? "mb-3" : ""
                    }`}
                  >
                    {project.description}
                  </p>
                  {project.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <span className="mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </section>

            <section id="education" className="py-6">
              <Reveal>
                <SectionHeading>Education</SectionHeading>
              </Reveal>
              {education.map((item, index) => (
                <Reveal
                  key={item.id}
                  delay={0.05 * index}
                  className={index < education.length - 1 ? "mb-6" : ""}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.location}
                      </p>
                    </div>
                    <span className="whitespace-nowrap text-sm text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                </Reveal>
              ))}
            </section>

            <section id="skills" className="py-6">
              <Reveal>
                <SectionHeading>Skills &amp; Expertise</SectionHeading>
              </Reveal>
              {skills.map((group, index) => (
                <Reveal
                  key={group.title}
                  delay={0.05 * index}
                  className={index < skills.length - 1 ? "mb-6" : ""}
                >
                  <h3 className="mb-3 text-base font-semibold text-foreground">
                    {group.title}
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </section>

            <section id="contact" className="py-6">
              <Reveal>
                <SectionHeading>Contact</SectionHeading>
              </Reveal>
              <div className="space-y-3">
                <Reveal delay={0.05}>
                  <ContactRow
                    icon={<FiMail className="h-5 w-5" />}
                    label="Email"
                    value={profile.email}
                    href={`mailto:${profile.email}`}
                  />
                </Reveal>
                <Reveal delay={0.1}>
                  <ContactRow
                    icon={<FiMapPin className="h-5 w-5" />}
                    label="Location"
                    value={profile.location}
                  />
                </Reveal>
                {profile.socials.map((social, index) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <Reveal key={social.label} delay={0.15 + index * 0.05}>
                      <ContactRow
                        icon={<Icon className="h-5 w-5" />}
                        label={social.label}
                        value={social.handle}
                        href={social.href}
                        external
                      />
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.1}>
                <footer className="mt-16 border-t border-border/60 pt-8 text-center">
                  <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} by {profile.name}.
                  </p>
                  <div className="mt-4 flex justify-center gap-4">
                    {profile.socials.map((social) => {
                      const Icon = socialIcons[social.icon];
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.label}
                          className="text-muted-foreground transition-colors hover:text-primary/80"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </footer>
              </Reveal>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
