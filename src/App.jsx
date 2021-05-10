import React,{Component} from 'react';
import ReactDOM from "react-dom";
import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';




class App extends Component {
  componentDidMount() {
    var scene = new Three.Scene();
    var camera = new Three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    var renderer = new Three.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    this.mount.appendChild( renderer.domElement );

    const controls = new OrbitControls(camera, renderer.domElement);

    var geometry = new Three.BoxGeometry();
    var material = new Three.MeshBasicMaterial( { 
      color: 0x00ff00 } );

    var cube = new Three.Mesh( geometry, material);
    
    scene.add( cube );
  

    const light = new Three.HemisphereLightProbe( 0xe01a1a, 0x080820, 1 );
    

    scene.add( light );
    scene.add( controls );
    camera.position.z = 5;
    

    var animate = function() {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );
    };

    animate();
  }


  render() {
    return (
      <div ref={ref => (this.mount = ref) }/>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement);
  
export default App;
