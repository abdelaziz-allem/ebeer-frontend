// components/VideoGrid.js
export default function VideoGrid() {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/ub4DvdQKW_0",
      title: "Sidee loo beera Tamaadho?",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/dLe0TiaLC4k",
      title: "Sidee loo beera Basal?",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/UHtFU-fzL08",
      title: "Sidee loo beera  Baradho?",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/18o1N68bywE",
      title: "Sidee loo beera Kaabash?",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/q-CXpjJDqJo",
      title: "Sidee loo beera Toon?",
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/fT0lS0W0i3A",
      title: "Sidee loo beera Sanjabiil?",
    },
  ];

  return (
    <>
      <div className="min-h-screen  flex flex-col items-center py-28">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-2">
            Baro oo Beero
          </h1>
          <div className="border-b-2 w-20 border-green-500 shadow-2xl shadow-green-600" />
        </div>
        <h1 className="text-xl  text-gray-500 mb-6">
          Ka baro halkan sida loo beero khudaarta kala duwan
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl px-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative bg-black rounded-lg shadow-lg aspect-[10/13] overflow-hidden w-[1080px] max-w-full mx-auto"
            >
              <div className="absolute top-0 left-0 right-0 bg-green-500 text-2xl font-semibold text-white text-center py-2 z-10">
                {video.title}
              </div>
              {video.src.includes("youtube.com") ? (
                <iframe
                  className="w-full h-full object-cover z-0"
                  src={video.src}
                  frameBorder="0"
                  allowFullScreen
                  title={video.title}
                />
              ) : (
                <video
                  className="w-full h-full object-cover z-0"
                  src={video.src}
                  controls
                  alt={video.title}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
