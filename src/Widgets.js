import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';


function Widgets() {

    const newsArticle = (heading, subtitle, url) => {
        return (
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon/>
                </div>

                <div className="widgets__articleRight">
                    <a href={url}> 
                        <h4>{heading}</h4> 
                        <p>{subtitle}</p>
                    </a>
                </div>

            </div>
        )
        
    };

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("Insects, arachnids, and other arthropods", "Arthropods are all around us, but identifying them ...", 
                "https://www.sciencenewsforstudents.org/article/explainer-insects-arachnids-crustaceans-arthropods" 
                )}
            {newsArticle("Are floating cities a real possibility?", "A scale model of Oceanix City...",
                "https://www.smithsonianmag.com/innovation/in-face-rising-seas-are-floating-cities-real-possibility-180978409/"
            )}
            {newsArticle("Giant, Dragon-like, Flying Reptile Fossil Discovered in Australia", "A rare specimen reveals a new species of pterosaur...",
                "https://www.smithsonianmag.com/smart-news/giant-dragon-flying-reptile-fossil-discovered-australia-180978411/"
            )}
        </div>
    )
}

export default Widgets;

