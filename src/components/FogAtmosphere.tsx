import { cn } from "../lib/utils";

type FogAtmosphereProps = {
  className?: string;
  variant?: "light" | "dark";
  subtle?: boolean;
};

export function FogAtmosphere({
  className,
  variant = "light",
  subtle = false,
}: FogAtmosphereProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "fog-atmosphere",
        variant === "dark" && "fog-atmosphere-dark",
        subtle && "fog-atmosphere-subtle",
        className,
      )}
    >
      <span className="fog-bank fog-bank-one" />
      <span className="fog-bank fog-bank-two" />
      <span className="fog-bank fog-bank-three" />
      <span className="fog-veil" />
    </div>
  );
}
