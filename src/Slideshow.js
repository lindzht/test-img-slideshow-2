import React, {useState} from "react";

const Slideshow = ({array, time})=> {

    const [nextIndex, setNextIndex] = useState(0);

    const arrayLength = array.length;

    setTimeout(()=> {
        if (nextIndex < arrayLength - 1) {
            setNextIndex(nextIndex + 1);
        } else {
            setNextIndex(0);
        }
    }, time);

    return (
        <div>
            <img src={array[nextIndex]} alt="slideshow" ></img>
        </div>
    )

};

export default Slideshow;