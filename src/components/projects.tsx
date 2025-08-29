import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

type Project = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project: Project, index: number) => {
          const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
            project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} (opens in new tab)`}
                className="group block focus:outline-none focus:ring-2 focus:ring-yellow-400/70 rounded-lg"
              >
                {children}
              </a>
            ) : (
              <>{children}</>
            );

          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <Wrapper>
                  <img
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className="mb-6 rounded transition-transform duration-200 group-hover:scale-[1.03]"
                  />
                </Wrapper>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4 text-white"
              >
                <Wrapper>
                  <h6 className="mb-2 font-semibold text-white underline-offset-4 group-hover:underline">
                    {project.title}
                  </h6>
                </Wrapper>

                <p className="mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
