'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/animations'
import { useModal } from '@/context/ModalContext'

export function ROICalculator() {
  const { openModal } = useModal()
  const [teamSize, setTeamSize] = useState(12)
  const [weeklyHours, setWeeklyHours] = useState(10)
  const [hourlyCost, setHourlyCost] = useState(40)

  const hoursLost = teamSize * weeklyHours * 4
  const costLost = hoursLost * hourlyCost
  const savings = Math.round(costLost * 0.75)

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="marvonix-label">ESTIMATE</p>
          <h2 className="marvonix-h2 mt-3">What Would AI Earn You?</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Left: sliders */}
          <motion.div className="flex flex-col gap-8 bg-card rounded-[20px] p-8 border border-border shadow-sm" variants={staggerItem}>
            {[
              { id: "teamSize", label: "Team size", value: teamSize, min: 1, max: 100, display: String(teamSize), setter: setTeamSize },
              { id: "weeklyHours", label: "Weekly hours spent on manual work (per employee)", value: weeklyHours, min: 1, max: 80, display: String(weeklyHours), setter: setWeeklyHours },
              { id: "hourlyCost", label: "Average hourly cost ($)", value: hourlyCost, min: 10, max: 500, display: `$${hourlyCost}`, setter: setHourlyCost },
            ].map(({ id, label, value, min, max, display, setter }) => (
              <div key={id}>
                <div className="flex justify-between mb-2">
                  <label htmlFor={id} className="font-[Outfit] text-[15px] text-muted-foreground flex-1 pr-4">{label}</label>
                  <span className="font-[Outfit] text-[15px] text-foreground font-medium flex-shrink-0">{display}</span>
                </div>
                <input
                  id={id}
                  type="range"
                  min={min}
                  max={max}
                  value={value}
                  onChange={(e) => setter(Number(e.target.value))}
                  className="w-full h-1 rounded-full appearance-none bg-border accent-primary cursor-pointer"
                />
              </div>
            ))}
          </motion.div>

          {/* Right: result card */}
          <motion.div className="bg-card rounded-[20px] p-8 flex flex-col justify-between border border-border shadow-sm" variants={staggerItem}>
            <div>
              <p className="font-[Outfit] text-[22px] font-semibold text-foreground leading-relaxed mb-3">
                Your team loses {hoursLost.toLocaleString()} hours a month on work that can be automated.
              </p>
              <p className="font-[Outfit] text-[22px] font-semibold text-foreground leading-relaxed">
                That&apos;s ${costLost.toLocaleString()} a month in time you&apos;re not getting back.
              </p>
              <p className="mt-4 text-[15px] text-muted-foreground font-[Outfit]">
                Marvonix typically recovers 75% of that. That&apos;s ${savings.toLocaleString()} back every month.
              </p>
            </div>
            <button
              onClick={openModal}
              className="mt-6 w-full bg-primary text-primary-foreground text-center rounded-[14px] py-4 text-[15px] font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Get Custom Automation Plan
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
