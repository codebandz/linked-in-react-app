import { Info } from '@mui/icons-material';
import React from 'react';
import './Widgets.css';

function Widgets() {

    const newsArticle = {heading, subtitle } => (
        <div className="widgets_article">
        <div className="widgets_article_left">
        </div>
        <div className="widgets_article_right">
        </div>
    </div>
    );

    return (
      <div className="widgets">
          <div className="widgets_header">
              <h2>LinkedIn News</h2>
              <Info />
          </div>

      </div>
    )
}

export default Widgets
