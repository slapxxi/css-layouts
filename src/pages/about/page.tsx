export const AboutPage = () => {
  return (
    <section>
      <div className="relative grid grid-cols-[minmax(auto,200px)_auto] gap-2 auto-rows-[minmax(min-content,min-content)]">
        <svg className="col-[1/1] row-[1/span_4] h-[300px] w-full">
          <rect x="0" y="0" width="100%" height="100%" fill="red" />
        </svg>
        <p className="col-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          iure, perferendis ullam cupiditate in non. Molestiae error nihil
          dignissimos est temporibus, libero cupiditate veniam, ipsum autem sint
          unde aliquam assumenda.
        </p>
        <div className="row-span-1 col-2 text-xl self-center justify-self-center bg-amber-300 p-2 rounded-lg shadow-lg">
          hehe
        </div>
        <div className="col-2">extra</div>
        <div className="col-2">goo goo</div>
      </div>
    </section>
  );
};
