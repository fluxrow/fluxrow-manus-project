"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useIsMobile } from "../../hooks/use-mobile"
import ImageWithFallback from "./image-with-fallback"

interface ExpandableItem {
  id: string
  title: string
  subtitle?: string
  description: string
  expandedContent?: string
  image?: string
  icon?: string
  badge?: string
  badgeColor?: string
  categories?: string[]
  result?: string
}

interface MobileExpandableCardsProps {
  items: ExpandableItem[]
  title?: string
  subtitle?: string
}

function ExpandableCard({ item }: { item: ExpandableItem }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="glass-card p-6 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4 flex-1">
          {/* Icon/Image */}
          {item.image || item.icon ? (
            <div className="w-12 h-12 flex-shrink-0">
              {item.image ? (
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 rounded-xl object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white text-lg font-semibold">
                  {item.icon}
                </div>
              )}
            </div>
          ) : null}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-semibold text-white text-sm font-space-grotesk">
                {item.title}
              </h3>
              {item.badge && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  item.badgeColor || "bg-green-500/20 text-green-400"
                }`}>
                  {item.badge}
                </span>
              )}
            </div>

            {item.subtitle && (
              <p className="text-cyan-400 text-sm mb-2 font-space-grotesk">
                {item.subtitle}
              </p>
            )}

            <p className="text-white/80 text-sm leading-relaxed font-space-grotesk">
              {item.description}
            </p>

            {/* Result badge */}
            {item.result && (
              <div className="mt-3">
                <span className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {item.result}
                </span>
              </div>
            )}

            {/* Expandable Content */}
            <AnimatePresence>
              {isExpanded && item.expandedContent && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-4"
                >
                  {/* Categories */}
                  {item.categories && (
                    <motion.div 
                      className="flex gap-2 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.categories.map((category, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </motion.div>
                  )}

                  {/* Expanded Description */}
                  <motion.p 
                    className="text-white/90 text-sm leading-relaxed font-space-grotesk"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.expandedContent}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Chevron Button */}
        {item.expandedContent && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation()
              setIsExpanded(!isExpanded)
            }}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white flex-shrink-0 ml-3"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}

export function MobileExpandableCards({ items, title, subtitle }: MobileExpandableCardsProps) {
  const isMobile = useIsMobile()

  return (
    <div className="w-full">
      {title && (
        <div className="text-center mb-8">
          <h2 className="section-title font-space-grotesk">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/80 text-lg mt-4 font-space-grotesk">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className={`${isMobile ? 'space-y-4' : 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: index * 0.1 + 0.3,
            }}
          >
            <ExpandableCard item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}