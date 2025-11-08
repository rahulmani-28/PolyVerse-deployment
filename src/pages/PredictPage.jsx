import React, { useState } from "react";
import PageContainer from "../components/PageContainer";
import PolymerInput from "../components/PolymerInput";
import PropertyDisplay from "../components/PropertyDisplay";
import { useNavigate } from "react-router-dom";

const PredictPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [predictions, setPredictions] = useState(null);
    const navigate = useNavigate();

    const handlePredict = async (name) => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name }), // Send polymer name instead of SMILES
            });

            const data = await response.json();

            if (response.ok) {
                setPredictions(data.predicted_properties); // Set predictions
            } else {
                setError(data.error || "Unknown error occurred");
            }
        } catch (err) {
            setError("Failed to connect to the server. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white-100 min-h-screen flex justify-start items-start p-6 mt-20">
            <div className="flex space-x-6 w-full">
                {/* PageContainer aligned to the left */}
                <div className="flex-1">
                    <PageContainer
                        // className="shadow-md rounded-lg p-6"
                    >
                        <h1 className="text-3xl font-bold text-left text-gray-800 mb-4">
                            Predict Properties
                        </h1>
                        <div className="space-y-6 text-left">
                            <PolymerInput onSubmit={handlePredict} isLoading={loading} />
                            {error && (
                                <div className="text-red-500 text-sm font-medium">
                                    Error: {error}
                                </div>
                            )}
                        </div>
                    </PageContainer>
                </div>

                {/* PropertyDisplay aligned to the right */}
                <div className="flex-1">
                    {predictions && (
                        <PropertyDisplay predictions={predictions} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PredictPage;