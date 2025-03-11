export const About = () => {
  return (
    <div
      id="about"
      className="flex h-96 w-full flex-col items-center justify-center lg:flex-row"
    >
      <div className="flex w-full flex-col gap-4 px-4 lg:w-1/2">
        <h2>
          Computer Engineering student at UFBA with experience in Go,
          TypeScript, Java, Python, and C#. I specialize in developing scalable
          and distributed systems, focusing on microservices (gRPC, Protobuf,
          Kubernetes, Docker) and integrating MySQL and PostgreSQL databases.
        </h2>
        <h2>
          I have experience in building e-commerce platforms, process automation
          (RPA), and developing internal business solutions.
        </h2>
        <h2>
          I also work with AWS and GCP infrastructure while following AGILE
          methodologies (Scrum/Kanban). Passionate about technology and
          innovation, always striving to enhance my skills and apply the best
          software engineering practices.
        </h2>
      </div>
      <div className="h-full w-full lg:w-1/2"></div>
    </div>
  );
};
