/** Continuous git rail that anchors the desktop layout, left of the content. */
export function CommitRail() {
  return (
    <div className="animate-flow-rail pointer-events-none absolute top-0 bottom-0 left-[52px] z-20 hidden w-[2px] bg-linear-to-b from-primary-container via-secondary-container to-tertiary opacity-70 xl:block" />
  );
}
