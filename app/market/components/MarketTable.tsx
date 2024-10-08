import { fetchShops } from "../actions";
import { PageControls } from "./PageControls";
import React from "react";
import ShopCard from "@/app/market/components/ShopCard";
import { ShopSearchProps } from "@/lib/bridge";

export default async function MarketTable(params: ShopSearchProps) {
  const shops = await fetchShops(params);

  return (
    <>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3">
        {shops && shops.data.map((shop) => <ShopCard key={shop.id} shop={shop} />)}
      </div>
      <PageControls totalPages={shops?.totalPages || 0} />
    </>
  );
}
