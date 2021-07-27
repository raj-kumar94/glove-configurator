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
const { GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY } = tabConstants;
const TABS = [GLOVE_FOUNDATION, LEATHER_DESIGN, PERSONAL_EMBROIDERY];

class App extends Component {

	componentDidMount() {
		this.props.dispatch(calculateRemaining({}));
	}

	handleResetConfigurator = () => {
		this.props.dispatch(reseltConfigurator({}));
	}

	handleAddToCart = () => {
		this.props.dispatch(saveCustomImage({product_id: 212324}));
		this.props.dispatch(saveCustomisation({product_id: 212324}));
	}

	render() {

		const tabMapping = {}
		let totalRemaining = 0;
		for(const tab of this.props.tabs) {
			tabMapping[tab.name] = tab.remaining;
			totalRemaining += tab.remaining;
		}

		return (
			<div className="App custom-container mt-5">
				<div className="row">
					<div className="col-md-8">
						<Carousel />
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
							<button type="button" id="add-to-cart-btn" disabled={totalRemaining > 0} className="btn mt-4" onClick={this.handleAddToCart}>Add To Cart $185</button>
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
    selectedTab: state.glove.selectedTab
});
  
  
export default connect(mapStateToProps)(App);
