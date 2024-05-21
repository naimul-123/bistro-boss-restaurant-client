import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";


const PopulerMenu = () => {
    const [menu] = useMenu()
    const populerItems = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const populerItems = data.filter(item => item.category === 'popular')
    //             setMenu(populerItems)
    //         })
    // },[])
    const info = {
        title: "From our Menu",
        subTitle: "Populer Items"
    }
    return (
        <section>
            <SectionTitle info={info} />
            <div className="grid md:grid-cols-2 gap-4 ">
                {populerItems.map((item) => <MenuItem key={item._id} item={item} />)}
            </div>
        </section>
    );
};

export default PopulerMenu;