import React from 'react'
import { useState } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";

import "../Styles/ListingSection.css";

export default function ListingSection() {

  const [showJNFINF,setShowJNFINF]=useState("JNF");
  return (
    <>
    <div className="SearchBarContainer mx-5">
        <div className="searchBar ">
    <Form className="d-flex">
    <Button variant="outline-primary searchBarButton" id='btn1'><FaSearch />
</Button>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 searchform"
          aria-label="Search"
        />
        
      </Form>
      </div>
      <Button onClick={()=>setShowJNFINF("INF")} variant="outline-primary searchBarButton" id='btn2'>INF</Button>
      <Button onClick={()=>setShowJNFINF("JNF")} variant="outline-primary searchBarButton" id='btn3'>JNF</Button>

      <div className="filterBar p-4">
<span>Filterbar</span>

      </div>


    </div>
    {(showJNFINF=="JNF") ? <div className="container">JNF</div> : <div className="container">INF</div>}
    
    </>
  )
}
