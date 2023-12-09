import Guide from "../../layout/Guide/Guide";
import FAQ from "../../layout/FAQ/FAQ";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-3 text-center md:py-10 md:text-left">
      <div className="relative flex min-h-[79vh] flex-col justify-between gap-8 lg:flex-row lg:gap-20">
        <p className="absolute bottom-0 right-0 text-xs">
          Overachiever App Version 1.0.1
        </p>
        <FAQ />
        <Guide />
      </div>
    </div>
  );
};

export default About;
