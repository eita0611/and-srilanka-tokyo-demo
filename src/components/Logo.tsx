export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-mincho leading-none tracking-[0.06em] ${className}`}>
      <span className="font-caslon text-[1.35em] italic text-spice-light">&amp;</span>
      <span className="ml-[0.08em]">スリランカTOKYO</span>
    </span>
  );
}
