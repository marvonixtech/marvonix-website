"use client";

import { useModal } from "@/context/ModalContext";

export function BlogCta() {
  const { openModal } = useModal();
  return (
    <div className="mt-16 rounded-[20px] border border-border bg-muted p-6 md:p-10 text-center font-[family-name:var(--font-outfit)]">
      <h2 className="text-[24px] md:text-[32px] font-semibold tracking-[-0.8px] text-card-foreground">
        Want this built for your business?
      </h2>
      <p className="mt-3 text-[16px] text-muted-foreground max-w-[480px] mx-auto leading-7">
        Tell us about the process slowing you down. We will put together a demo around your real workflow before you commit to anything.
      </p>
      <button
        onClick={openModal}
        className="mt-6 inline-flex min-h-[52px] items-center bg-primary text-primary-foreground rounded-[14px] px-6 text-[15px] font-semibold hover:opacity-90 transition-opacity cursor-pointer"
      >
        Start a Project
      </button>
    </div>
  );
}
