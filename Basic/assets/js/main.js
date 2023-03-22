"use strict";

// import the necessary modules
import * as THREE from "./build/three.module.js";

// create a scene
var scene = new THREE.Scene();

// create a renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });

// set the viewport size
renderer.setPixelsRatio(window.devicePixelRatio);

// set the size of the renderer
renderer.setSize(window.innerWidth, window.innerHeight);

// add the renderer to the html page
document.body.appendChild(renderer.domElement);

// create a camera
var camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	1,
	10000,
);

// camera position
camera.position.set(-500, 400, -500);
camera.lookAt(new THREE.Vector3(0, 0, 0));

// add the camera to the scene
scene.add(camera);

// ambient light
var ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
scene.add(ambientLight);

// create a directional light
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// geometry cube

var geometry = new THREE.BoxGeometry(800, 150, 300);
var material = new THREE.MeshBasicMaterial({ color: 0xc0392b });
cube = new THREE.Mesh(geometry, material);

// add the cube to the scene
scene.add(cube);

// cube rotation
cube.rotation.y = Math.PI / 2;
cube.rotation.x += 0.005;

// Cube scale
cube.scale.z = 2;

// // create a group to hold all the objects
// var group = new THREE.Group();

// // add the group to the scene
// scene.add(group);

// create a directional light
