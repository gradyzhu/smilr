import React, { useEffect } from 'react';
import TagOptions from './tag_options';
import HomeIndexes from '../home/home_indexes';
import HomeTitleBar from '../home/home_title_bar';
import { SyncLoader } from 'react-spinners';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { clearPhotos } from '../../../actions/photos_actions';
import { clearTags, fetchTag } from '../../../actions/tags_actions';

const TagPhotosShow = (props) => {
  const { tag, tagId, fetchTag, clearPhotos, clearTags } = props;

  useEffect(() => {
    fetchTag(tagId);
    return () => {
      clearPhotos();
      clearTags();
    };
  }, [tagId]);

  if (tag) {
    return (
      <>
        <TagOptions />
        <HomeTitleBar title={`Photos tagged with "${tag.name}"`} />
        <HomeIndexes 
          indexType={"tags"}
          tagId={tagId}
        />
      </>
    )
  } else {
    return (
      <div className="user-show-loader">
        <SyncLoader color={'#919191'} />
      </div>
    )
  }
}

const mstp = ({ entities: { tags }}, ownProps) => {
  let allTags = Object.values(tags);
  let tag = allTags.length ? allTags[0] : null;
  return ({
    tagId: Number(ownProps.match.params.id),
    tag: tag,
  })
}

const mdtp = dispatch => {
  return ({
    fetchTag: tagId => dispatch(fetchTag(tagId)),
    clearPhotos: () => dispatch(clearPhotos()),
    clearTags: () => dispatch(clearTags())
  })
}

export default withRouter(connect(mstp, mdtp)(TagPhotosShow));