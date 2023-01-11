import Project from "../../components/Project/Project";
import data from "../../data";

const ProjectsPage = () => {
  console.log(data.projects);
  return (
    <div>
      {data.projects.map((project, index) => {
        return <Project project={project} />;
      })}
    </div>
  );
};

export default ProjectsPage;
