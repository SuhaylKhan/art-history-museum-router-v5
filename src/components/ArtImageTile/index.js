import { Link } from 'react-router-dom';

function ArtImageTile({gallery}) {
    const image = gallery.objects[0].images[0];
    // console.log(images[0].baseimageurl)
    return (
        <Link to={`/galleries/${gallery.id}/art/${image.imageid}`}>
            <img src={image.baseimageurl}></img>
        </Link>
    )
}


export default ArtImageTile;
