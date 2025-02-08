import { SlashIcon } from "lucide-react";

export function BrandLogo() {
  return (
    <span className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg">
      <SlashIcon className="size-8" />
      <span>Saas clone</span>
    </span>
  );
}
