const TextBlock = ({ title, description, hashtags, isOffline }) => {
  const offlineText = <span className="TextBlock__Offline">[Offline]</span>;

  return (
    <div className="TextBlock">
      <h3 className="TextBlock__Heading">
        {title} {isOffline && offlineText}
      </h3>
      <p className="TextBlock__Description">{description}</p>
      <p className="TextBlock__Hashtags">{hashtags}</p>
    </div>
  );
};

export default TextBlock;
