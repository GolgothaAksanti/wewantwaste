export const HavyWasteTypeModal = () => {
  return (
    <div className="w-screen h-screen fixed z-30 flex items-center justify-center inset-0 bg-black/80">
      <div className="bg-zinc-900 w-1/3 rounded-lg">
        <p className="p-6 font-medium border-b border-zinc-800">
          Do You Have Any Heavy Waste Types?
        </p>

        <div className="p-6 space-y-6">
          <p>Select All That Apply</p>

          <div className="grid grid-cols-3 gap-4">
            {tags.map((tag) => (
              <button
                className="py-3 font-medium rounded-lg bg-blue-800/30 outline-nones hover:bg-blue-500 transition-colors ease-in duration-200"
                key={tag}
              >
                {tag}
              </button>
            ))}
          </div>

          <button className="bg-teal-600 py-3 w-full rounded-lg">
            I Do Not have Any
          </button>
        </div>
      </div>
    </div>
  );
};

const tags = [
  "Soil",
  "Concrete",
  "Bricks",
  "Tiles",
  "Sand",
  "Gravel",
  "Rubble",
];
