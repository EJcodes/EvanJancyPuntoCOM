import React,{Component} from 'react';
import ReactDOM from "react-dom";
import * as Three from 'three';


class App extends Component {
  componentDidMount() {
    var scene = new Three.Scene();
    var camera = new Three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    var renderer = new Three.WebGL1Renderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    this.mount.appendChild( renderer.domElement );

    var geometry = new Three.BoxGeometry( 1, 1, 1 );
    var material = new Three.MeshStandardMaterial( { 
      color: 0x7e31eb } );

    var cube = new Three.Mesh( geometry, material);
    
    scene.add( cube );

    const light = new Three.HemisphereLight( 0xffffbb, 0x080820, 1 );

    scene.add( light );
    camera.position.z = 2;
    

    var animate = function() {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.x += 0.01;
      cube.rotation.x += 0.01;
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
