import type { PropsWithChildrenCx } from "@/types/shared"

function LayoutSection({ children, className }: PropsWithChildrenCx) {
  return (
    <section className={`max-w-7xl px-8 mx-auto ${className}`}>
      {children}
    </section>
  )
}

export default LayoutSection
