import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';
import './Widgets.css';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
        <div className="widgets_article_left">
            <FiberManualRecord/>
        </div>
        <div className="widgets_article_right">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
    );

    return (
      <div className="widgets">
          <div className="widgets_header">
              <h2>LinkedIn News</h2>
              <Info />
          </div>
            {newsArticle("Tony Is back", "Top News - Tony learns React")}
            {newsArticle("Corona Virus", "Top News - Kenya Numbers:9000")}
            {newsArticle("Tesla hits new high", "Top News - Kenya Numbers:9000")}
            {newsArticle("Bitcoin breaks $22k", "Crypto - 1234 readers")}
            {newsArticle("Is Redux to good?", "Code - 124 readers")}
      </div>
    )
}

export default Widgets
