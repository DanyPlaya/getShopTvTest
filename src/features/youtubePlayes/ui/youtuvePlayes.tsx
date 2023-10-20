type YoutubeEmbed = {
  width: string;
  height: string;
  embedId: string;
};
export const YoutubeEmbed = (props: YoutubeEmbed) => {
  const { embedId, height, width } = props;
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ border: "none" }}
    />
  );
};
