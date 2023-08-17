const Video = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-20">
        <div className="uppercase text-3xl text-white ibm-400 py-14 lg:py-20">
          V arenax video v
        </div>
        {/* <div className=" bg-blue-400 lg:pb-20"></div> */}
        <div className="w-full flex justify-center rounded-xl overflow-hidden">
          <iframe
            className="w-9/12 h-[80vh]"
            src="https://www.youtube.com/embed/8YqGAm3sGEI"
            title="F.inc x Warriors x ArenaX"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Video;
