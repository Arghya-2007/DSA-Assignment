import { Badge } from "./ui/Badge";

interface ComplexityBadgeProps {
  time: string;
  space: string;
}

export function ComplexityBadge({ time, space }: ComplexityBadgeProps) {
  return (
    <div className="flex gap-3 items-center">
      <div className="flex flex-col gap-1">
        <span className="text-[--text-secondary] text-[--text-xs] uppercase tracking-wide">Time</span>
        <Badge variant="accent">{time}</Badge>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[--text-secondary] text-[--text-xs] uppercase tracking-wide">Space</span>
        <Badge variant="warm">{space}</Badge>
      </div>
    </div>
  );
}
