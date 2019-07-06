import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Image from './Image.jsx';
import { Link } from 'react-router-dom';

class Gallery extends Component {
    constructor (props) {
        super(props);

        this.state = {
            images: this.props.images,
            thumbnails: [],
            currentImage: this.props.currentImage,
            containerWidth: 0
        };

        this.onResize = this.onResize.bind(this);
    }

    componentDidMount () {
        this.onResize();
    }

    componentWillReceiveProps (np) {
        if (this.state.currentImage > np.images.length - 1) {
            this.setState({currentImage: np.images.length - 1});
        }
        if(this.state.images != np.images || this.props.maxRows != np.maxRows){
            this.setState({
                images: np.images,
                thumbnails: this.renderThumbs(this._gallery.clientWidth,
                                              np.images)
            });
        }
    }

    componentDidUpdate () {
        if (!this._gallery) return;
        debugger
        if (this._gallery.clientWidth
            !== this.state.containerWidth){
            this.onResize();
        }
    }

    componentWillUnmount () {
    }

    onResize () {
      if (!this._gallery) return;
      this.setState({
          containerWidth: Math.floor(this._gallery.clientWidth),
          thumbnails: this.renderThumbs(this._gallery.clientWidth)
      });
    }

    calculateCutOff (len, delta, items) {
        var cutoff = [];
        var cutsum = 0;
        for(var i in items) {
            var item = items[i];
            var fractOfLen = item.scaletwidth / len;
            cutoff[i] = Math.floor(fractOfLen * delta);
            cutsum += cutoff[i];
        }

        var stillToCutOff = delta - cutsum;
        while(stillToCutOff > 0) {
            for(i in cutoff) {
                cutoff[i]++;
                stillToCutOff--;
                if (stillToCutOff < 0) break;
            }
        }
        return cutoff;
    }

    buildImageRow (items, containerWidth) {
        var row = [];
        var len = 0;
        var imgMargin = 2 * this.props.margin;
        while(items.length > 0 && len < containerWidth) {
            var item = items.shift();
            row.push(item);
            len += (item.scaletwidth + imgMargin);
        }

        var delta = len - containerWidth;
        if(row.length > 0 && delta > 0) {
            var cutoff = this.calculateCutOff(len, delta, row);
            for(var i in row) {
                var pixelsToRemove = cutoff[i];
                item = row[i];
                item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
                item.vwidth = item.scaletwidth - pixelsToRemove;
            }
        }
        else {
            for(var j in row) {
                item = row[j];
                item.marginLeft = 0;
                item.vwidth = item.scaletwidth;
            }
        }
        return row;
    }

    setThumbScale (item) {
        item.scaletwidth =
            Math.floor(this.props.rowHeight
                       * (item.thumbnailWidth / item.thumbnailHeight));
    }

    renderThumbs (containerWidth, images = this.state.images) {
        if (!images) return [];
        if (containerWidth == 0) return [];

        var items = images.slice();
        for (var t in items) {
            this.setThumbScale(items[t]);
        }

        var thumbs = [];
        var rows = [];
        while(items.length > 0) {
            rows.push(this.buildImageRow(items, containerWidth));
        }

        for(var r in rows) {
            for(var i in rows[r]) {
                var item = rows[r][i];
                if(this.props.maxRows) {
                    if(r < this.props.maxRows) {
                        thumbs.push(item);
                    }
                }
                else {
                    thumbs.push(item);
                }
            }
        }
        return thumbs;
    }

    render () {
        var images = this.state.thumbnails.map((item, idx) => {
          return (
            <Link to={`/photos/${item.id}`} key={"Image-"+idx+"-"+item.src} >
              <Image
                item={item}
                index={idx}
                margin={this.props.margin}
                height={this.props.rowHeight}
                isSelectable={this.props.enableImageSelection}
                onSelectImage={this.onSelectImage}
                tagStyle={this.props.tagStyle}
                tileViewportStyle={this.props.tileViewportStyle}
                thumbnailStyle={this.props.thumbnailStyle}
                thumbnailImageComponent={this.props.thumbnailImageComponent}
              />
            </Link>
          );
        });
        
        var resizeIframeStyles = {
            height: 0,
            margin: 0,
            padding: 0,
            overflow: "hidden",
            borderWidth: 0,
            position: "fixed",
            backgroundColor: "transparent",
            width: "100%"
        };
        return (
                <div id={this.props.id} className="ReactGridGallery" ref={(c) => this._gallery = c}>
                  <iframe 
                    style={resizeIframeStyles}
                    ref={(c) => c && c.contentWindow && c.contentWindow.addEventListener('resize', this.onResize) } 
                  />
                  {images}
                </div>
        );
    }
}

Gallery.displayName = 'Gallery';

Gallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            nano: PropTypes.string,
            alt: PropTypes.string,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            tags: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired
                })
            ),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool,
            thumbnailCaption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ])
        })
    ).isRequired,
    id: PropTypes.string,
    enableImageSelection: PropTypes.bool,
    onSelectImage: PropTypes.func,
    rowHeight: PropTypes.number,
    maxRows: PropTypes.number,
    margin: PropTypes.number,
    onClickThumbnail: PropTypes.func,
    lightboxWillOpen: PropTypes.func,
    lightboxWillClose: PropTypes.func,
    enableLightbox: PropTypes.bool,
    backdropClosesModal: PropTypes.bool,
    currentImage: PropTypes.number,
    preloadNextImage: PropTypes.bool,
    customControls: PropTypes.arrayOf(PropTypes.node),
    currentImageWillChange: PropTypes.func,
    enableKeyboardInput: PropTypes.bool,
    imageCountSeparator: PropTypes.string,
    isOpen: PropTypes.bool,
    onClickImage: PropTypes.func,
    onClickNext: PropTypes.func,
    onClickPrev: PropTypes.func,
    onClose: PropTypes.func,
    showCloseButton: PropTypes.bool,
    showImageCount: PropTypes.bool,
    lightboxWidth: PropTypes.number,
    tileViewportStyle: PropTypes.func,
    thumbnailStyle: PropTypes.func,
    showLightboxThumbnails: PropTypes.bool,
    onClickLightboxThumbnail: PropTypes.func,
    tagStyle: PropTypes.object,
    thumbnailImageComponent: PropTypes.func,
    lightBoxProps : PropTypes.object,
};

Gallery.defaultProps = {
    id: "ReactGridGallery",
    enableImageSelection: true,
    rowHeight: 180,
    margin: 2,
    enableLightbox: true,
    backdropClosesModal: false,
    currentImage: 0,
    preloadNextImage: true,
    enableKeyboardInput: true,
    imageCountSeparator: ' of ',
    isOpen: false,
    showCloseButton: true,
    showImageCount: true,
    lightboxWidth: 1024,
    showLightboxThumbnails: false,
    lightBoxProps : {},
};

export default Gallery;
