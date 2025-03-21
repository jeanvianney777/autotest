import { Badge } from "@/components/ui/badge";

export default function GenerationStatusBadge() {
  return (
    <Badge variant="outline" className="gap-1.5">
      <span
        className="size-1.5 rounded-full bg-amber-500"
        aria-hidden="true"
      ></span>
      Generation pending
    </Badge>
  );
}
