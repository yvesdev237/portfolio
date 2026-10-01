import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import { Services } from "./components/Services";
import { Analytics } from "@vercel/analytics/react";
import { useTranslation } from "react-i18next";
import {
  processSteps,
  projects,
  services,
  type Project,
} from "./data/portfolio";

const getProjectKey = (project: Project) =>
  JSON.stringify([
    project.title,
    project.image,
    project.liveUrl ?? project.caseStudy?.liveLink ?? "",
  ]);

const uniqueProjects = [
  ...new Map(
    projects.map((project) => [getProjectKey(project), project]),
  ).values(),
];
const liveProjects = uniqueProjects.filter((project) => !project.isConcept);
const conceptProjects = uniqueProjects.filter((project) => project.isConcept);

const ProjectMarquee = ({
  items,
  label,
}: {
  items: Project[];
  label: string;
}) => (
  <div
    role="region"
    aria-label={label}
    tabIndex={0}
    className="project-marquee -mx-4 overflow-x-auto px-4 py-5 focus-visible:outline-2 focus-visible:outline-emerald-400 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
  >
    <div className="flex w-max items-center gap-6">
      {items.map((project) => (
        <div
          key={getProjectKey(project)}
          className="w-[min(68vw,240px)] flex-none sm:w-[min(30vw,280px)]"
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  </div>
);

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#050816] text-stone-50">
      <Navbar />

      <main>
        <Hero />

        <section
          id="work"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow={t("work.eyebrow")}
            title={t("work.title")}
            intro={t("work.intro")}
          />

          <div className="mt-8 space-y-6">
            {liveProjects.length > 0 ? (
              <section aria-labelledby="live-projects-heading">
                <h3
                  id="live-projects-heading"
                  className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300"
                >
                  {t("work.live")}
                </h3>
                <ProjectMarquee items={liveProjects} label={t("work.live")} />
              </section>
            ) : null}

            {conceptProjects.length > 0 ? (
              <section aria-labelledby="concept-projects-heading">
                <h3
                  id="concept-projects-heading"
                  className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300"
                >
                  {t("work.concepts")}
                </h3>
                <ProjectMarquee
                  items={conceptProjects}
                  label={t("work.concepts")}
                />
              </section>
            ) : null}
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow={t("services.eyebrow")}
            title={t("services.title")}
          />
          <Services services={services} />
        </section>

        <section
          id="process"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow={t("process.eyebrow")}
            title={t("process.title")}
          />
          <ProcessTimeline steps={processSteps} />
          <p className="mt-8 text-center text-sm text-stone-300">
            {t("process.delivery")}
          </p>
        </section>

        <section
          id="about"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow={t("about.eyebrow")}
            title={t("about.title")}
          />
          <About />
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <Contact />
        </section>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
