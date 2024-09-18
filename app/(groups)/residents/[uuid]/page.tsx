import { getResident } from "@/lib/bridge";
import { formatDateTime } from "@/lib/format";
import { Bot, Crown, LandPlot, Lock, Shield, Star, Users } from "lucide-react";
import Link from "next/link";
import MinecraftItem from "@/components/minecraft/MinecraftItem";
import clsx from "clsx";
import ResidentButton from "@/components/towny/ResidentButton";
import NationButton from "@/components/towny/NationButton";
import TownButton from "@/components/towny/TownButton";

export const revalidate = 60;

const replaceUnderscoresWithSpaces = (input: string): string => input.replace(/_/g, " ");

export async function generateMetadata({ params }: { params: { uuid: string } }) {
  const resident = await getResident(params.uuid);

  return {
    title: resident.name,
    description:
      resident.name +
      " is one of the thousands of residents on WorldMC. Join " +
      resident.name +
      " on WorldMC and explore Minecraft Earth together!",
  };
}

export default async function Page({ params }: { params: { uuid: string } }) {
  const resident = await getResident(params.uuid);

  return (
    <section className="space-y-4">
      <div className="flex gap-4 rounded-box bg-base-200 p-4 shadow">
        <figure className="drop-shadow">
          <div
            className="banner bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(https://crafatar.com/renders/body/${resident.UUID}?size=156&default=MHF_Steve&overlay)` }}
          />
        </figure>
        <div className="flex w-full flex-col justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black">{resident.name}</h1>
              <span
                className={clsx("badge badge-xs", resident.isOnline ? "badge-primary" : "badge-error")}
                title={resident.isOnline ? "Online" : "Offline"}
              ></span>
              {resident.isAdmin && (
                <div className="badge badge-outline badge-lg">
                  <Star className="mr-1 size-4" /> Admin
                </div>
              )}
            </div>

            <p>
              <span>Resident of </span>
              {resident.town ? (
                <Link href={`/towns/${resident.town.UUID}`} className="link-hover link-secondary">
                  {replaceUnderscoresWithSpaces(resident.town.name)}
                </Link>
              ) : (
                "the Wild"
              )}
            </p>
            <i>Joined {formatDateTime(resident.registered)}</i>
          </div>

          <div className="flex flex-wrap gap-2">
            {resident.isKing ? (
              <div className="badge badge-success badge-lg">
                <Crown className="mr-1 size-4" /> King
              </div>
            ) : (
              resident.isMayor && (
                <div className="badge badge-primary badge-lg">
                  <Shield className="mr-1 size-4" /> Mayor
                </div>
              )
            )}

            {resident.isNPC && (
              <div className="badge badge-neutral badge-lg">
                <Bot className="mr-1 size-4" /> NPC
              </div>
            )}
            {resident.jailStatus.isJailed && (
              <div className="badge badge-accent badge-lg">
                <Lock className="mr-1 size-4" /> Jailed
              </div>
            )}
            <div className="badge badge-lg">
              <MinecraftItem imageSrc="/minecraft/combined/gold_ingot.png" className="mr-1 size-4" />{" "}
              {resident.bankAccount.toLocaleString()}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="badge badge-info badge-lg">
              <LandPlot className="mr-1 size-4" /> {resident.plotsCount}
            </div>
            <div className="badge badge-info badge-lg">
              <Users className="mr-1 size-4" /> {resident.friends.length} Friends
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold">About</h2>
      <p>{resident.about}</p>
      <h2 className="text-xl font-bold">Residence</h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {!resident.town && "This player does not have any residence."}
        {resident.town && (
          <div className={clsx(!resident.nation && "col-span-full")}>
            <TownButton item={resident.town} />
          </div>
        )}
        {resident.nation && <NationButton item={resident.nation} />}
      </div>
      <h2 className="text-xl font-bold">Friends ({resident.friends.length})</h2>
      {resident.friends.length == 0 ? (
        <p>This resident has no friends.</p>
      ) : (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {resident.friends.map((resident) => (
            <ResidentButton item={resident} key={resident.UUID} />
          ))}
        </div>
      )}
    </section>
  );
}
