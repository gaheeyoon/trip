import "./TotalCount.css";

export default function Total({ lists }) {
  return (
    <div className="totalCountArea mw">
      <strong>Total</strong>
      <span>{lists.length}</span>
    </div>
  );
}
