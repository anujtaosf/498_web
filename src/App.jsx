import React from 'react';
import './App.css';
import Splatfacto from './sculpture_splatfacto.mp4';
import SplatfactoW from './sculpture_splatfacto-w.mp4';

import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider';
import SplatImg from './splat_img.png';
import SplatImgWild from './splat_img_wild.png';


//more testing

function App() {
  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-3">
        "in-the-wild" Gaussian Splatting
      </h1>

      <p className="text-center text-muted">
        Anuhea Tao, Thor Helgeson, Matthew Prince – University of Michigan / ROB 498: 3D Robot Perception
      </p>

      <div className="text-center my-3">
        <a href="https://example.com/video" className="btn btn-primary mx-2" target="_blank" rel="noreferrer">Video</a>
        <a href="https://example.com/paper.pdf" className="btn btn-outline-secondary mx-2" target="_blank" rel="noreferrer">PDF</a>
      </div>

      <div className="my-4">
        <h5><strong>Splatting in the Wild</strong></h5>
        <p>
          Our approach is to use 3D Gaussian Splatting methods and implement them on custom datasets to test their performance under varying conditions
        </p>
      </div>
      <div className="my-5">
        <h4 className="mb-3">Visual Comparison</h4>
        <div className="row">
          <div className="col-md-6 mb-3">
            <video className="w-100 rounded shadow" controls loop autoPlay muted playsInline>
              <source src={Splatfacto} type="video/mp4" />
            </video>
            <p className="text-center mt-2">Splatfacto</p>
          </div>
          <div className="col-md-6 mb-3">
            <video className="w-100 rounded shadow" controls loop autoPlay muted playsInline>
              <source src={SplatfactoW} type="video/mp4" />
            </video>
            <p className="text-center mt-2">Splatfacto-W</p>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h4 className="mb-3">Baseline Comparison</h4>
        <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={SplatImg} alt="Splatfacto" />}
            itemTwo={<ReactCompareSliderImage src={SplatImgWild} alt="Ours" />}
            style={{ height: 'auto', width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
