import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import './Testonomial.scss';

const Testonomials = [
  {
    id: 1,
    name: "John Doe",
    content:
      "Exceptional work on my website design! The UI is stunning and the API integration works flawlessly. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    content:
      "The video editing service was top-notch. My project came out better than I could have imagined.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    content:
      "Great job on the UI design. It's intuitive and visually appealing.",
  },
  {
    id: 4,
    name: "Emily Brown",
    content: "The API integration was seamless. Everything works perfectly!",
  },
  {
    id: 5,
    name: "Chris Lee",
    content:
      "Fantastic work on my website. It's exactly what I wanted and more.",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    content:
      "The attention to detail in the UI design was impressive. Very satisfied!",
  },
  {
    id: 7,
    name: "Tom Harris",
    content:
      "Quick turnaround and excellent communication throughout the project.",
  },
  {
    id: 8,
    name: "Lisa Chen",
    content:
      "The video editing brought my content to life. Couldn't be happier with the results.",
  },
];

const Testonomial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [arrowRotation, setArrowRotation] = useState(0);
  const rotationIntervalRef = useRef(null);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    setIsRotating(false);
    setArrowRotation(selectedIndex * (360 / Testonomials.length));
  };

  useEffect(() => {
    if (isRotating) {
      rotationIntervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % Testonomials.length;
          setArrowRotation(newIndex * (360 / Testonomials.length));
          return newIndex;
        });
      }, 3000); // Rotate every 3 seconds
    } else {
      clearInterval(rotationIntervalRef.current);
    }

    return () => clearInterval(rotationIntervalRef.current);
  }, [isRotating]);

  const renderClients = () => {
    return Testonomials.map((Testonomial, index) => {
      const angle = (index / Testonomials.length) * 2 * Math.PI;
      const radius = 120;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      return (
        <div
          key={Testonomial.id}
          className={`position-absolute rounded-circle d-flex align-items-center justify-content-center ${
            index === activeIndex
              ? "border border-4 border-primary"
              : null
          }`}
          style={{
            width: "80px",
            height: "80px",
            left: `calc(50% + ${x}px - 40px)`,
            top: `calc(50% + ${y}px - 40px)`,
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onClick={() => handleSelect(index)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/256/4825/4825112.png"
            alt=""
            className="h-100 w-100"
          />
        </div>
      );
    });
  };

  return (
    <div className="container py-5">
      <h2
        className="text-center testimonial_h2 mb-4"
        style={{ color: "var(--pink)" }}
      >
        Client Testonomials
      </h2>
      <div className="row g-4 p-2">
        <div className="col-lg-6 order-lg-2">
          <div
            className="position-relative d-flex justify-content-center align-items-center rounded-3"
            style={{ height: "400px" }}
          >
            {renderClients()}
          </div>
        </div>

        <div
          className="col-lg-6 order-lg-1 p-2 custome_radius testimonial_body box_shadow mb-2"
          style={{ height: "400px" }}
        >
          <Carousel
            activeIndex={activeIndex}
            onSelect={handleSelect}
            interval={null}
            controls={false}
            indicators={false}
            className="h-100  p-0"
          >
            {Testonomials.map((Testonomial) => (
              <Carousel.Item key={Testonomial.id}>
                <div className="card h-100 border-0 shadow-sm bg-transparent">
                  <div className="card-body">
                    <h5 className="card-title mb-3">{Testonomial.name}</h5>
                    <p className="card-text">{Testonomial.content}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testonomial;
