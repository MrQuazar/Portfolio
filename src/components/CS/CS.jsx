import "../LHS/Side.scss";

export default function CS({ headerText, children }) {
  return (
    <div className="side side--center">
      {headerText && <h3>{headerText}</h3>}
      {children}
    </div>
  );
}
