"use client";

import { createContext, useContext, useState } from "react";
import { ProjectInquiryModal } from "@/components/ProjectInquiryModal";

interface ModalContextValue {
  openModal: () => void;
}

const ModalContext = createContext<ModalContextValue>({ openModal: () => {} });

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}
      <ProjectInquiryModal open={open} onClose={() => setOpen(false)} />
    </ModalContext.Provider>
  );
}
