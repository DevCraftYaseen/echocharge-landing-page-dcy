export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-blue-600 rounded-full animate-spin mx-auto"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Change Green, Drive Clean</h2>
        <p className="text-gray-500">Loading sustainable solutions...</p>
      </div>
    </div>
  )
}
