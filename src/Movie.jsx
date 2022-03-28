import { motion } from "framer-motion";
import { useState } from "react";

const Movie = ({ movie }) => {
  const [visible, setVisible] = useState(false);

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setVisible(!visible)}
      className="motion"
    >
      <h2>{movie.title}</h2>
      <h3>{movie.release_date}</h3>

      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.title}
      />
      {visible && (
        <p>
          <strong> Overview : </strong>
          <br />
          {movie.overview}
        </p>
      )}
    </motion.div>
  );
};

export default Movie;
