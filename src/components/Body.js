import RestaurantCard from "./RestaurantCard";
import { restrauntList } from "../constant";
import { useState } from "react";

function filterData(searchInput, restrauntList) {
    return restrauntList.filter((restraunt) => 
        restraunt.name.toLowerCase().includes(searchInput.toLowerCase())
    );
}

const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    const [restraunts, setRestraunts] = useState(restrauntList);

    const handleSearch = () => {
        if (searchInput.trim() === "") {
            setRestraunts(restrauntList);
        } else {
            const data = filterData(searchInput, restrauntList);
            setRestraunts(data);
        }
    };

    const handleInputChange = (e) => {
        const input = e.target.value;
        setSearchInput(input);
        if (input.trim() === "") {
            setRestraunts(restrauntList);
        }
    };

    return (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="search" 
                    value={searchInput}
                    onChange={handleInputChange} 
                />
                <button className="search-btn" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div className="restraunt-list">
                {/* <RestrauntCard restraunt={restrauntList[0]} />
                <RestrauntCard restraunt={restrauntList[1]} />
                <RestrauntCard restraunt={restrauntList[2]} />
                <RestrauntCard {...restrauntList[3]} />
                <RestrauntCard {...restrauntList[4]} />  */}
                {restraunts.map((restraunt) => (
                    <RestaurantCard {...restraunt} key={restraunt.id} />
                ))}
            </div>
        </>
    );
}

export default Body;