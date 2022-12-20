export default function Card({ repoName, repoDesc, language, url }) {
  return (
    <div
      onClick={() => (window.location.href = url)}
      className="card w-96 bg-primary text-primary-content"
    >
      <div className="card-body">
        <h2 className="card-title">{repoName}</h2>
        <p>{repoDesc}</p>
        <p>{language}</p>
      </div>
    </div>
  );
}