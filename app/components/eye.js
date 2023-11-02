export default function Eye({ individual }) {
  return (
    <div className="stage">
      <figure className="ball">
        <span className="shadow"></span>
        <span className={`iris ${individual}`}></span>
      </figure>
    </div>
  );
}
