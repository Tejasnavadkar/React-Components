import { useState } from "react";
import axios from "axios";
// import "./App.css";

// You can make your progress bar dynamic by tracking the progress of an API request using Axios. Axios provides a onDownloadProgress function that allows us to monitor how much of the response has been loaded.

function ApiTrackingProgressBar() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setProgress(0); // Reset progress
    setLoading(true);

    
    try {
      const response = await axios.get("https://dummyjson.com/products?limit=100", {
        onDownloadProgress: (progressEvent:any) => {  // You can make your progress bar dynamic by tracking the progress of an API request using Axios. Axios provides a onDownloadProgress function that allows us to monitor how much of the response has been loaded.
          // Calculate progress percentage
          const percentCompleted = Math.round((progressEvent?.loaded / progressEvent?.total) * 100);
          setProgress(percentCompleted);
        },
      });

      // When the response is fully loaded, ensure it's 100%
      setProgress(100);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      {/* Progress Bar */}
      <div className="w-96 h-3 bg-gray-200 rounded-full overflow-hidden border border-gray-400 mt-10">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Show progress percentage */}
      <p className="text-lg font-semibold">{progress}%</p>

      {/* Button to trigger API Call */}
      <button
        onClick={fetchData}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Loading..." : "Fetch Data"}
      </button>
    </div>
  );
}

export default ApiTrackingProgressBar;
