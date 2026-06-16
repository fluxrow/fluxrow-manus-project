// Shared Framer Motion variants for Fluxrow surfaces.
// Imported by Section primitives so motion feels consistent across pages.

export const fadeUp: any = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  }),
};

export const fadeIn: any = {
  hidden: { opacity: 0 },
  show: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};
