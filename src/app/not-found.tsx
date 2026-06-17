import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Marvonix",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="bg-background min-h-screen overflow-x-clip">
      <Navbar />
      <main className="pt-[72px] flex flex-col items-center justify-center min-h-[calc(100vh-72px)] px-6 text-center">
        <p
          className="text-[13px] font-semibold tracking-[2px] uppercase text-muted-foreground mb-6"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Error 404
        </p>

        <h1
          className="text-[120px] md:text-[200px] font-bold leading-none tracking-[-6px] text-foreground/10 select-none mb-0"
          style={{ fontFamily: "Outfit, sans-serif" }}
          aria-hidden="true"
        >
          404
        </h1>

        <div className="-mt-8 md:-mt-14 mb-8">
          <h2
            className="text-[28px] md:text-[36px] font-semibold tracking-[-1px] text-foreground"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Page not found
          </h2>
          <p
            className="text-[15px] text-muted-foreground mt-3 max-w-[400px] mx-auto leading-relaxed"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center bg-primary text-primary-foreground rounded-[14px] px-6 py-4 text-[15px] font-semibold hover:opacity-90 transition-opacity"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
