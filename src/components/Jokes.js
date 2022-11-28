import React, { useState, useEffect } from "react";

const Jokes = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "c9acc33d6fmsh9946d508b9718f0p15fa7ejsn2691211d9c12",
                "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
            },
        };

        fetch("https://dad-jokes.p.rapidapi.com/random/joke?count=10", options)
            .then((response) => response.json())
            .then((response) => setData(response.body))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {data.map((item) => {
                        return (
                            <div className="card" key={item._id}>
                                <div className="card-header">{item.type}</div>
                                <div className="card-body">
                                    <div>
                                        <p>{item.setup}</p>
                                        <p>{item.punchline}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Jokes;
