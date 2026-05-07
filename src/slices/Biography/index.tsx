import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

type BiographyProps = {
  slice: {
    heading: string;
    body: string;
    avatar: string;
    button_text: string;
    button_link: string;
  };
};

const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded data-slice-type="biography" data-slice-variation="default">
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-[2fr,1fr] items-center">
        <div className="flex flex-col gap-8 col-start-1">
          <Heading size="xl" className="text-white drop-shadow-lg">
            {slice.heading}
          </Heading>

          {/* Efek Glassmorphism untuk kotak teks */}
          <div className="prose prose-xl prose-slate prose-invert bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
            <p className="leading-relaxed text-slate-300">{slice.body}</p>
          </div>

          <div className="mt-2">
            <Button
              linkField={slice.button_link}
              label={slice.button_text}
            />
          </div>
        </div>

        {/* Wrapper Avatar dengan efek Glow */}
        <div className="row-start-1 md:col-start-2 md:row-end-3 relative group flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-emerald-400 rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-700"></div>
          <Avatar
            image={slice.avatar}
            className="relative max-w-[280px] md:max-w-sm w-full h-auto drop-shadow-2xl border-4 border-slate-800 rounded-full z-10"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Biography;