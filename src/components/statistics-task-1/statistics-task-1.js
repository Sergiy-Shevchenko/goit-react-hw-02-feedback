import React from "react";
import css from '../statistics-task-1/statistics-task-1.css';


class Statistics extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    render () {
        return (
            <div className="container">
                <h1 className="title">Please leave feedback</h1>
                <div className="section">
                <button type="button" className="button" onClick={()=>{}}>Neutral</button>
                <button type="button" className="button" onClick={()=>{}}>Bad</button>
                <button type="button" className="button" onClick={()=>{}}>Good</button>
                </div>
                <h2 className="title">Statistics</h2>
                <div className="section">
                    <span className="item">Good:</span><p className="rating"></p>
                    <span className="item">Neutral:</span><p className="rating"></p>
                    <span className="item">Bad:</span><p className="rating"></p>
                </div>
            </div>
        );
    }
}

export default Statistics;