import Image from "next/image";
import CopyIp from "@/app/components/CopyIp";

export default function Home() {
  return (
    <section className="container space-y-4">
      <div className="hero rounded-box bg-base-200 py-8 shadow" style={{ backgroundImage: "url(/londondark.png)" }}>
        <div className="hero-content text-center">
          <div className="max-w-md bg-transparent text-white dark:text-base-content">
            <h1 className="text-6xl font-black">WorldMC</h1>
            <h2 className="text-4xl font-bold">Minecraft Earth</h2>
            <p className="py-6">
              Explore a 1:1000 Earth map in Minecraft. Build empires, engage in politics, and shape the global economy in this immersive,
              player-driven world.
            </p>
            <CopyIp />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg">
        <div className="hero">
          <div className="hero-content flex-col md:flex-row">
            <Image src="/old-towns/bank.jpg" alt="Minecraft Bank" width={300} height={300} className="max-w-sm rounded-box shadow" />
            <div className="space-y-4 py-4 text-center md:text-left">
              <h1 className="text-5xl font-bold">Jam Packed</h1>
              <p>
                Experience the thrill of a bustling Minecraft world like never before. WorldMC harnesses the power of Paper Folia, a
                cutting-edge server software, to support up to 500 players simultaneously. This means more interactions, grander cities, and
                epic battles on a scale you&apos;ve never seen in Minecraft. Join a vibrant community where every login brings new
                adventures and opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="hero-content flex-col md:flex-row-reverse">
            <Image
              src="/old-towns/skyscrapers.jpg"
              alt="Minecraft Skyscrapers"
              width={300}
              height={300}
              className="max-w-sm rounded-lg shadow"
            />
            <div className="space-y-4 py-4 text-center md:text-left">
              <h1 className="text-5xl font-bold">Power, Authority, Influence</h1>
              <p>
                Dive into a rich world of politics and economics with our enhanced Towny plugin. Found your own town, join alliances, and
                climb the ranks of power. Engage in diplomatic negotiations, run for office, or become a business tycoon. Every decision
                shapes the world around you. Will you be a benevolent leader, a shrewd diplomat, or a cunning entrepreneur? The choice is
                yours in this dynamic player-driven landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="hero-content flex-col md:flex-row">
            <Image src="/old-towns/rome.jpg" alt="Minecraft Rome" width={300} height={300} className="max-w-sm rounded-lg shadow" />
            <div className="space-y-4 py-4 text-center md:text-left">
              <h1 className="text-5xl font-bold">It&apos;s Your Destiny</h1>
              <p>
                Forge your own path in a world where players hold the reins. Our server features a player-run gold economy, where supply and
                demand are dictated by the community. Start a business, trade rare resources, or become a master craftsman. With
                player-managed shops and a fluctuating market, your economic savvy could lead you to untold riches. But remember, in this
                player-driven server, your actions ripple across the world. Will you rise to the challenge and shape the destiny of WorldMC?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
