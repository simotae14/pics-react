import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    };
    this.imageRef = React.createRef();
  }
  // access the ref value
  componentDidMount() {
    // event listener on load of the image
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({
      spans
    });
  }

  render() {
    const {
      alt_description,
      urls
    } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={alt_description}
          src={urls.regular}
        />
      </div>
    );
  }

};

export default ImageCard;
