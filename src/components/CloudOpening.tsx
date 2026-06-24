export function CloudOpening() {
  return (
    <div aria-hidden="true" className="cloud-opening">
      <div className="cloud-door-panel cloud-door-left">
        <span className="cloud-door-puff cloud-door-puff-one" />
        <span className="cloud-door-puff cloud-door-puff-two" />
        <span className="cloud-door-puff cloud-door-puff-three" />
      </div>
      <div className="cloud-door-panel cloud-door-right">
        <span className="cloud-door-puff cloud-door-puff-one" />
        <span className="cloud-door-puff cloud-door-puff-two" />
        <span className="cloud-door-puff cloud-door-puff-three" />
      </div>
      <div className="cloud-opening-glow" />
    </div>
  );
}
