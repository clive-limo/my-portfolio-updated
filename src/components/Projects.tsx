import ProjectsCard from "./ProjectsCard";

export default function Projects() {
  return (
    <section className="w-full" id="projects">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col">
        <div className="flex flex-row justify-between">
          <h1 className="py-8 text-left font-lufga text-4xl font-semibold text-textLight md:py-16 md:text-[56px]">
            Let&apos;s have a look at <br /> my{" "}
            <span className="text-accentOrange">Portfolio</span>
          </h1>
          {/* <div className='px-8 py-2 my-auto bg-accentOrange text-white text-center font-lufga font-semibold rounded-full'>See All</div> */}
        </div>
        <div className="mt-5 flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-8">
          <ProjectsCard
            title="Fuahub"
            description="A startup that provides a platform for users to find and book laundry services, streamlining the process of finding reliable and affordable laundry services."
            url="https://fuahub.com/"
            complete
            technologies={[
              "Next.js",
              "TypeScript",
              "Node Js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "React Native",
            ]}
          />
          <ProjectsCard
            title="Chess Mind"
            description="A multi-modal AI-powered chess analysis tool that utilizes the YOLO image recognition algorithm and a Large Language Model to analyze chess moves and make predictions, providing insights for chess enthusiasts and professionals."
            url="https://github.com/abdihamid/chess-mind"
            complete
            technologies={["Python", "TensorFlow", "YOLO", "LLM"]}
          />
          <ProjectsCard
            title="Service Delivery Tracking"
            description="A web application that utilizes real-time data analytics to track the delivery of services and commitments made by government officials in Mandera, promoting transparency and accountability."
            url="https://mandera-service-delivery.web.app/"
            complete
            technologies={["React", "PrismaORM", "PostgreSQL", "Tailwind CSS"]}
          />
          <ProjectsCard
            title="My Portfolio"
            description="A personal portfolio showcasing my skills and projects, demonstrating my capabilities as a full-stack developer."
            url="/"
            complete
            technologies={[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Storybook",
            ]}
          />
          <ProjectsCard
            title="Prolox Solutions"
            description="A custom-built ecommerce application for a logistics company called Prolox, providing a seamless user experience and optimized logistics operations."
            url="https://prolox.co.ke/"
            complete
            technologies={["Next.js", "TypeScript", "Tailwind CSS", "Percy"]}
          />
          <ProjectsCard
            title="Not Reddit"
            description="A social news aggregation and discussion platform, built to exercise full-stack development skills and demonstrate understanding of web development best practices."
            url="https://prolox.co.ke/"
            complete={false}
            technologies={[
              "Next.js",
              "TypeScript",
              "PostgreSQL",
              "PrismaORM",
              "Tailwind CSS",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
