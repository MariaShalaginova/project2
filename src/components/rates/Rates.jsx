import React, { useState } from "react";
import css from './Rates.module.css';
import BeginnerCard from "./BeginnerCard";
import ProCard from "./ProCard";
import BusinessCard from "./BusinessCard";

const Rates = () => {
    const [selectedId, setSelectedId] = useState("");

    const handleSelect = (id) => {
        setSelectedId(id);
    };

    return (
        <section className={css.container}>
            <div className={css.title}>
                <h2>
                наши тарифы
                </h2>
            </div>
            <div className={css.ratesCard}>
                <BeginnerCard id={1} onSelect={handleSelect} selectedId={selectedId}/>
                <ProCard id={2} onSelect={handleSelect} selectedId={selectedId}/>
                <BusinessCard id={3} onSelect={handleSelect} selectedId={selectedId} />
            </div>
        </section>    
        
    )
}

export default Rates