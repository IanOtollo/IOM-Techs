import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectRequestForm from "@/components/ProjectRequestForm";

const ProjectRequest = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar isHero={false} />
      <main className="pt-16">
        <ProjectRequestForm />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectRequest;
