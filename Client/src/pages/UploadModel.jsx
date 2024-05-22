import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploadModel = () => {
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  

 const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file',file);

    try {
     const res= await axios.post('https://glb-viewer.onrender.com/api/models', formData);
     console.log(res.data)
     navigate('/')
      console.log('Model uploaded successfully!');
    } catch (error) {
      console.error('Error uploading model:', error);
    }
    
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-10'>
      <h1 className='text-3xl font-bold text-center'>Upload 3D Model</h1>
      <form className='flex flex-col items-center gap-10 pt-10 p-5 border border-black/10 shadow-lg rounded-lg shadow-black/40' onSubmit={handleSubmit}>
        <input
          className='w-[250px] border border-black/40 rounded-md p-2' 
          type="text"         
          onChange = {(e)=>setName(e.target.value)} 
          placeholder="Enter a name"
         
        />
       
        <input
          className='w-[250px] border border-black/40 rounded-md p-2'
          type="file"
          onChange={(e)=>setFile(e.target.files[0])}
          accept=".glb"        
         
        />
        <button className="px-10 py-2 rounded-lg hover:bg-black/80 border bg-black text-white" type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadModel;
