import React, { Component } from 'react'
// import SwipeableViews from 'react-swipeable-views';
import './App.scss';
import Carousel from './components/Carousel';
import OptionTabs from './components/options/OptionTabs';
// import SlideOptions from './components/options/SlideOptions';
// import CurrentOptionInfo from './components/options/CurrentOptionInfo';
// import PickColor from './components/options/PickColor';
import SwipeView from './components/SwipeView';
import { tabConstants } from './constants';
const { GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY } = tabConstants;

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
const styles = {
	slide: {
	  padding: 15,
	  minHeight: 100,
	  color: '#fff',
	},
	slide1: {
	  background: '#FEA900',
	},
	slide2: {
	  background: '#B3DC4A',
	},
	slide3: {
	  background: '#6AC0FF',
	},
  };

class App extends Component {

	state = {
		index: 1
	}

	componentDidMount() {
		// setTimeout(() => {
		// 	this.setState({index: 0})
		// }, 1000);
	}

	setSlide = (index) => {
		this.setState({index: index});
	}

	render() {
		return (
			<div className="App custom-container mt-5">
				<div className="row">
					<div className="col-md-8">
						<Carousel />
					</div>
					<div className="col-md-4">
						<OptionTabs />
						{/* <SlideOptions />
						<CurrentOptionInfo /> */}

						<SwipeView />

						<div>
							<button type="button" id="add-to-cart-btn" disabled={false} className="btn mt-4">Add To Cart $185</button>
							<p className="text-muted small mt-1 secondary-font">To add to cart, please answer the required steps in the {GLOVE_FOUNDATION}, {LEATHER_DESIGN} and {PERSONAL_EMBROIDERY} sections.</p>
						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default App

