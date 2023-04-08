class Cube {
    constructor(size) {
        this.size = size;
        this.geometry = new THREE.BoxGeometry(size, size, size);
        this.materials = this.generateMaterials();
        this.mesh = new THREE.Mesh(this.geometry, this.materials);
        this.wireFrame = this.createWireFrame();
        this.mesh.add(this.wireFrame);
    }

    // This method generates 6 random coloured faces for the cube
    generateMaterials() {
        const randomColors = [
                            this.generateRandomColor(), 
                            this.generateRandomColor(), 
                            this.generateRandomColor(), 
                            this.generateRandomColor(), 
                            this.generateRandomColor(), 
                            this.generateRandomColor()
                            ];
        return randomColors.map(color => new THREE.MeshBasicMaterial({ color }));
    }

    // This method generates a random color
    generateRandomColor() {
        return new THREE.Color(Math.random(), Math.random(), Math.random());
    }

    // This method creates a wireframe for the cube
    createWireFrame() {
        const edges = new THREE.EdgesGeometry(this.geometry);
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
        return new THREE.LineSegments(edges, lineMaterial);
    }

    // This method is called every frame to rotate the cube
    animateCube() {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
    }

    // This method is called every 2 seconds to randomly generate new colors for the cube
    updateColours() {
        const randomColors = [
            this.generateRandomColor(), 
            this.generateRandomColor(), 
            this.generateRandomColor(), 
            this.generateRandomColor(), 
            this.generateRandomColor(), 
            this.generateRandomColor()
            ];
        randomColors.forEach((color, index) => {
            this.materials[index].color = color;
        });
    }
}

export { Cube };