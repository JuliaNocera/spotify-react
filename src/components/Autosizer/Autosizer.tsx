import React, { Component, createRef } from "react";

interface AutosizerProps {
  children: (any: any) => React.ReactNode;
}

class Autosizer extends Component<AutosizerProps> {
  constructor(props: any) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }

  state = {
    hasComputed: false,
    width: 0,
    height: 0
  };

  containerRef: any = createRef();

  getComputedDimensions() {
    const width = window.innerWidth || 0;
    const height = window.innerHeight || 0;
    return {
      width,
      height
    };
  }

  componentWillReceiveProps(nextProps: AutosizerProps) {
    console.log({ nextProps });
    this.setState(this.getComputedDimensions());
  }

  componentDidMount() {
    this.setState({
      ...this.getComputedDimensions(),
      hasComputed: true
    });
    window.addEventListener("resize", this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize, false);
  }

  handleResize() {
    this.setState(
      {
        hasComputed: false
      },
      () => {
        this.setState({
          hasComputed: true,
          ...this.getComputedDimensions()
        });
      }
    );
  }

  render() {
    return (
      <div ref={this.containerRef}>
        {this.props.children({
          width: this.state.width,
          height: this.state.height,
          hasComputed: this.state.hasComputed
        })}
      </div>
    );
  }
}

export default Autosizer;
