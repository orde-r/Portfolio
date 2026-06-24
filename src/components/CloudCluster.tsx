import { cn } from "../lib/utils";

type CloudClusterProps = {
  className?: string;
  dark?: boolean;
};

export function CloudCluster({ className, dark = false }: CloudClusterProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("cloud-cluster", dark && "cloud-cluster-dark", className)}
    >
      <span className="cloud-puff cloud-puff-one" />
      <span className="cloud-puff cloud-puff-two" />
      <span className="cloud-puff cloud-puff-three" />
      <span className="cloud-puff cloud-puff-base" />
    </div>
  );
}
