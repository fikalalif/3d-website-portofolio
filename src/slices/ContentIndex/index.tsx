import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import ContentList from "./ContentList";

type ContentIndexProps = {
  slice: {
    heading: string;
    description: string;
    items: any[]; // Sesuaikan dengan tipe data Anda
    contentType: string;
    viewMoreText: string;
    fallbackItemImage: string;
  };
};

const ContentIndex = ({ slice }: ContentIndexProps): JSX.Element => {
  return (
    <Bounded data-slice-type="blog_post_index" data-slice-variation="default">
      <Heading size="xl" className="mb-8">
        {slice.heading}
      </Heading>
      {slice.description && (
        <div className="prose prose-xl prose-invert mb-10">
          <p>{slice.description}</p>
        </div>
      )}
      <ContentList
        items={slice.items}
        contentType={slice.contentType}
        viewMoreText={slice.viewMoreText}
        fallbackItemImage={slice.fallbackItemImage}
      />
    </Bounded>
  );
};

export default ContentIndex;