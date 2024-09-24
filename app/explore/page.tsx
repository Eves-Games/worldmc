import { SearchBar } from "./components/SearchBar";
import TownyTable from "./components/TownyTable";
import { Metadata } from "next";

export const revalidate = 900;

export const metadata: Metadata = {
  title: "Explore",
};

export default function Page({ searchParams }: { searchParams: { query?: string; page?: number; filter?: string } }) {
  const page = Number(searchParams?.page || 1);
  const query = searchParams?.query || "";
  const filter = searchParams?.filter || "";

  return (
    <section className="container space-y-4 text-center">
      <h1 className="text-5xl font-black">Explore</h1>
      <SearchBar placeholder="Search Earth..." />
      <TownyTable page={page} query={query} filter={filter} />
    </section>
  );
}
