'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlusIcon, MinusIcon } from '@/components/icons'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/animations'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'How can AI automation help my business?',
    answer: "AI automation takes the manual work off your team's plate. Things like lead management, data processing, and customer support run on their own, freeing your people up for the work that actually moves the business.",
  },
  {
    question: 'What industries do you serve?',
    answer: 'We work with businesses across SaaS, e-commerce, finance, healthcare, retail, and more. If you have workflows that repeat, we can automate them.',
  },
  {
    question: 'How long does it take to implement AI automation?',
    answer: 'Most projects are up and running within 1 to 3 weeks, depending on complexity. We start with a discovery session, build and test everything, then hand it over with a full walkthrough.',
  },
  {
    question: 'Is my data secure with AI automation?',
    answer: 'Yes. We only work with reputable, enterprise-grade platforms and follow strict security practices throughout. Your data stays yours.',
  },
  {
    question: 'Can I get a demo before committing?',
    answer: "Yes. Just fill out the Start Project form and we'll put together a demo built around your actual business, not a generic slide deck. You'll see exactly what we'd build before committing to anything.",
  },
  {
    question: 'What tools does Marvonix integrate with?',
    answer: 'We build on Make, Zapier, n8n, and custom APIs. On the integration side that covers Airtable, Notion, Google Sheets, HubSpot, Gmail, WhatsApp Business, Shopify, and OpenAI. If your business already uses a platform, we can almost certainly plug into it.',
  },
  {
    question: 'Is Marvonix right for startups or larger businesses?',
    answer: 'Both. Startups use us to build lean, automated operations from day one so they can scale without hiring prematurely. Established businesses use us to remove the manual bottlenecks that slow down their existing teams. We work across the UK and India with SMEs and growing companies in any industry.',
  },
  {
    question: 'Does Marvonix comply with GDPR?',
    answer: 'Yes. We only use reputable, enterprise-grade platforms that maintain GDPR compliance, and we never store or process your customer data outside of the tools you already approve. All automation workflows are built with data minimisation in mind. If you have specific compliance requirements, we discuss them in the discovery session.',
  },
]

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
