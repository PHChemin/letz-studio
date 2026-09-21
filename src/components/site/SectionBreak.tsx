export function SectionBreak() {
  return (
    <div className="section-break px-6 md:px-10" aria-hidden>
      <span className="section-break-rail" />
      <span className="section-break-mark">
        <img
          src="/images/sticker-heart.png"
          alt=""
          className="h-10 w-10 object-contain drop-shadow-sm md:h-12 md:w-12"
          width={48}
          height={48}
        />
      </span>
      <span className="section-break-rail" />
    </div>
  )
}
