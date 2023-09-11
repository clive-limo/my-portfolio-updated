import ProjectsCard from './ProjectsCard';

export default function Projects() {
  return (
    <section className="h-screen w-full" id="projects">
      <h1 className="pt-20 text-5xl font-extrabold text-white">Projects</h1>
      <div className="mt-5 flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-8">
        <ProjectsCard
          title="Service Delivery Tracking"
          description="This is a web application that was developed to track the delivery of services and commitments made by government officials in Mandera."
          url="https://mandera-service-delivery.web.app/"
          complete
        />
        <ProjectsCard
          title="My Portfolio"
          description="This project is my personal portfolio showcasing my skills and projects."
          url="/"
          complete
        />
        <ProjectsCard
          title="Prolox Solutions"
          description="This is an ecommerce application for a logistics company called Prolox."
          url="https://prolox.co.ke/"
          complete
        />
        <ProjectsCard
          title="Not Reddit"
          description="This project is a reddit clone."
          url="https://prolox.co.ke/"
          complete={false}
        />
      </div>
    </section>
  );
}
