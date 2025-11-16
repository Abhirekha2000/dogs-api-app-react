import { useEffect, useState, useRef } from "react";

function DogViewer() {
  const [breeds, setBreeds] = useState({});
  const [selectedBreed, setSelectedBreed] = useState("");
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const autoplayRef = useRef(null);

  // Load breeds on first load
  useEffect(() => {
    async function loadBreeds() {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      setBreeds(data.message);
    }
    loadBreeds();
  }, []);

  // Fetch images after selecting a breed
  async function loadImages(breed) {
    setLoading(true);
    setImages([]);
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    setImages(data.message);
    setIndex(0);
    setLoading(false);
  }

  // Next / Previous
  function nextImage() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  // Autoplay
  useEffect(() => {
    if (isPlaying && images.length > 0) {
      autoplayRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [isPlaying, images]);

  return (
    <div>
      <h2>Select a Dog Breed</h2>

      <select
        onChange={(e) => {
          setSelectedBreed(e.target.value);
          loadImages(e.target.value);
          setIsPlaying(false);
        }}
        value={selectedBreed}
      >
        <option value="">-- Choose Breed --</option>
        {Object.keys(breeds).map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>

      {/* Loading Spinner */}
      {loading && (
        <div className="spinner"></div>
      )}

      {/* Slideshow */}
      <div className="slideshow">
        {images.length > 0 && !loading ? (
          <>
            <img
              key={index}
              src={images[index]}
              alt="dog"
              className="fade-image zoom"
            />

            <div className="buttons">
              <button onClick={prevImage}>⏮ Previous</button>
              <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? "⏸ Pause" : "▶️ Play"}
              </button>
              <button onClick={nextImage}>Next ⏭</button>
            </div>
          </>
        ) : !loading ? (
          <p>No images yet. Select a breed.</p>
        ) : null}
      </div>
    </div>
  );
}

export default DogViewer;
