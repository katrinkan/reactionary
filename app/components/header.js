import Eye from "./eye";

export default function Header({ title, iris }) {
  return (
    <section className="header">
      <div>
        <h2>{title}</h2>
        <h3>view = function(state)</h3>
      </div>
      <Eye individual={iris} />
    </section>
  );
}
