import "./App.css";
// import React, {  useRef } from 'react'
// import { useGLTF } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import P1 from './P1.glb'

import fabrik from "./component/images/fabrik_full_logo.png";
// import Link from "@material-ui/core/Link";

// function Model({ ...props }) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/P1.glb')
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.1, 0.03, 0.15]}>
//         <mesh geometry={nodes.mesh_92_0.geometry} material={materials['Material.011']} />
//         <mesh geometry={nodes.mesh_92_2.geometry} material={materials['Material.009']} />
//         <mesh geometry={nodes.mesh_92_4.geometry} material={materials['Material.007']} />
//         <mesh geometry={nodes.mesh_92_5.geometry} material={materials['Material.010']} />
//         <mesh geometry={nodes.mesh_92_1.geometry} material={materials['Material.008']} />
//         <mesh geometry={nodes.mesh_92_3.geometry} material={materials['Material.012']} />
//       </group>
//     </group>
//   )
// }




export function App() {
  return (
    <>
      <div className="sidebar text-center">
        {/* <a className="active" href="#home">Home</a> */}
        <img  src={fabrik} className="img-fluid my-3" alt="#" />
        

        <button className="btn btn-outline-primary mx-2">Upload</button>
      </div>

      <div className="content">
        <h2 className="text-center my-4">Community</h2>
        <h3 className="text-center">Ideas of the open world</h3>
        <form className="d-flex">
          <input
            className="form-control me-2 my-3 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-dark mx-3 my-3  " type="submit">
            Search
          </button>
        </form>

        {/* <button className="btn btn-outline-success my-3 mx-2" >
        ListView
      </button>
      <button className="btn btn-outline-success my-3 mx-2" >
        GridView
      </button> */}
    
        
        <div className="card my-3">
            {/* <a href={fabrik}><img style={{height:'100px' , width:'100px'}} className="card-img-top" src={fabrik} alt="Img" /></a> */}
            <a style={{textDecoration: 'none', color:'black'}} href={fabrik}><div className="card-body">Image-1</div></a>
        </div>
       
        
        <div className="card my-3">
          {/* <img className="card-img-top" src={fabrik} alt="Img" /> */}
          <a style={{textDecoration: 'none', color:'black'}} href={fabrik}><div className="card-body">Image-2</div></a>
        </div>
        <div className="card my-3">
          {/* <img className="card-img-top" src="..." alt="Img" /> */}
          <a style={{textDecoration: 'none', color:'black'}} href={fabrik}><div className="card-body">Image-3</div></a>
        </div>
        <div className="card my-3">
          {/* <img className="card-img-top" src="..." alt="Img" /> */}
          <a style={{textDecoration: 'none', color:'black'}} href={fabrik}><div className="card-body">Image-4</div></a>
        </div>
        <div className="card my-3">
          {/* <img className="card-img-top" src="..." alt="Img" /> */}
          <a style={{textDecoration: 'none', color:'black'}} href={fabrik}><div className="card-body">Image-5</div></a>
        </div>
        <div className="card my-3">
          {/* <img className="card-img-top" src="..." alt="Img" /> */}
          <a style={{textDecoration: 'none', color:'black'}} href={fabrik}><div className="card-body">Image-6</div></a>
        </div>
        <div className="card my-3">
          {/* <img className="card-img-top" src="..." alt="Img" /> */}
          <a style={{textDecoration: 'none', color:'black'}} href={fabrik}><div className="card-body">Image-7</div></a>
        </div>
        <div className="card my-3">
          {/* <img className="card-img-top" src="..." alt="Img" /> */}
          <a style={{textDecoration: 'none', color:'black'}} href={fabrik}><div className="card-body">Image-8</div></a>
        </div>
        <div className="card">
          {/* <img className="card-img-top" src="..." alt="Img" /> */}
          <a style={{textDecoration: 'none', color:'black'}} href={fabrik}><div className="card-body">Image-9</div></a>
        </div>
      </div>
    </>
  );
}

export default App;
