import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Link } from 'react-router-dom';

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
};

const ModelDisplay = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const res = await axios.get('https://glb-viewer.onrender.com/api/models');
        setModels(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching models:', error);
      }
    };
    fetchModels();
  }, []);

  return (
    <div className='w-full  text-white bg-gray-950 py-10 px-5 flex  flex-col items-center'>
      <h1 className=' text-xl font-bold text-center'>3D Model Viewer</h1>
     <Link to ={'/upload'}> <button className='w-[250px] bg-white text-black p-2 my-10 rounded-xl'>Upload 3D Model</button></Link>
      <div className='w-[60%] flex flex-col gap-10 justify-center '>
     
      {models.map((model) => (
        <div className = 'border-2 p-5' key={model._id}>
         
          <Canvas style={{ height: '500px' }}>
            <ambientLight />
            <spotLight position={[10, 10, 10]} />
            <Model url={`https://glb-viewer.onrender.com/files/${model.fileUrl}`} />
            <OrbitControls />
          </Canvas>
          <h2 className='text-2xl  text-blue-950 font-bold text-center'>{model.name}</h2>
        </div>
      ))}
      
      </div>
    </div>
  );
};

export default ModelDisplay;
