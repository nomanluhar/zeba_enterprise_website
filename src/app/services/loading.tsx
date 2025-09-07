export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[300px]">
      <span className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></span>
      <span className="ml-4 text-primary text-lg font-semibold">Loading...</span>
    </div>
  );
}
