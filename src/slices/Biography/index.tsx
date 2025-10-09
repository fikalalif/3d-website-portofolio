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
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          {slice.heading}
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <p>{slice.body}</p>
        </div>
        <Button
          linkField={slice.button_link}
          label={slice.button_text}
        />

        <Avatar
          image={slice.avatar}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;