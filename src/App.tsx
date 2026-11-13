import { SignInButton, SignUpButton, UserButton } from "@clerk/react";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-6 font-sans text-zinc-100">
      {/* Header (foni olib tashlangan, faqat qora) */}
      <header className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-bold text-zinc-950">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Store
          </span>
        </div>

        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <button
              type="button"
              className="cursor-pointer rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:bg-zinc-700"
            >
              Kirish
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button
              type="button"
              className="cursor-pointer rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
            >
              Ro'yxatdan o'tish
            </button>
          </SignUpButton>

          <UserButton />
        </div>
      </header>

      
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        
        <div className="border border-gray-500 bg-gray-800 p-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMih8ucMl5mqD1x9xj7pghBg496ecBsA2B1oysap2NkpPMnfg3FLiTEqw&s=10"
            alt="Rasm 1"
            className="h-32 w-full object-cover"
          />
          <h3 className="mt-2 text-base font-normal">malumot</h3>
          <p className="mt-1 text-sm text-gray-400">zor</p>
          <button
            type="button"
            className="mt-3 border border-gray-400 px-3 py-1 text-sm"
          >
            Tugma
          </button>
        </div>

       
        <div className="border border-gray-500 bg-gray-800 p-4">
          <img
            src="https://4kwallpapers.com/images/wallpapers/gargantua-black-5200x3250-9611.jpg"
            alt="Rasm 2"
            className="h-32 w-full object-cover"
          />
          <h3 className="mt-2 text-base font-normal">malumot</h3>
          <p className="mt-1 text-sm text-gray-400">zor</p>
          <button
            type="button"
            className="mt-3 border border-gray-400 px-3 py-1 text-sm"
          >
            Tugma
          </button>
        </div>

       
        <div className="border border-gray-500 bg-gray-800 p-4">
          <img
            src="https://4kwallpapers.com/images/wallpapers/gargantua-black-4480x2520-9659.jpg"
            alt="Rasm 3"
            className="h-32 w-full object-cover"
          />
          <h3 className="mt-2 text-base font-normal">malumot</h3>
          <p className="mt-1 text-sm text-gray-400">zor</p>
          <button
            type="button"
            className="mt-3 border border-gray-400 px-3 py-1 text-sm"
          >
            Tugma
          </button>
        </div>

        
        <div className="border border-gray-500 bg-gray-800 p-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5k5BQhFEoWiCejSUcuoQkVSpU_fwuMeYH6CObpKhHufd8zwroG69xao&s=10"
            alt="Rasm 4"
            className="h-32 w-full object-cover"
          />
          <h3 className="mt-2 text-base font-normal">malumot</h3>
          <p className="mt-1 text-sm text-gray-400">zor</p>
          <button
            type="button"
            className="mt-3 border border-gray-400 px-3 py-1 text-sm"
          >
            Tugma
          </button>
        </div>

        <div className="border border-gray-500 bg-gray-800 p-4">
          <img
            src="https://4kwallpapers.com/images/wallpapers/women-romantic-2880x1800-25570.jpg"
            alt="Rasm 5"
            className="h-32 w-full object-cover"
          />
          <h3 className="mt-2 text-base font-normal">malumot </h3>
          <p className="mt-1 text-sm text-gray-400">zor</p>
          <button
            type="button"
            className="mt-3 border border-gray-400 px-3 py-1 text-sm"
          >
            Tugma
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
