import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        className="relative"
        src="/clown.jpg"
        alt="Clown"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
