import React,{Component} from 'react'
import './QuickSearch.css';


class QuickSearch extends Component{
    
   render(){
       return(
          <>
            
            <div className="QuickSearchContainer">
            <span id="QuickHeading">
                Quick Searches
            </span>
            <span id="QuickSubHeading">
                Discover Restaurants By Meal Type
            </span>
            <div className="tileContainer">
                <div className="tileComponent1">
                    <img src="images/breakfast.png" alt="breakfast" />
                </div>
                <div className="tileComponent2">
                    <div className="componentHeading">
                        Breakfast
                    </div>
                    <div className="componentSubHeading">
                        Start Your Day with best Offers
                    </div>
                    
                </div>
            </div>
            <div className="tileContainer">
                <div className="tileComponent1">
                    <img src="images/lunch.png" alt="lunch" />
                </div>
                <div className="tileComponent2">
                    <div className="componentHeading">
                        Lunch
                    </div>
                    <div className="componentSubHeading">
                        Start Your Day with best Offers
                    </div>
                    
                </div>
            </div>
            <div className="tileContainer">
                <div className="tileComponent1">
                    <img src="images/sacks.png" alt="snacks"/>
                </div>
                <div className="tileComponent2">
                    <div className="componentHeading">
                        Snacks
                    </div>
                    <div className="componentSubHeading">
                        Start Your Day with best Offers
                    </div>
                    
                </div>
            </div>
            <div className="tileContainer">
                <div class="tileComponent1">
                    <img src="images/dinner.png" alt="dinner"/>
                </div>
                <div className="tileComponent2">
                    <div className="componentHeading">
                        Dinner
                    </div>
                    <div className="componentSubHeading">
                        Start Your Day with best Offers
                    </div>
                    
                </div>
            </div>
            <div className="tileContainer">
                <div className="tileComponent1">
                    <img src="images/drinks.png" alt="drinks" />
                </div>
                <div className="tileComponent2">
                    <div class="componentHeading">
                        Drinks
                    </div>
                    <div className="componentSubHeading">
                        Start Your Day with best Offers
                    </div>
                    
                </div>
            </div>
            <div className="tileContainer">
                <div className="tileComponent1">
                    <img src="images/nightlife.png" alt="noghtlife"/>
                </div>
                <div className="tileComponent2">
                    <div class="componentHeading">
                        NightLife
                    </div>
                    <div className="componentSubHeading">
                        Start Your Day with best Offers
                    </div>
                    
                </div>
            </div>
            
        </div>
          </>
       )
   }
   
}
export default QuickSearch;