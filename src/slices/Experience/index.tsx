import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

type ExperienceProps = {
  slice: {
    heading: string;
    items: {
      title: string;
      time_period: string;
      institution: string;
      description: string;
    }[];
  };
};

const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  return (
    <Bounded data-slice-type="experience" data-slice-variation="default">
      <Heading as="h2" size="lg" className="mb-12">
        {slice.heading}
      </Heading>
      {/* Container Timeline dengan garis kiri */}
      <div className="border-l-4 border-cyan-400 ml-4 md:ml-6 space-y-14">
        {slice.items.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-12 max-w-prose group">
            {/* Titik Timeline (Dot) */}
            <span className="absolute -left-[14px] top-2 h-6 w-6 rounded-full border-4 border-slate-900 bg-cyan-400 group-hover:bg-white transition-colors duration-300"></span>

            <Heading as="h3" size="sm" className="text-slate-100 group-hover:text-cyan-300 transition-colors">
              {item.title}
            </Heading>

            <div className="mt-2 flex w-fit items-center gap-3 text-lg font-bold tracking-tight text-cyan-500">
              <span className="bg-cyan-400/10 px-3 py-1 rounded-md">{item.time_period}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">{item.institution}</span>
            </div>
            
            <div className="prose prose-lg prose-invert mt-5 text-slate-400 leading-relaxed">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Experience;