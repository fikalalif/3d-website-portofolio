import Bounded from "@/components/Bounded";

// Definisikan tipe untuk props slice
type TextBlockProps = {
  slice: {
    text: string; // Teks sekarang hanya string biasa
  };
};

/**
 * Komponen untuk "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <Bounded>
      <div className="prose prose-lg prose-invert max-w-prose">
        <p>{slice.text}</p>
      </div>
    </Bounded>
  );
};

export default TextBlock;