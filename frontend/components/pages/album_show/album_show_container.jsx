import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../../actions/albums_actions';
import { SyncLoader } from 'react-spinners';
import BackToAlbums from './back_to_albums';
import AlbumShowBanner from './album_show_banner';
import AlbumPhotoIndex from './album_show_photos_index';

const AlbumShow = props => {
  const { fetchAlbum, album, albumId } = props;

  useEffect(() => {
    fetchAlbum(albumId);
  }, [ albumId ]);

  if (album) {
    const { photos, name, description, userId } = album;
    return (
      <div className="album-show-container flex-col-center">
        <BackToAlbums userId={userId} />
        <AlbumShowBanner
          name={name}
          description={description}
          length={photos.length}
          bannerImage={photos[0].imageUrl}
          length={photos.length}
        />
        <AlbumPhotoIndex photos={photos} />
      </div>
    )
  } else {
    return (
      <div className="user-show-loader">
        <SyncLoader color={'#919191'} />
      </div>
    )
  }
};

const mstp = ({ entities: { albums }}, ownProps) => {
  let albumId = Number(ownProps.match.params.id)
  let album = albums[albumId] ? albums[albumId] : null;
  return({
    albumId: albumId,
    album: album
  });
};

const mdtp = dispatch => {
  return({
    fetchAlbum: id => dispatch(fetchAlbum(id))
  });
};

export default connect(mstp, mdtp)(AlbumShow);