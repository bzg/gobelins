import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.scrollToTop = this.scrollToTop.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnMount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll() {
    this.setState({ visible: Boolean(window.scrollY !== 0) });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    let theButton = this.state.visible ? (
      <button
        className="ScrollToTop"
        onClick={this.scrollToTop}
        type="button"
        key="collection-scroll-to-top-visible"
      >
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path
            d="M-0.343161 7.63635C-0.543999 7.82587 -0.553172 8.14232 -0.363649 8.34316C-0.174127 8.544 0.142323 8.55317 0.343161 8.36365L-0.343161 7.63635ZM8.8208 0.363649C9.02164 0.174127 9.03081 -0.142323 8.84129 -0.343161C8.65176 -0.543999 8.33531 -0.553172 8.13448 -0.363649L8.8208 0.363649ZM16.6568 8.36365C16.8577 8.55317 17.1741 8.544 17.3636 8.34316C17.5532 8.14232 17.544 7.82587 17.3432 7.63635L16.6568 8.36365ZM8.86552 -0.363649C8.66469 -0.553172 8.34824 -0.543999 8.15871 -0.343161C7.96919 -0.142323 7.97836 0.174127 8.1792 0.363649L8.86552 -0.363649ZM8 17.5C8 17.7761 8.22386 18 8.5 18C8.77614 18 9 17.7761 9 17.5H8ZM9 0.5C9 0.223858 8.77614 0 8.5 0C8.22386 0 8 0.223858 8 0.5H9ZM0.343161 8.36365L8.8208 0.363649L8.13448 -0.363649L-0.343161 7.63635L0.343161 8.36365ZM17.3432 7.63635L8.86552 -0.363649L8.1792 0.363649L16.6568 8.36365L17.3432 7.63635ZM9 17.5V0.5H8V17.5H9Z"
            fill="black"
            transform="translate(1 1)"
          />
        </svg>
      </button>
    ) : (
      <div key="collection-scroll-to-top-hidden" />
    );
    return (
      <div>
        <CSSTransitionGroup
          transitionName="scrollToTop"
          transitionEnterTimeout={150}
          transitionLeaveTimeout={150}
        >
          {theButton}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default ScrollToTop;
