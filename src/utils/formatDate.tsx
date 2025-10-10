

// Ubah tipe `DateField` menjadi `string`
export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);

  // Opsi untuk pemformatan
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format tanggalnya
  return new Intl.DateTimeFormat("en-US", options).format(date);
}