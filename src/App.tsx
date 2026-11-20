import { SignInButton, SignUpButton, UserButton } from "@clerk/react";
import React from "react";

function App() {
  return (
    <div  className="flex min-h-screen flex-col bg-black font-sans text-zinc-100">
      <div className="flex-grow px-4 py-6">
       
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
            <h3 className="mt-2 text-base font-normal">malumot</h3>
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

   
      <section className="relative mt-16 flex min-h-screen w-full items-center justify-center overflow-hidden border-t ">
        <video
            src="https://www.pexels.com/download/video/36527017/"
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 "></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-6xl">
            Bizni tanlaganingiz uchun rahmat!
          </h2>
          <p className="mt-4 text-base text-zinc-200 sm:text-xl">
            Sizning ishonchingiz biz uchun muhim. Yana tashrif buyuring!
          </p>
        </div>
      </section>

     
      <footer id="footer" className="border-t border-zinc-800 bg-zinc-950 py-10 text-zinc-400">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:grid-cols-3">
        
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-xs font-bold text-zinc-950">
                S
              </div>
              <span className="text-base font-bold text-white">Store</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-zinc-500">
              Eng sifatli mahsulotlar va qulay xizmatlar platformasi.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Bo'limlar</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <a href="#top" className="transition hover:text-white">
                  Bosh sahifa
                </a>
              </li>
              <li>
                <a href="#footer" className="transition hover:text-white">
                  Aloqa
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-sm font-semibold text-white">Bog'lanish</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <a href="#telegram" className="transition hover:text-white">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#instagram" className="transition hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
