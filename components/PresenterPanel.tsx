import { motion } from "motion/react"
import { PRESENTER_STEPS } from "../apps/neobank/presenter"
import { Step } from "../apps/neobank/state"
import {
  CutoutCard,
  CutoutCardAction,
  CutoutCardContent,
  CutoutCardFooter,
  CutoutCardImage,
  CutoutCardInsetLabel,
  CutoutCardMedia,
  CutoutCardOverlay,
  CutoutCardPin,
  cutoutCardSurfaceClassName,
  CutoutCorner,
  useCutoutContentStaggerVariants,
} from "./ui/cutout-card"

const JOURNEY_IMAGES: Record<string, string> = {
  "Journey A": "/images/apple-wallpaper.webp",
  "Journey B": "/images/apple-wallpaper.webp",
  "Close":     "/images/apple-wallpaper.webp",
}

export const PresenterPanel = (props: { step: Step; visible: boolean }) => {
  if (!props.visible) return null

  const content = PRESENTER_STEPS[props.step]
  const stagger = useCutoutContentStaggerVariants()
  const imageSrc = JOURNEY_IMAGES[content.journey] ?? "/placeholders/apple-wallpaper.jpg"

  return (
    <div class="relative w-full max-w-[340px] flex-none">
      <CutoutCard className={cutoutCardSurfaceClassName}>
        <CutoutCardMedia className="h-40">
          <CutoutCardImage
            alt={content.journey}
            sizes="(max-width: 768px) 100vw, 340px"
            src={imageSrc}
          />
          <CutoutCardOverlay />
          <CutoutCardInsetLabel className="bottom-0 left-0 rounded-tr-[20px] bg-[#1c1c1e] px-5 py-3">
            <span className="font-semibold text-[11px] text-neutral-400 uppercase tracking-widest">
              {content.journey}
            </span>
            <CutoutCorner className="absolute -right-[31px] -bottom-px rotate-90 text-[#1c1c1e]" />
            <CutoutCorner className="absolute -top-[31px] -left-px rotate-90 text-[#1c1c1e]" />
          </CutoutCardInsetLabel>
          <CutoutCardPin className="top-0 right-0 rounded-bl-[16px] bg-white px-4 py-2 font-semibold text-neutral-900 text-sm shadow-md">
            Step {props.step} / 8
            <CutoutCorner
              className="absolute top-0 -left-[23px] -rotate-90 text-white"
              size={24}
            />
            <CutoutCorner
              className="absolute right-0 -bottom-[23px] -rotate-90 text-white"
              size={24}
            />
          </CutoutCardPin>
        </CutoutCardMedia>

        <CutoutCardContent>
          <motion.div
            animate="show"
            className="contents"
            initial="hidden"
            variants={stagger.container}
          >
            <motion.h2
              className="mb-2 text-balance font-semibold text-white text-xl leading-snug"
              variants={stagger.item}
            >
              {content.title}
            </motion.h2>
            <motion.p
              className="mb-4 text-pretty text-neutral-400 text-sm leading-relaxed"
              variants={stagger.item}
            >
              {content.body}
            </motion.p>
            <motion.div variants={stagger.item}>
              <CutoutCardFooter className="border-white/10 border-t pt-4 flex-col items-start gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
                  Talking points
                </span>
                <ul className="flex flex-col gap-2 w-full">
                  {content.talkingPoints.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-neutral-300 leading-relaxed pl-3 border-l-2 border-violet-400/50"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </CutoutCardFooter>
            </motion.div>
          </motion.div>
        </CutoutCardContent>
      </CutoutCard>
    </div>
  )
}
