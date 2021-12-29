import { useParams } from 'react-router-dom';

import ArtImageTile from '../ArtImageTile';

function GalleryView({galleries}) {
  const { galleryId } = useParams();
  const choice = galleries.find(gallery => +galleryId === gallery.id)

  const imagesArr = choice.objects.map(object => object.images)
  const imageObjs = [];
  imagesArr.forEach(ele => {
    imageObjs.push(...ele);
  })

  console.log(imageObjs)

  return (
    <div>
      <h2>{choice.name}</h2>


      <ArtImageTile gallery={choice}/>
    </div>
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
