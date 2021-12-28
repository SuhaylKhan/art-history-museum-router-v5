import { useParams } from 'react-router-dom';

function GalleryView({galleries}) {
  const { galleryId } = useParams();
  const choice = galleries.find(gallery => +galleryId === gallery.id)
  console.log(choice)
  return (
    <h2>{choice.name}</h2>
  )
}

export default GalleryView;


// import { useParams } from 'react-router-dom';

// function MovieDetails({ movies }) {
//   const { id } = useParams();

//   const choice = movies.find(movie=> movie.id === +id)

//   return (
//     <div className="comp purple">
//       <h1>{choice.title}</h1>
//       <p>{choice.description}</p>
//     </div>
//   );
// }

// export default MovieDetails;
