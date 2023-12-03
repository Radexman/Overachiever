import Guide from "../../layout/Guide/Guide";
import FAQ from "../../layout/FAQ/FAQ";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-3 text-center md:py-10 md:text-left">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-20">
        <FAQ />
        <Guide />
      </div>
    </div>
  );
};

export default About;
