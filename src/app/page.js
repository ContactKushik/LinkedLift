import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-900 text-zinc-100 font-sans flex flex-col items-center justify-center px-6 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">LinkedInLift</h1>
        <p className="text-zinc-400 text-sm sm:text-base mt-1">
          Rewrite Smarter. Post Better.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-10">
        {/* Left: Hero Image with Overlay */}
        <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden border border-zinc-800 shadow-lg">
          <Image
            src="/hero-image2.webp"
            alt="LinkedIn Extension Preview"
            width={800}
            height={600}
            className="w-full object-contain"
          />

          {/* Mock Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-zinc-800/90 backdrop-blur-md p-4 flex flex-col gap-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-zinc-300">Editing LinkedIn Post</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md font-medium text-xs">
                Rewrite
              </button>
            </div>
            <p className="text-zinc-200 italic">
              Rewritten: Boost your visibility with a professional tone...
            </p>
            <div className="flex gap-2">
              {["Professional", "Friendly", "BOLD"].map((tone) => (
                <button
                  key={tone}
                  className="bg-zinc-700 border border-zinc-600 px-3 py-1 rounded hover:bg-zinc-600 transition text-xs"
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Quote + Steps */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {/* Quote/Description */}
          <blockquote className="text-zinc-300 text-lg leading-relaxed border-l-4 border-blue-600 pl-4 italic">
            "Take your LinkedIn game to the next level with AI-powered rewrites
            that sound like you—just better."
          </blockquote>

          {/* Steps */}
          <div className="flex flex-col gap-4">
            {[
              {
                title: "1. Download ZIP",
                desc: "Get the extension ZIP file from our website.",
              },
              {
                title: "2. Enable Developer Mode",
                desc: "Go to Chrome Extensions and toggle Developer Mode.",
              },
              {
                title: "3. Load Unpacked",
                desc: "Click 'Load Unpacked' and select the unzipped folder.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-zinc-800 p-4 rounded-lg border border-zinc-700"
              >
                <h3 className="font-semibold text-base mb-1">{step.title}</h3>
                <p className="text-zinc-400 text-sm">{step.desc}</p>
              </div>
            ))}
            <div>
              <button className="text-bold text-2xl bg-blue-600 hover:bg-blue-700 text-white  rounded-md font-medium w-full py-5">
                <a href="https://github.com/ContactKushik/LinkedLift-/raw/refs/heads/main/public/LinkedLift.zip">
                  Download Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
