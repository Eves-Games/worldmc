import React from "react";
import { fetchTownyObjects } from "../actions";
import { PageControls } from "./PageControls";
import NationButton from "@/components/towny/NationButton";
import TownButton from "@/components/towny/TownButton";
import ResidentButton from "@/components/towny/ResidentButton";

type TownyObjectType = "nations" | "towns" | "residents";

export default async function TownyTable({ query, page, filter }: { query: string; page: number; filter: string }) {
  const townyObjectType: TownyObjectType = (filter.toLowerCase() as TownyObjectType) || "residents";
  const townyObjects = await fetchTownyObjects(page, query, townyObjectType);

  const ButtonComponent = {
    nations: NationButton,
    towns: TownButton,
    residents: ResidentButton,
  }[townyObjectType];

  return (
    <>
      <div className="space-y-2">
        {townyObjects &&
          townyObjects.data.map((item) => (
            <ButtonComponent key={item.UUID} item={item} {...(townyObjectType === "residents" && { showTown: true })} />
          ))}
      </div>
      <PageControls totalPages={townyObjects?.totalPages || 0} />
    </>
  );
}
