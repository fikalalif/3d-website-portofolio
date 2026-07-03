import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import { formatDate } from "@/utils/formatDate";
import ProjectCarousel from "@/components/ProjectCarousel"; // 1. Import komponen carousel

// Definisikan tipe data yang lebih sederhana untuk page
type Page = {
  data: {
    title: string;
    date: string | null;
    gallery?: { url: string; alt: string }[]; // 2. Tambahkan definisi tipe untuk gallery
    slices?: any[]; // Anda bisa membuat ini lebih spesifik jika perlu
  };
  tags: string[];
};

export default function ContentBody({ page }: { page: Page }) {
  const formattedDate = page.data.date ? formatDate(page.data.date) : null;

  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        {/* 3. Render Carousel jika data gallery ada dan tidak kosong */}
        {page.data.gallery && page.data.gallery.length > 0 && (
          <div className="mb-10 md:mb-14">
            <ProjectCarousel images={page.data.gallery} />
          </div>
        )}

        <Heading as="h1">{page.data.title}</Heading>

        <div className="flex flex-wrap gap-4 text-yellow-400">
          {page.tags.map((tag) => (
            <span key={tag} className="text-xl font-bold">
              {tag}
            </span>
          ))}
        </div>

        {formattedDate && (
          <p className="mt-8 border-b border-slate-600 pb-2 text-xl font-medium text-slate-300">
            {formattedDate}
          </p>
        )}

        <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
          {/* Di sini Anda bisa merender konten dari `page.data.slices` jika ada */}
        </div>
      </div>
    </Bounded>
  );
}
