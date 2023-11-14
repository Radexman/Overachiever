import Guide from "../../layout/Guide/Guide";
import FAQ from "../../layout/FAQ/FAQ";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-center md:text-left">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-20">
        <Guide />
        <FAQ />
      </div>
    </div>
  );
};

export default About;
