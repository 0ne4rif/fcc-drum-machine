function Pad({ buttonId, handleClick, id, src}) {
  return (
    <button
      className="btn btn-dark drum-pad"
      id={buttonId}
      onClick={handleClick}
    >
      {id}
      <audio
        className="clip"
        id={id}
        src={src}
        preload="auto"
      />
    </button>
  );
}

export default Pad;
