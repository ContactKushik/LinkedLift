import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">LinkedIn GenAI</h1>
        <p className="mt-4 text-lg text-gray-600">
          Your AI-powered assistant for rewriting LinkedIn posts.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="text-center">
        <p className="mt-4 text-lg text-gray-600">
          Transform your LinkedIn presence with our AI-powered rewriting tool.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Get started by clicking the button below.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
}
