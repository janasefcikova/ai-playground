"use client"; // Marks this as a Client Component
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, TrendingUp } from 'lucide-react';

const tours = [
  {
    id: 1,
    title: "Skip-the-Line Colosseum Guided Tour",
    duration: "3 hours",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviews: 2457,
    recentBookings: 182,
    spotsLeft: 8,
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Paris Seine River Dinner Cruise",
    duration: "2.5 hours",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.9,
    reviews: 1893,
    recentBookings: 156,
    spotsLeft: 4,
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Barcelona Sagrada Familia Fast Track",
    duration: "2 hours",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.7,
    reviews: 3241,
    recentBookings: 234,
    spotsLeft: 12,
    image: "/api/placeholder/400/250"
  }
];

const TourCard = ({ tour, variant }) => {
  const [impressionLogged, setImpressionLogged] = useState(false);

  useEffect(() => {
    if (!impressionLogged) {
      // Log impression to analytics
      console.log(`Impression logged for tour ${tour.id}, variant ${variant}`);
      setImpressionLogged(true);
    }
  }, [tour.id, variant, impressionLogged]);

  const handleBookClick = () => {
    // Log conversion to analytics
    console.log(`Booking clicked for tour ${tour.id}, variant ${variant}`);
  };

  return (
      <Card className="w-full max-w-sm">
        <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-48 object-cover"
        />
        <CardHeader>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-medium">{tour.rating}</span>
            <span className="text-gray-600">({tour.reviews} reviews)</span>
          </div>
          <h3 className="text-lg font-semibold mt-2">{tour.title}</h3>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Clock className="w-4 h-4" />
            <span>{tour.duration}</span>
          </div>

          {variant === 'A' && (
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-green-600">
                  <Users className="w-4 h-4" />
                  <span>{tour.recentBookings} booked recently</span>
                </div>
                {tour.spotsLeft < 10 && (
                    <div className="text-red-500 text-sm font-medium">
                      Only {tour.spotsLeft} spots left for this date!
                    </div>
                )}
              </div>
          )}

          {variant === 'B' && (
              <div className="space-y-2 mb-4">
                <div className="line-through text-gray-500">
                  ${tour.originalPrice.toFixed(2)}
                </div>
                <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm">
                Save ${(tour.originalPrice - tour.price).toFixed(2)}
              </span>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
              </div>
          )}
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <div className="text-2xl font-bold mb-2">
              ${tour.price.toFixed(2)}
            </div>
            <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={handleBookClick}
            >
              Book Now
            </Button>
          </div>
        </CardFooter>
      </Card>
  );
};

const TourListing = () => {
  // Randomly assign variant when component mounts
  const [variant] = useState(Math.random() < 0.5 ? 'A' : 'B');

  return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Popular Tours</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map(tour => (
              <TourCard key={tour.id} tour={tour} variant={variant} />
          ))}
        </div>
      </div>
  );
};


export default function Home() {
  return (
    <TourListing />
  );
}
