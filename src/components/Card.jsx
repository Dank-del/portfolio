export default function Card({ repoName, repoDesc, language, url }) {
  return (
    <div
      onClick={() => (window.location.href = url)}
      className="card w-89 bg-primary text-primary-content relative"
    >
      <div className="card-body">
        <h2 className="card-title">{repoName}</h2>
        <p className="font-mono">{repoDesc}</p>
        <strong>{language}</strong>
      </div>
    </div>
  );
}
