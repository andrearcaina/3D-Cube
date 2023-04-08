import { Cube } from './cube.js';

class Scene {
    constructor() {
        // initialize the scene
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, -130, 500);
        
        // initialize the scene
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor(0x343a40);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        
        // Lights and cube creation
        this.lights = this.createLights();
        this.cube = new Cube(200);
        this.scene.add(this.cube.mesh, ...this.lights);
        
        // Render Scene and animate cube and update faces
        this.renderScene();
        this.updateFaces();
    }

    // This method creates the lights for the scene
    createLights() {
        return [new THREE.AmbientLight(0xffffff, 0.2), new THREE.DirectionalLight(0xffffff, 0.5).position.set(0, 1, 1)];
    }

    // This method is called every frame to render the scene
    renderScene() {
        requestAnimationFrame(() => this.renderScene());
        this.cube.animateCube();
        this.renderer.render(this.scene, this.camera);
    }

    // This method is called every 2 seconds to update the cube's materials
    updateFaces() {
        setInterval(() => {
        this.cube.updateColours();
        }, 2000);
    }
}

export { Scene };