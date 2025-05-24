import React, {useEffect, useState} from "react";


function Skills() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/get_stock")
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json()
            })
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                console.error("Fetch error:", error instanceof Error ? error.message : error);
            });
    }, []);

    return (
        <div>
        <h2> Hello </h2>
        {data.map((stock) => (
            <li key={stock.Id}>
                <strong>{stock.ticker}</strong><br />
                Current Price: {stock.current_price} <br />
                52-Week High: {stock["52_week_high"]} <br />
                52-Week Low: {stock["52_week_low"]} <br />
                EPS: {stock.EPS} <br />
                P/E Ratio: {stock["P/E"].toFixed(2)} <br />
                Forward P/E: {stock.forwardPE.toFixed(2)} <br />
                Previous Close: {stock.previous_close} <br />
                Dividend Rate: {stock.dividend_rate} <br />
                Dividend Yield: {stock.dividend_yield}% <br />
                Earning Growth: {(stock.earningGrowth * 100).toFixed(2)}% <br />
                {/* Free Cash Flow: ${stock.freeCashflow.toLocaleString()} <br /> */}
                Total Cash: ${stock.totalCash.toLocaleString()} <br />
                Market Cap: ${stock.market_cap.toLocaleString()} <br />
                Return on Assets: {(stock.returnOnAssets * 100).toFixed(2)}% <br />
                Return on Equity: {(stock.returnOnEquity * 100).toFixed(2)}% <br />
                Revenue: ${stock.revenue.toLocaleString()}
            </li>
        ))}
        </div>
    )
}


export default Skills;

