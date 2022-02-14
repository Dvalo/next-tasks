function Loader() {
  return (
    <div className="flex h-full justify-center">
      <div className="mx-auto flex w-56 items-center justify-between">
        <div className="animation-delay-100 h-12 w-12 animate-bounce rounded-full bg-violet-400 p-2"></div>
        <div className="animation-delay-200 h-12 w-12 animate-bounce rounded-full bg-violet-500 p-2"></div>
        <div className="animation-delay-300 h-12 w-12 animate-bounce rounded-full bg-violet-600 p-2"></div>
      </div>
    </div>
  );
}

export default Loader;
