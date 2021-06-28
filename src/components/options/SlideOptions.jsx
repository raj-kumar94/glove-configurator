import React, { Component } from 'react'
import { connect } from "react-redux";
import { setSwipeViewIndex } from "../../feature/gloveSlice";

class SlideOptions extends Component {
    render() {
        return (
            <div className="step-nav--directional">
                {
                    this.props.prevItem && 
                    <div className="item left-item" onClick={() => !this.props.noPrev && this.props.dispatch(setSwipeViewIndex({index: this.props.currentIndex-1, indexName: this.props.indexName}))}>
                        <i className="fas fa-angle-left"></i>
                        <span type="button" className="item-name">
                            {this.props.prevItem}
                        </span>
                    </div>
                }
                {
                    this.props.nextItem &&
                        <div className="item right-item" onClick={() => !this.props.noNext && this.props.dispatch(setSwipeViewIndex({index: this.props.currentIndex+1,  indexName: this.props.indexName}))}>
                            <span type="button" className="item-name">
                                {/* Wingtip Pinky */}
                                {this.props.nextItem}
                            </span>
                            <i className="fas fa-angle-right"></i>
                        </div>
                }
            </div>
        )
    }
}

// export default SlideOptions
const mapStateToProps = (state) => ({
    // swipeViewIndex: state.glove.swipeViewIndex
});
  
  
export default connect(mapStateToProps)(SlideOptions);
