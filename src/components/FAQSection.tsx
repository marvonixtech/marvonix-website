'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlusIcon, MinusIcon } from '@/components/icons'
import { faqs, type FAQ } from '@/lib/faqs'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/animations'


function FAQItem({ faq, index, openIndex, setOpenIndex }: {
  faq: FAQ
  index: number
  openIndex: number | null
  setOpenIndex: (i: number | null) => void
}) {
  const isOpen = openIndex === index
  return (
    <motion.div variants={staggerItem}>
      <div className="bg-card rounded-[20px] overflow-hidden border border-border shadow-xs">
        <button
          className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
          onClick={() => setOpenIndex(isOpen ? null : index)}
          aria-expanded={isOpen}
        >
          <span className="font-[Outfit] text-[17px] text-foreground flex-1 pr-4 font-medium">
            {faq.question}
          </span>
          <div className="w-5 h-5 text-muted-foreground flex-shrink-0">
            {isOpen ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
          </div>
        </button>
        {isOpen && (
          <div className="px-6 pb-6">
            <div className="pt-4 border-t border-border">
              <p className="text-[14px] text-muted-foreground leading-[22px] font-[Outfit]">
                {faq.answer}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const leftColumn = faqs.filter((_, i) => i % 2 === 0)
  const rightColumn = faqs.filter((_, i) => i % 2 !== 0)

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="marvonix-label">ANSWERS</p>
          <h2 className="marvonix-h2 mt-3">Frequently Asked Questions</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <motion.div
            className="flex flex-col gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {leftColumn.map((faq) => {
              const originalIndex = faqs.indexOf(faq)
              return (
                <FAQItem
                  key={originalIndex}
                  faq={faq}
                  index={originalIndex}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              )
            })}
          </motion.div>

          <motion.div
            className="flex flex-col gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {rightColumn.map((faq) => {
              const originalIndex = faqs.indexOf(faq)
              return (
                <FAQItem
                  key={originalIndex}
                  faq={faq}
                  index={originalIndex}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
