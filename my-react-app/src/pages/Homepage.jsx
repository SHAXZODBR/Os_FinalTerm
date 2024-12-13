import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import Select from "../components/Select";
import Button from "../components/Button";

export default function Homepage() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("");

  const cities = [
    { value: "tashkent", label: "Tashkent city, Tashkent" },
    { value: "samarkand", label: "Samarkand" },
    { value: "bukhara", label: "Bukhara" },
  ];

  const handleSearch = () => {
    if (selectedCity) {
      navigate("/hotels");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Find your perfect stay!
          </h1>
          <div className="space-y-4">
            <Select
              label="Choose the city you want to stay in"
              options={cities}
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            />
            <Button onClick={handleSearch} className="w-full">
              Next
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
