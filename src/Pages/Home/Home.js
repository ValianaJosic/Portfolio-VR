import 'aframe'
import React, {Component} from 'react'

class Home extends Component {
  render () {
    return (
      <a-scene>
        <a-link id='HI'color='white' position= "-4.00672 1.23904 -1.36798">HELLO</a-link>
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-box position="-1 0.5 -3" rotation="0 45 0" width="1" height="1" depth="1" color="#4CC3D9"></a-box>
        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        <a-sky color="black"></a-sky>
        <a-text id='Hello' text="value:  HI;  anchor:  align;  width:  5;  align:  center" geometry="primitive:  plane" position= "3.55694 1.16895 -0.92329"></a-text>
      </a-scene>
    );
  }
}

export default Home;
