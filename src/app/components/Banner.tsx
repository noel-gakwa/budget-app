// src/app/components/Banner.tsx
const Banner = () => {
    return (
      <div className="relative w-full h-64 bg-gray-800 flex items-center justify-center">
        {/* The background image is removed */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome to Noel's Budget App</h1>
        </div>
      </div>
    );
  };
  
  export default Banner;
  