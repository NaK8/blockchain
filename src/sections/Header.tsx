import CutCornerButton from "../components/CutCornerButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container">
        <div className="flex h-24 items-center justify-between md:h-28">
          <div>
            <img src="/assets/images/logo.svg" alt="logo image" />
          </div>
          <div className="flex items-center gap-4">
            <CutCornerButton className="hidden md:inline-flex">
              Get Started
            </CutCornerButton>
            <div className="relative size-10">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-0.5 w-5 -translate-y-1 bg-zinc-300"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-0.5 w-5 translate-y-1 bg-zinc-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
