"use strict";

// import the necessary modules
import * as THREE from "../../build/three.module.js";

// variables global
var scene;
var renderer;
var camera;
var cube;
var clock;

var width = 300;
var height = 300;

function init() {
	// create a scene
	scene = new THREE.Scene();
	clock = new THREE.Clock();

	var DOMcanvas = document.getElementById("ThreejsCanvas");

	// create a renderer
	renderer = new THREE.WebGLRenderer({ canvas: DOMcanvas, antialias: true, alpha: true });
	// set the viewport size
	renderer.setPixelRatio(window.devicePixelRatio);
	// set the size of the renderer
	// renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setSize(width, height);
	// add the renderer to the html page
	// document.body.appendChild(renderer.domElement);

	// create a camera
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		1,
		10000,
	);
	// camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
	// camera position
	camera.position.set(-500, 400, -500);
	// orienté vers le centre de la  scene
	camera.lookAt(new THREE.Vector3(0, 0, 0));
	// add the camera to the scene
	scene.add(camera);

	// ambient light
	var ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
	scene.add(ambientLight);
	// create a directional light
	var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
	scene.add(directionalLight);

	// geometry cube
	var cubeGeo = new THREE.BoxGeometry(300, 300, 300);
	var cubeMat = new THREE.MeshPhongMaterial({ color: 0x34495e });
	cube = new THREE.Mesh(cubeGeo, cubeMat);
	// add the cube to the scene
	scene.add(cube);

	render();
}

function render() {
	var delta = clock.getDelta();
	var elapsed = clock.elapsedTime;

	console.log(elapsed);

	// rotate the cube
	cube.rotation.y += 0.6 * delta;
	cube.rotation.x += 0.3 * delta;
	// cube.rotation.y += 0.01;
	// cube.rotation.x += 0.005;

	// move the cube to top bottom
	cube.position.y = Math.sin(elapsed) * 100;
	// move the cube to left right
	cube.position.x = Math.cos(elapsed) * 100;

	renderer.render(scene, camera);
	requestAnimationFrame(render);
}

init();
