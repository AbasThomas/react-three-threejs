import React from 'react'
import { Mesh } from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

const Experience = () => {
  return (
    <>
        <OrbitControls/>
        <Mesh>
             <boxGeometry/>
             <meshNormalMaterial/>
        </Mesh>
    </>
  )
}

export default Experience