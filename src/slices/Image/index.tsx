import Image from "next/image";

type ImageProps = {
  slice: {
    image: {
      url: string;
      alt: string;
    };
  };
};

const ImageSlice = ({ slice }: ImageProps): JSX.Element => {
  return (
    <Image
      src={slice.image.url}
      alt={slice.image.alt}
      width={1000} // Ganti dengan lebar yang sesuai
      height={600} // Ganti dengan tinggi yang sesuai
      className="not-prose my-10 h-auto w-full rounded-md md:my-14 lg:my-16"
    />
  );
};

export default ImageSlice;