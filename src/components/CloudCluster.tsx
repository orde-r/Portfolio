import { cn } from "../lib/utils";

type CloudClusterProps = {
  className?: string;
};

export function CloudCluster({ className }: CloudClusterProps) {
  return (
    <div aria-hidden="true" className={cn("cloud-cluster", className)}>
      <span className="cloud-body">
        <span className="cloud-shadow" />
        <span className="cloud-puff cloud-puff-one" />
        <span className="cloud-puff cloud-puff-two" />
        <span className="cloud-puff cloud-puff-three" />
        <span className="cloud-puff cloud-puff-four" />
        <span className="cloud-puff cloud-puff-base" />
        <span className="cloud-shine" />
      </span>
    </div>
  );
}
