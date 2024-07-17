interface VideoSectionProps {}

const VideoSection = ({}: VideoSectionProps) => {
  return (
    <section className="bg-color-details h-max py-10 flex flex-col items-center justify-center space-y-6">
      <div className="flex items-center justify-center">
        <iframe
          className="w-5/6"
          src="https://www.youtube-nocookie.com/embed/Fuyhg4jsR_M?si=-HQ2e0QW2T8yfpIj&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="w-4/6 text-center">
        <p className="text-white text-sm">
          Motivação para academia musculação é para os
          <span className="font-bold text-color-primary">
            {" "}
            FORTES Nando Pinheiro
          </span>
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
