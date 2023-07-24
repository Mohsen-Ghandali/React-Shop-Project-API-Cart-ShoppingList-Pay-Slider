import { useState } from "react";
import Header from "../Header/Header";
import { useEffect } from "react";
import Slider from "../Slider/Slider";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
import SideBar from "../Sidebar/SideBar";


const App = () => {

    let [header, setHeader] = useState(null)
    let [slider, setSlider] = useState(null)
    let [product, setProduct] = useState(null)
    let [footer, setFooter] = useState(null)
    let [sidebar, setSideBar] = useState(null)

    const fetchHeader = async () => {
        try {
            let data = await fetch("http://localhost:3030/menu")
            let res = await data.json()
            setHeader(res)
        } catch (error) {
            console.log(error.message);
        }
    }

    const fetchSideBar = async () => {
        try {
            let data = await fetch("http://localhost:3030/sidebar")
            let res = await data.json()
            setSideBar(res)
        } catch (error) {
            console.log(error.message);
        }
    };

    const fetchSlider = async () => {
        try {
            let data = await fetch("http://localhost:3030/slider")
            let res = await data.json()
            setSlider(res)
        } catch (error) {
            console.log(error.message);
        }
    }

    const fetchProduct = async () => {
        try {
            let data = await fetch("http://localhost:3030/product")
            let res = await data.json()
            setProduct(res)
        } catch (error) {
            console.log(error.message);
        }
    }

    const fetchFooter = async () => {
        try {
            let data = await fetch("http://localhost:3030/footer")
            let res = await data.json()
            setFooter(res)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {

        fetchHeader()
        fetchSlider()
        fetchProduct()
        fetchFooter()
        fetchSideBar()
    }, [])

    return (
        <>
            <Header header={header} />

            <div className="sidebarSlider d-flex justify-content-center mt-5 ">
                <SideBar sidebar={sidebar} />
                <Slider slider={slider} />
            </div>

            <Products product={product} />
            <Footer footer={footer} />
        </>
    );
}

export default App;


//-------------- Another Method------------------------------

// import React, { useState, useEffect } from "react";
// import Header from "../Header/Header";
// import Slider from "../Slider/Slider";
// import Products from "../Products/Products";
// import Footer from "../Footer/Footer";
// import SideBar from "../Sidebar/SideBar";

// const App = () => {
//   const [header, setHeader] = useState(null);
//   const [slider, setSlider] = useState(null);
//   const [product, setProduct] = useState(null);
//   const [footer, setFooter] = useState(null);
//   const [sidebar, setSideBar] = useState(null);

//   const fetchData = async (url, setData) => {
//     try {
//       const data = await fetch(url);
//       const res = await data.json();
//       setData(res);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     const urls = [
//       "http://localhost:3030/menu",
//       "http://localhost:3030/slider",
//       "http://localhost:3030/product",
//       "http://localhost:3030/footer",
//       "http://localhost:3030/sidebar",
//     ];

//     const promises = urls.map((url) => fetch(url).then((res) => res.json()));

//     Promise.all(promises)
//       .then(([headerData, sliderData, productData, footerData, sidebarData]) => {
//         setHeader(headerData);
//         setSlider(sliderData);
//         setProduct(productData);
//         setFooter(footerData);
//         setSideBar(sidebarData);
//       })
//       .catch((error) => console.log(error.message));
//   }, []);

//   return (
//     <>
//       <Header header={header} />

//       <div className="d-flex justify-content-center mt-5">
//         <SideBar sidebar={sidebar} />
//         <Slider slider={slider} />
//       </div>

//       <Products product={product} />
//       <Footer footer={footer} />
//     </>
//   );
// };

// export default App;
