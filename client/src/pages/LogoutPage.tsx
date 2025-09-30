const LogoutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[calc(100vh-12rem)] animate-fade-in bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        You have been logged out.
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Thank you for using AspireNext!
      </p>
    </div>
  );
};

export default LogoutPage;