export default function Card({ item }) {
  return (
    <div className="gridItem" key={item.index}>
      <h4>{item.title}</h4>
      {item.src ? (
        <div>
          <iframe
            title={item.title}
            src={item.src}
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            className="codeframe"
          />
        </div>
      ) : (
        <p>{item.content}</p>
      )}
    </div>
  );
}
