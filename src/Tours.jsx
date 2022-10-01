import React from 'react'
import Tour from "./Tour";

export default function Tours(props) {
    return (
        <section>
            <div className="title">
                <h2>Ours Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {props.tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} callback={props.callback}></Tour>
                })}
            </div>
        </section>
    )
}
