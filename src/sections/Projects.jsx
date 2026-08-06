import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { HiArrowUpRight, HiCodeBracket } from 'react-icons/hi2';

import Container from '../components/Container';
import ProjectModal from '../components/ProjectModal';
import SectionTitle from '../components/SectionTitle';
import { projectCategories, projects } from '../data/projects';

/* =====================
   Featured Projects
===================== */

/** Displays business-relevant demo projects with filtering and detail previews. */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          (activeCategory === 'All' || project.category === activeCategory) &&
          `${project.title} ${project.type} ${project.description}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
      ),
    [activeCategory, searchQuery],
  );

  return (
    <section id="projects" className="py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Selected work"
          title="Web experiences built for the way businesses grow."
          description="Demo projects designed around the needs of restaurants, clinics, hospitality brands, local services, and growing teams."
        />
        <ProjectFilters
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          onCategoryChange={setActiveCategory}
          onSearchChange={setSearchQuery}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {visibleProjects.length === 0 && (
          <p className="rounded-lg border border-dashed border-line p-8 text-center text-slate-400">
            No projects match that search. Try another business type or keyword.
          </p>
        )}
      </Container>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

/** Renders the selectable business-category filters. */
function ProjectFilters({ activeCategory, searchQuery, onCategoryChange, onSearchChange }) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? 'bg-blue text-white' : 'border border-line bg-panel/50 text-slate-300 hover:border-blue/50'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <input
        type="search"
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search projects"
        aria-label="Search projects"
        className="w-full rounded-md border border-line bg-panel/50 px-4 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue sm:max-w-52"
      />
    </div>
  );
}

/** Renders one project card and opens its detail modal. */
function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-lg border border-line bg-panel/70"
    >
      <button type="button" onClick={onOpen} className="block w-full text-left">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            loading="lazy"
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-tr ${project.tint}`} />
          <p className="absolute bottom-4 left-4 rounded-md bg-ink/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
            {project.type}
          </p>
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((technology) => (
              <span
                key={technology}
                className="rounded bg-white/5 px-2 py-1 text-[11px] font-medium text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </button>
      <div className="flex flex-wrap gap-3 border-t border-white/7 px-5 py-4">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-300"
        >
          View Details <HiArrowUpRight />
        </button>
        <a
          href={project.github || '#'}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white"
        >
          <HiCodeBracket /> GitHub
        </a>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white"
          >
            <HiArrowUpRight /> Live Demo
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed items-center gap-1.5 text-sm font-semibold text-slate-500"
          >
            <HiArrowUpRight /> Coming Soon
          </button>
        )}
      </div>
    </motion.article>
  );
}
