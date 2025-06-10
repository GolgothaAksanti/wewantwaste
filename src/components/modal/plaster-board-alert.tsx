export const PlasterboardAlert = () => {
  return (
    <div className="w-screen h-screen fixed flex items-center justify-center inset-0 bg-black/80">
      <div className="bg-zinc-900 w-1/3 rounded-lg">
        <p className="p-6 font-medium border-b border-zinc-800">
          Do You Have Any Plasterboard?
        </p>

        <div className="p-6 space-y-6 flex justify-center items-center">
          <button className="bg-blue-600 py-4 rounded-lg">Yes</button>
          <button className="bg-blue-600 py-4 rounded-lg">No</button>
        </div>
      </div>
    </div>
  );
};
