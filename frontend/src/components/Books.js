// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import Book from "./Book";
// // const express = require("express");
// // const port = 3000;

// // Books.use(express.json());


// export default function Books() {
//     const history = useHistory();
//   const [data, setData] = useState([
//     { id: 1, name: "Don't QUIT" ,writer:"Hal fisher",imgUrl : "https://www.storytel.com/images/e/640x640/0000824232.jpg"},
//     { id: 2, name: "Ulysses" ,imgUrl : "data:image/jpeg;base64,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", writer:"dived"},
//     { id: 3, name: "Don't QUIT" ,writer:"Hal fisher",imgUrl : "https://www.storytel.com/images/e/640x640/0000824232.jpg"},
//     { id: 4, name: "Don't QUIT" ,imgUrl : "https://www.storytel.com/images/e/640x640/0000824232.jpg"},
//     { id: 5, name: "Don't QUIT" ,imgUrl : "https://www.storytel.com/images/e/640x640/0000824232.jpg"},
//     { id: 6, name: "Don't QUIT" ,imgUrl : "https://www.storytel.com/images/e/640x640/0000824232.jpg"},
//     { id: 7, name: "Don't QUIT" ,imgUrl : "https://www.storytel.com/images/e/640x640/0000824232.jpg"},
//   ]);

  // const goToCard  =(id)=>{
  //   history.push(`/book/${id}`);
  // }

//   return (
//     <div>
//             <h1 className="BooksTitle"> Books List: </h1>

//     <div className="mainContainer">
//       {data.map((ele) => {
//         return (
          // <div className="booksImg" onClick={()=>{goToCard(ele.id)}}>
//             <h1>{ele.name}</h1>
//             <img className="imgSize" src={ele.imgUrl}/>
//             <h1><br/> By : {ele.writer}</h1>
//           </div>
//         );
//       })}
//     </div></div>
//   );
// }

import React ,{useState,useEffect} from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";


export default function Books() {
    const [booksList, setBooksList] = useState([])
    const [booksPage, setBookPage] = useState()

    const history = useHistory();

    const [data ,setData] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");

    

    useEffect(()=>{
            const fetchData = async ()=> {
                        const res = await axios.get('http://localhost:5000/Books');
                        setFilterd(res.data);
                 
                  };
                  fetchData(); 
        },[]);

        useEffect(()=> {
            const results = filtered.filter(res=>  result && res.name.toLowerCase().includes(result)

            ); 
            setData(results)
        } ,[result])
        //console.log(data)

      const onChange =(e)=> {
            setResult(e.target.value);

        }
  





    useEffect(async() => {
       const result = await axios.get("http://localhost:5000/Books");
       setBooksList(result.data);
    },[])

    
    // useEffect(async()=>{
      // const booksPage = await axios.get("/book/:id");
      // setBookPage(booksPage.data);
    // })
    const goTopage =(id) => {
      history.push(`/book/${id}`)
    }

    
    
   
    return (
        <div className="BooksTitle">
          <h1 className="Title">CARTOON MOVIES : </h1>
          
          <div>
          <i class="fas fa-search"></i>
          <input 
            type="text"
            placeholder="search here .."
            value={result}
            onChange={onChange}
        />
        </div>
        {data.map((Books,i)=> (   
                <div key={i} className="searchBox">
                <h3>{Books.name}</h3>
                <hr/>
                <img  className="searchImg" src={Books.imgUrl} onClick={()=>{goTopage(Books.id)}} />

                </div>)
            )
        }
     <div className="mainContainer">
          {booksList.map((Books,i)=>{
            return (
              <div key={i} className="booksImg">
                <h1>{Books.name}</h1> <hr/>
               <img className="imgSize"  onClick={()=>{goTopage(Books.id)}} src={Books.imgUrl}/>
               <br/>
                  {/* <h4>Writer: {Books.writer}</h4> */}

<button className="btn button1" onClick={()=>{goTopage(Books.id)}}>Show details</button>
<br/>


            
<div>
  
       
    </div>
              </div>
              
            );
        })}
 
      </div> </div>
    );
}