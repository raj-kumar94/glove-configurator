import React, { Component } from 'react'
import { connect } from "react-redux";
// import SwipeableViews from 'react-swipeable-views';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { reseltConfigurator, calculateRemaining, saveCustomImage, saveCustomisation } from './feature/gloveSlice';
import './App.scss';
import Carousel from './components/Carousel';
// import OptionTabs from './components/options/OptionTabs';
// import OptionTabs from './components/options/OptionTabs';
// import SlideOptions from './components/options/SlideOptions';
// import CurrentOptionInfo from './components/options/CurrentOptionInfo';
// import PickColor from './components/options/PickColor';
import SwipeView from './components/SwipeView';
// import SwipeView2 from './components/SwipeView2';
import { tabConstants } from './constants';
import { getCurrentVariant } from './utils/utils';
const { GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY } = tabConstants;
const TABS = [GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY];

class App extends Component {

	constructor(props) {
		super(props);
		this.stageRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()]
		// this.view1StageRef = React.createRef();
		// this.view2StageRef = React.createRef();
		// this.view3StageRef = React.createRef();
		// this.view4StageRef = React.createRef();
	}

	componentDidMount() {
		this.props.dispatch(calculateRemaining({}));
	}

	handleResetConfigurator = () => {
		let c = window.confirm('Do you want to start over?');
		if(c) {
			this.props.dispatch(reseltConfigurator({}));
		} else {
			return;
		}
	}

	handleAddToCart = () => {
		this.props.dispatch(saveCustomImage({stageRefs: this.stageRefs}));
		// this.props.dispatch(saveCustomisation({stageRefs: this.stageRefs}));

		// let pixelRatio = 1;
		// const uri = this.stageRefs[0].current.toDataURL({
		// 	pixelRatio: pixelRatio // default is 1
		// });
		// console.log({uri})

		// var link = document.createElement('a');
		// const name = 'stage.png';
        // link.download = name;
        // link.href = uri;
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);

		// var base64ImageContent = uri.replace(/^data:image\/(png|jpg);base64,/, "");
		// let base64Img = this.base64ToBlob(base64ImageContent, 'image/png');
		// this.handleFileUpload(base64Img, 'stage.png');
	}

	render() {

		const { currentProduct, gloveJson } = this.props;
		const tabMapping = {}
		let totalRemaining = 0;
		for(const tab of this.props.tabs) {
			tabMapping[tab.name] = tab.remaining;
			totalRemaining += tab.remaining;
		}

		let currentVariant = getCurrentVariant(currentProduct, gloveJson[GLOVE_FOUNDATION]);

		return (
			<div className="App custom-container mt-5">
				<div className="row">
					<div className="col-md-8">
						<Carousel stageRefs={this.stageRefs} />
					</div>
					<div className="col-md-4">
						<Tabs>
							<TabList>
								{
									TABS.map((TAB, index) => (
										<Tab key={`tab-${TAB}`} 
										className={`react-tab-tab box-shadow--light d-flex flex-column`}
										>
											<span className="tab-menu-index"><span className="menu-index">{index+1}</span></span>
											<span className="mr-1">
												{
													TAB === GLOVE_FOUNDATION &&
													<>
														Glove <br /> Foundation
													</>
												}
												{
													TAB === LEATHER_DESIGN &&
													<>
														Leather & <br /> Design
													</>
												}
												{
													TAB === PERSONAL_EMBROIDERY &&
													<>
														Embroidery & <br /> Personalization
													</>
												}
												{
													![GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY].includes(TAB) &&
													TAB
												}
											</span>
											<span className="font-weight-light mt-auto">{tabMapping[TAB]} remaining</span>
										</Tab>
									))
								}
							</TabList>
							{/* <OptionTabs /> */}

							{
								TABS.map(TAB => (
									<TabPanel key={`tab-panel-${TAB}`}>
										<SwipeView TAB={TAB} />
									</TabPanel>
								))
							}
						</Tabs>
						
						<div>
							<button type="button" id="add-to-cart-btn" disabled={totalRemaining > 0} className="btn mt-4" onClick={this.handleAddToCart}>Add To Cart ${currentVariant.price}</button>
							<button type="button" id="reset-btn" disabled={false} className="btn mt-4 ml-2" onClick={this.handleResetConfigurator}>Start Over</button>
							<p className="text-muted small mt-1 secondary-font">To add to cart, please answer the required steps in the {GLOVE_FOUNDATION}, {LEATHER_DESIGN} and {PERSONAL_EMBROIDERY} sections.</p>
						</div>

					</div>
				</div>
			</div>
		)
	}
}

// export default App
const mapStateToProps = (state) => ({
    tabs: state.glove.tabs,
    selectedTab: state.glove.selectedTab,
	currentProduct: state.glove.currentProduct,
	gloveJson: state.glove.gloveJson
});
  
  
export default connect(mapStateToProps)(App);
