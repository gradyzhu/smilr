import React, { useEffect } from 'react';
import AlbumsIndexItem from './albums_index_item';
import { clearAlbums, fetchAlbums } from '../../actions/albums_actions';
import { connect } from 'react-redux';

const AlbumsIndex = props => {
  const { albums, fetchAlbums, clearAlbums, userId } = props;

  useEffect(() => {
    fetchAlbums(userId);
    return () => clearAlbums();
  }, [userId]);

  let userAlbums = albums.map(album => {
    return(
      <AlbumsIndexItem 
        key={album.id}
        albumId={album.id}
        name={album.name}
        description={album.description}
        photos={album.photos}/>
      );
  });
  
  return (
    <div className="full-width">
      <div className="albums-index-container-wrap flex-col-start">
        <div className="albums-index-container flex-row-start-top-left flex-wrap2">
          {userAlbums}
        </div>
      </div>
    </div>
  )
}

const mstp = ({ entities: { albums }}, ownProps) => {
  let userAlbums = Object.values(albums);
  return ({ 
    albums: userAlbums,
    userId: ownProps.userId
  })
}

const mdtp = dispatch => {
  return ({
    fetchAlbums: userId => dispatch(fetchAlbums(userId)),
    clearAlbums: () => dispatch(clearAlbums())
  })
}

export default connect(mstp, mdtp)(AlbumsIndex);