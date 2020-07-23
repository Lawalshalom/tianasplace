import React, { Component } from 'react'
import * as THREE from "three";
import { OrbitControls } from "../Three/NewOrbitControls";
import "./about.css";

class Techstack extends Component {
    constructor(){
        super();
        this.canvasStyle = this.canvasStyle.bind(this);
    }

    componentDidMount(){
       var scene = new THREE.Scene();
        const canvas =document.getElementById("teck-stack");
        const parent = document.getElementById("parent");
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(150, 150, 250);
        var renderer = new THREE.WebGLRenderer( {
            canvas: canvas, alpha: true } );
        const width = window.innerWidth < 768 ? window.innerWidth * 5/6 : window.innerHeight *2/3
        renderer.setSize(window.innerWidth/2, width, true);
        parent.appendChild(renderer.domElement);
        onWindowResize();

        var controls = new OrbitControls( camera, renderer.domElement );

        var radius = 80;
        var segments = 150;
        var rings = 70;

        var geometry = new THREE.SphereGeometry(radius, segments, rings);
        var loader = new THREE.TextureLoader();
        var texture = loader.load("https://res.cloudinary.com/lawfirm1000/image/upload/v1594960316/Portfolio%20site/Tech_Stack_1_-newest_e9umcp.png");
        var material = new THREE.MeshBasicMaterial({
          map: texture,
         side: THREE.DoubleSide,
         shadowSide: THREE.DoubleSide,
        });


        var mesh = new THREE.Mesh( geometry, material );
        mesh.material.side = THREE.BackSide; // back faces
        mesh.renderOrder = 1;
        scene.add( mesh );

        mesh = new THREE.Mesh( geometry, material.clone());
        mesh.material.side = THREE.FrontSide; // front faces
        mesh.renderOrder = 2;
        scene.add( mesh );

        window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth/2, width, true);
        }

        var render = function() {
          requestAnimationFrame(render);

          mesh.rotation.x += 0.01;
          mesh.rotation.y += 0.01;
          mesh.rotation.z += 0.01;

          renderer.render(scene, camera);
        };

        render();
    }
    canvasStyle() {
        if(window.innerWidth < 768){
            return {
                position: "relative",
                left: "15vw",
                top: "-5vh",
                overflow: "hidden",
                zIndex: "1",
                outline: "none"
            }
        } else return {
            position: "relative",
            left: "-10vw",
            top: "-15vh",
            overflow: "hidden",
            zIndex: "1",
            outline: "none"
        }
    }
    render() {
        return (
            <>
                <div id="parent">
                <canvas id="teck-stack" style={this.canvasStyle()}></canvas>
                </div>
</>
        )
    }
}
export default Techstack;