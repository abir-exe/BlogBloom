

const ErrorPage = () => {
  return (
    <div>
      <div>
        
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-2">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-xl text-gray-600">
          Return to the{" "}
          <a href="/" className="text-blue-500 hover:underline">
            homepage
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
