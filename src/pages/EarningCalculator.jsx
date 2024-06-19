import React, { useState } from "react";

const EarningsCalculator = () => {
  const [followers, setFollowers] = useState(500000);
  const [products, setProducts] = useState(25);
  const [influencerType, setInfluencerType] = useState("");
  const monthlyEarning = (followers / 1000) * (products / 25);
  const yearlyEarning = monthlyEarning * 12;

  return (
    <div className="flex flex-col items-center bg-white">
      <h1 className="text-2xl font-bold mt-6 mb-6">
        ESTIMATE EARNING POTENTIAL
      </h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-row justify-evenly ">
          <div className="flex flex-col">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                What kind of influencer are you?
              </label>
              <select
                value={influencerType}
                onChange={(e) => setInfluencerType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select influencer type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                How many followers do you have?
              </label>
              <input
                type="range"
                min="0"
                max="1000000"
                step="1000"
                value={followers}
                onChange={(e) => setFollowers(Number(e.target.value))}
                className="w-full custom-range"
              />
              <div className="text-center mt-2">
                {followers.toLocaleString()}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                How many products do you list monthly?
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={products}
                onChange={(e) => setProducts(Number(e.target.value))}
                className="w-full custom-range"
              />
              <div className="text-center mt-2">{products}</div>
            </div>
          </div>
          <div>
            <div style={{ margin: "70px" }}>
              <div className="flex flex-col justify-center mt-10 text-center">
                <h2 className="text-xl font-semibold">Monthly Earning</h2>
                <div className="text-customBlue text-2xl font-bold">
                  ₹{monthlyEarning.toFixed(2)}
                </div>
                <h2 className="text-xl font-semibold mt-4">Yearly Earning</h2>
                <div className="text-customBlue text-2xl font-bold">
                  ₹{yearlyEarning.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className=" bg-customBlue text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => {}}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarningsCalculator;
