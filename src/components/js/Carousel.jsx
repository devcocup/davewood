import React from 'react';
import { StaticQuery, graphql } from "gatsby";

export const CarouselHelper = () => {
  return (
    <StaticQuery query={graphql`
  query{
  allImageSharp{
    edges{
      node{
        fluid{
          srcWebp
          originalName
        }
      }
    }
  }
}
  `}
      render={(data) => (
        <div className="QueryData">
          {data.allImageSharp.edges.node.map(({ node }, index) => (
            <img src={node.fluid.srcWebp} alt={node.fluid.originalName} key={index} className="img-fluid" />
          ))}
        </div>
      )}
    />
  );
};


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === props.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? props.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = props.map((props) => {
      return (
        <CarouselHelper onExiting={this.onExiting} onExited={this.onExited} key={props.originalName}>
          <img src={node.fluid.srcWebp} alt={node.fluid.originalName} className="img-fluid" />
        </CarouselHelper>
      );
    });
    return (
      <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }



};

export default Carousel; 
