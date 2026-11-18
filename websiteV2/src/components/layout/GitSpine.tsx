/** Decorative git-branch spine from the original mockup, hidden below xl. */
export function GitSpine() {
  return (
    <div className="pointer-events-none absolute inset-y-16 bottom-24 left-1/2 z-0 hidden w-px -translate-x-1/2 bg-linear-to-b from-primary via-secondary to-tertiary opacity-20 xl:block">
      <div className="sticky top-40 relative -left-[4px] h-2.5 w-2.5 animate-ping rounded-full bg-secondary shadow-[0_0_12px_#51dad4]" />
    </div>
  );
}
