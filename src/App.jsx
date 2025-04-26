import React, { useRef } from 'react';
import './App.css';
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider';

import Splatfacto from './sculpture_splatfacto.mp4';
import SplatfactoW from './sculpture_splatfacto-w.mp4';
import NateSplat from './nate_splatfacto.mp4';
import NateSplatW from './nate_splatfacto-w.mp4';
import UnionSplat from './union_ns_splatfacto.mp4';
import UnionSplatW from './union_ns_splatfacto-w.mp4';

import BrandImg from './brandenburg_splat_img.png';
import BrandImgW from './brandenburg_splat_img_wild.png';
import TreviImg from './trevi_splat_img.png';
import TreviImgW from './trevi_splat_img_wild.png';

function App() {
  const row1Vid1Ref = useRef(null);
  const row1Vid2Ref = useRef(null);
  const row2Vid1Ref = useRef(null);
  const row2Vid2Ref = useRef(null);
  const row3Vid1Ref = useRef(null);
  const row3Vid2Ref = useRef(null);

  const handlePlay = (vid1, vid2, vid3) => {
    vid1.current?.play();
    vid2.current?.play();
    vid3.current?.play();
  };

  const handlePause = (vid1, vid2, vid3) => {
    vid1.current?.pause();
    vid2.current?.pause();
    vid3.current?.pause();
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-3">"in-the-wild" Gaussian Splatting</h1>
      <p className="text-center text-muted">
        Anuhea Tao, Thor Helgeson, Matthew Prince – University of Michigan / ROB 498: 3D Robot Perception
      </p>

      <div className="text-center my-3">
        <a href="https://website.com" className="btn btn-outline-secondary mx-2">PDF
        </a>
      </div>
      <div className="my-4">
        <h4><strong>Splatting in the Wild</strong></h4>
        <p>
          Our approach is to train 3D Gaussian Splatting methods on custom datasets to test their performance under varying conditions. 
          We start by performing baseline evaluations of existing datasets, specifically the PhotoTourism dataset. We train both Splatfacto-W 
          and WildGaussians on these datasets, both of which claim to be state-of-the-art models for "in the wild" datasets. We also train this dataset 
          with Splatfacto, which provides as a baseline model for comparison. We then evaluate these results based on objective and subjective metrics.
        </p>
        <p>
        Once having trained out baseline datasets, we demonstrate the capabilities of each model on our own data. We collected a wide range of data in 
          order to assess the generalizability of Gaussian Splatting methods beyond pre-established datasets. Captured scenes include challenging lighting scenarios,
          static and transient occlusions, and dynamic scene elements (creating background noise).
        </p>
      </div>
      
      <div
        className="row my-5"
        onMouseEnter={() => handlePlay(row1Vid1Ref, row1Vid2Ref)}
        onMouseLeave={() => handlePause(row1Vid1Ref, row1Vid2Ref)}
      >
        <h4 className="mb-3">Splatting FXB Sculpture</h4>
        <div className="col-md-6 mb-3">
          <video ref={row1Vid1Ref} className="w-100 rounded shadow" loop muted playsInline>
            <source src={Splatfacto} type="video/mp4" />
          </video>
          <p className="text-center mt-2">Splatfacto</p>
        </div>
        <div className="col-md-6 mb-3">
          <video ref={row1Vid2Ref} className="w-100 rounded shadow" loop muted playsInline>
            <source src={SplatfactoW} type="video/mp4" />
          </video>
          <p className="text-center mt-2">Splatfacto-W</p>
        </div>
      </div>
      <div
        className="row my-5"
        onMouseEnter={() => handlePlay(row2Vid1Ref, row2Vid2Ref)}
        onMouseLeave={() => handlePause(row2Vid1Ref, row2Vid2Ref)}
      >
        <h4 className="mb-3">Splatting a Person (Nate)</h4>
        <div className="col-md-6 mb-3">
          <video ref={row2Vid1Ref} className="w-100 rounded shadow" loop muted playsInline>
            <source src={NateSplat} type="video/mp4" />
          </video>
          <p className="text-center mt-2">Splatfacto</p>
        </div>
        <div className="col-md-6 mb-3">
          <video ref={row2Vid2Ref} className="w-100 rounded shadow" loop muted playsInline>
            <source src={NateSplatW} type="video/mp4" />
          </video>
          <p className="text-center mt-2">Splatfacto-W</p>
        </div>
      </div>
      <div
        className="row my-5"
        onMouseEnter={() => handlePlay(row3Vid1Ref, row3Vid2Ref)}
        onMouseLeave={() => handlePause(row3Vid1Ref, row3Vid2Ref)}
      >
        <h4 className="mb-3">Splatting the Union</h4>
        <div className="col-md-6 mb-3">
          <video ref={row3Vid1Ref} className="w-100 rounded shadow" loop muted playsInline>
            <source src={UnionSplat} type="video/mp4" />
          </video>
          <p className="text-center mt-2">Splatfacto</p>
        </div>
        <div className="col-md-6 mb-3">
          <video ref={row3Vid2Ref} className="w-100 rounded shadow" loop muted playsInline>
            <source src={UnionSplatW} type="video/mp4" />
          </video>
          <p className="text-center mt-2">Splatfacto-W</p>
        </div>
      </div>

      <div className="my-5">
        <h4 className="mb-3">Baseline Comparison</h4>

          {[
            { img1: BrandImg, img2: BrandImgW },
            { img1: TreviImg, img2: TreviImgW }
          ].map((pair, index) => (
            <div 
              key={index}
              style={{ 
                maxWidth: '900px', 
                margin: '2rem auto', 
                borderRadius: '10px', 
                overflow: 'hidden', 
                position: 'relative', 
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)' 
              }}
            >
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={pair.img1} alt="Splatfacto" />}
                itemTwo={<ReactCompareSliderImage src={pair.img2} alt="Splatfacto-W" />}
                style={{ height: 'auto', width: '100%' }}
                handle={
                  <div style={{
                    width: '4px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
                    borderRadius: '2px',
                    height: '100%'
                  }} />
                }
                onlyHandleDraggable={false}
              />
              <div style={{ 
                position: 'absolute', 
                top: '10px', 
                left: '10px', 
                backgroundColor: 'rgba(0,0,0,0.5)', 
                color: 'white', 
                padding: '4px 8px', 
                borderRadius: '5px',
                fontSize: '0.9rem'
              }}>
                Splatfacto
              </div>
              <div style={{ 
                position: 'absolute', 
                top: '10px', 
                right: '10px', 
                backgroundColor: 'rgba(0,0,0,0.5)', 
                color: 'white', 
                padding: '4px 8px', 
                borderRadius: '5px',
                fontSize: '0.9rem'
              }}>
                Splatfacto-W
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default App;
