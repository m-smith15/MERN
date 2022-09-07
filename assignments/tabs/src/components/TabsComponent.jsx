import { useState } from 'react';


const TabsComponent = () => {

    const tabs = ["Tab1", "Tab2", "Tab3"]
    const tabsContent = ["Tab 1 Content", "Tab 2 Content", "Tab 3 Content"]

    const setActive = (e, value, index) => {
        console.log(value);
        console.log(index);
        let count = document.getElementsByClassName("active") // this creates an array!

        if (count.length > 0) {
            count[0].classList.remove("active");
        }
        document.getElementById(value).classList.add("active")
        displayContent(index);
    }
    const displayContent = (index) => {
        let display = document.getElementsByClassName("activeContent");

        if(display.length > 0){
            display[0].classList.remove("activeContent");
        }
        let tab2display = document.getElementsByClassName("tabContent")
        tab2display[index].classList.add("activeContent")
    }

    return (
        <div>
            <div className="tabwrapper">
                {tabs.map((item, i) =>
                    <button id={item} className="tab" key={i} onClick={(e) => setActive(e, item, i)}> {item} </button>)}
            </div>
            <div className="tabContentWrapper">
            {tabsContent.map((item, i) =>
                    <p  className="tabContent" key={i}> {item} </p>)}
            </div>
        </div>
    )
}

export default TabsComponent;