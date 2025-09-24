"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MapPin } from "lucide-react"
import { useState } from "react"

interface Project {
  id: string
  title: string
  pricePerHour: string
  status: "Paid" | "Not Paid"
  categories: string[]
  description: string
  location: string
  timeAgo: string
  logoColor: string
  logoIcon: string
}

interface ProjectCardsProps {
  projects: Project[]
}

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="border-b border-border py-4 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4 flex-1">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`w-12 h-12 ${project.logoColor} rounded-xl flex items-center justify-center text-white text-lg font-semibold flex-shrink-0 shadow-sm`}
          >
            {project.logoIcon}
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title and Status Row */}
            <motion.div 
              className="flex items-center gap-3 mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-semibold text-foreground text-sm">{project.title}</h3>
              <div className="w-px h-3 bg-muted-foreground"></div>
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  project.status === "Paid" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground"
                }`}
              >
                {project.status}
              </motion.span>
            </motion.div>

            {/* Price */}
            <motion.p 
              className="text-muted-foreground text-sm mb-4 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {project.pricePerHour}
            </motion.p>

            {/* Expandable Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {/* Category Pills */}
                  <motion.div 
                    className="flex gap-2 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.categories.map((category, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium cursor-pointer select-none shadow-sm"
                      >
                        {category}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Description */}
                  <motion.p 
                    className="text-muted-foreground text-sm leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Location and Time */}
                  <motion.div 
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <MapPin className="w-4 h-4" />
                    </motion.div>
                    <span className="text-xs font-medium">{project.location}</span>
                    <div className="w-px h-3 bg-border mx-1"></div>
                    <span className="text-xs">{project.timeAgo}</span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Chevron Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation()
            setIsExpanded(!isExpanded)
          }}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-muted text-muted-foreground flex-shrink-0 ml-3 shadow-sm"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  )
}

export function ProjectCards({ projects }: ProjectCardsProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: index * 0.1 + 0.3,
              mass: 0.8,
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}