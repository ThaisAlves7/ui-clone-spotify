import { Footer } from "@/components/Footer";
import { Siderbar } from "@/components/Siderbar";
import {
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  Laptop2,
  LayoutList,
  Library,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Search,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Siderbar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/imagine-dragons-envolve.jpg"
                width={104}
                height={104}
                alt="Capa de Album"
              />
              <strong>Imagine Dragons Envolve</strong>
              <button className=" w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/carol-biazin-beijo-judas.jpg"
                width={104}
                height={104}
                alt="Capa de Album"
              />
              <strong>Carol Biazin</strong>
              <button className=" w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/shakira-session53.jpg"
                width={104}
                height={104}
                alt="Capa de Album"
              />
              <strong>Shakira Session #53</strong>
              <button className=" w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/hailee-steinfeld-half-written-story.jpg"
                width={104}
                height={104}
                alt="Capa de Album"
              />
              <strong>Hailee Steinfeld</strong>
              <button className=" w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
              <button>
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/billie-eilish-happier-than-ever.jpg"
                width={104}
                height={104}
                alt="Capa de Album"
              />
              <strong>Billie Eilish</strong>
              <button className=" w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/sofia-carson.jpg"
                width={104}
                height={104}
                alt="Capa de Album"
              />
              <strong>Sofia Carson</strong>
              <button className=" w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Thais Alves Pereira
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/carol-biazin-beijo-judas.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa de Album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Nome dos cantores da playlist
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/imagine-dragons-envolve.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa de Album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Nome dos cantores da playlist
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/billie-eilish-happier-than-ever.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa de Album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Nome dos cantores da playlist
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/sofia-carson.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa de Album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Nome dos cantores da playlist
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/hailee-steinfeld-half-written-story.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa de Album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Nome dos cantores da playlist
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
