import React, { useState, useEffect } from "react";
import {API_URL, API_KEY} from "../config";
import Loader from "./Loader";
import GoodList from "./GoodList";


export default function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(API_URL,{
            headers: {
                Authorization: API_KEY
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.features && setGoods(data.features);
                setLoading(false);
            })
    }, [])
    return (
        <div className="container content">
            {loading ? <Loader /> : <GoodList goods={goods}/>}
        </div>
    )
}