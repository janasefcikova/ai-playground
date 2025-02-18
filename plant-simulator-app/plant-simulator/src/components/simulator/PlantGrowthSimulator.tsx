"use client";

import React, { useState, useEffect } from 'react';
import { Droplets, Sun, Cloud, Scissors, PlayCircle, PauseCircle, FastForward, Leaf, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PlantGrowthSimulator = () => {
  // State declarations - grouped all together at the top
  const [height, setHeight] = useState(20);
  const [health, setHealth] = useState(100);
  const [water, setWater] = useState(50);
  const [sunlight, setSunlight] = useState(50);
  const [branches, setBranches] = useState(0);
  const [isPruned, setIsPruned] = useState(false);
  const [cloudCover, setCloudCover] = useState(0);
  const [fertilizer, setFertilizer] = useState(0);
  const [simulationSpeed, setSimulationSpeed] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [showMechanics, setShowMechanics] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const growthInterval = setInterval(() => {
      if (health > 0) {
        // Growth rate depends on health, water, sunlight, and fertilizer levels
        const growthRate = (health / 100) * ((water + sunlight) / 200) * (1 + fertilizer / 100) * (1 - cloudCover / 200);
        setHeight(prev => Math.min(prev + growthRate, 200));

        // Natural resource depletion (affected by simulation speed)
        setWater(prev => Math.max(prev - 0.5 * simulationSpeed, 0));
        setSunlight(prev => Math.max(prev - 0.5 * simulationSpeed * (1 + cloudCover / 100), 0));
        setFertilizer(prev => Math.max(prev - 0.3 * simulationSpeed, 0));

        // Health affected by resource levels
        const healthChange = ((water + sunlight) / 200) - 0.5 + (fertilizer / 200);
        setHealth(prev => Math.min(Math.max(prev + healthChange, 0), 100));

        // Branch growth
        if (Math.random() < 0.1 && height > 50 && branches < 5 && !isPruned) {
          setBranches(prev => prev + 1);
        }

        // Random cloud changes
        if (Math.random() < 0.1) {
          setCloudCover(prev => Math.min(Math.max(prev + (Math.random() * 20 - 10), 0), 100));
        }
      }
    }, 1000 / simulationSpeed);

    return () => clearInterval(growthInterval);
  }, [health, water, sunlight, height, branches, isPruned, cloudCover, fertilizer, simulationSpeed, isPaused]);

  const waterPlant = () => {
    setWater(prev => Math.min(prev + 30, 100));
  };

  const addSunlight = () => {
    setSunlight(prev => Math.min(prev + 30, 100));
  };

  const prunePlant = () => {
    setHeight(prev => prev * 0.8);
    setBranches(0);
    setIsPruned(true);
    setTimeout(() => setIsPruned(false), 5000);
  };

  const addFertilizer = () => {
    setFertilizer(prev => Math.min(prev + 25, 100));
  };

  const toggleClouds = () => {
    setCloudCover(prev => prev > 50 ? 0 : 100);
  };

  const getPlantColor = () => {
    if (health < 30) return '#a8a878';
    if (health < 60) return '#90c048';
    return '#38a038';
  };

  const MechanicsExplanation = () => (
    <Card className="w-full max-w-md mx-auto mt-4">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Simulation Mechanics</CardTitle>
          <button
            onClick={() => setShowMechanics(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Growth Mechanics</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Base growth rate depends on plant health and resource levels</li>
              <li>Growth is enhanced by fertilizer (up to 100% boost at max level)</li>
              <li>Plants need minimum health to grow branches</li>
              <li>Maximum 5 branches can grow at random intervals</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Resource System</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Water and sunlight naturally deplete over time</li>
              <li>Depletion rate increases with simulation speed</li>
              <li>Cloud cover reduces sunlight effectiveness and increases depletion</li>
              <li>Fertilizer provides growth bonus but depletes gradually</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Environmental Factors</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Clouds randomly change intensity over time</li>
              <li>Cloud cover ranges from 0-100%</li>
              <li>High cloud cover significantly reduces sunlight absorption</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Plant Health</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Health affects growth rate and plant color</li>
              <li>Below 30% health: Yellow (unhealthy)</li>
              <li>30-60% health: Light green (recovering)</li>
              <li>Above 60% health: Dark green (healthy)</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-4">
      {/* Speed Controls */}
      <div className="flex justify-between items-center max-w-md mx-auto">
        <div className="flex space-x-4">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
            title={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <PlayCircle size={24} /> : <PauseCircle size={24} />}
          </button>
          <button
            onClick={() => setSimulationSpeed(prev => prev === 1 ? 2 : prev === 2 ? 4 : 1)}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
            title={`Speed: ${simulationSpeed}x`}
          >
            <FastForward size={24} />
            <span className="ml-1">{simulationSpeed}x</span>
          </button>
        </div>

        <button
          onClick={() => setShowMechanics(!showMechanics)}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
          title="Show Mechanics"
        >
          <Info size={24} />
        </button>
      </div>

      {/* Main Simulator Card */}
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Plant Growth Simulator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            {/* Plant Visualization */}
            <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
              {/* Cloud Visualization */}
              {cloudCover > 0 && (
                <div
                  className="absolute top-0 left-0 w-full h-16 flex justify-around items-center"
                  style={{ opacity: cloudCover / 100 }}
                >
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Cloud key={i} size={32} className="text-gray-400" />
                  ))}
                </div>
              )}
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                style={{
                  width: '8px',
                  height: `${height}px`,
                  backgroundColor: getPlantColor(),
                  transition: 'height 0.5s ease-in-out'
                }}
              >
                {Array.from({ length: branches }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      width: '20px',
                      height: '3px',
                      backgroundColor: getPlantColor(),
                      transform: `rotate(${i % 2 ? 45 : -45}deg)`,
                      top: `${(i + 1) * 20}px`,
                      left: i % 2 ? '8px' : '-20px'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="w-full grid grid-cols-4 gap-2 text-center text-sm">
              <div>Health: {Math.round(health)}%</div>
              <div>Water: {Math.round(water)}%</div>
              <div>Sun: {Math.round(sunlight)}%</div>
              <div>Fertilizer: {Math.round(fertilizer)}%</div>
            </div>

            {/* Controls */}
            <div className="flex space-x-4">
              <button
                onClick={waterPlant}
                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                title="Water Plant"
              >
                <Droplets size={24} />
              </button>
              <button
                onClick={addSunlight}
                className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
                title="Add Sunlight"
              >
                <Sun size={24} />
              </button>
              <button
                onClick={toggleClouds}
                className="p-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
                title="Toggle Clouds"
              >
                <Cloud size={24} />
              </button>
              <button
                onClick={addFertilizer}
                className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                title="Add Fertilizer"
              >
                <Leaf size={24} />
              </button>
              <button
                onClick={prunePlant}
                className="p-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
                disabled={isPruned}
                title="Prune Plant"
              >
                <Scissors size={24} />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mechanics Explanation Panel */}
      {showMechanics && <MechanicsExplanation />}
    </div>
  );
};

export default PlantGrowthSimulator;