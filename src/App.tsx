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

   
      <section className="relative mt-16 flex min-h-screen w-full items-center justify-center overflow-hidden border-t border-zinc-800">
        <video
          src="https://www.pexels.com/download/video/34928867/"
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-6xl">
            Bizni tanlaganingiz uchun rahmat!
          </h2>
          <p className="mt-4 text-base text-zinc-200 sm:text-xl">
            Sizning ishonchingiz biz uchun muhim. Yana tashrif buyuring!
          </p>
        </div>
      </section>

      {/* Contact (Aloqa) qismi */}
      <footer className="border-t border-zinc-800 bg-zinc-950 px-4 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Biz bilan bog'laning
            </h2>
            <p className="mt-3 text-sm text-zinc-400 sm:text-base">
              Savollaringiz yoki takliflaringiz bo'lsa, quyidagi ma'lumotlar orqali murojaat qilishingiz mumkin.
            </p>

            <div className="mt-6 space-y-3 text-sm text-zinc-300">
              <p>
                <span className="font-semibold text-emerald-500">Manzil:</span>{" "}
                Toshkent shahri, Chilonzor tumani
              </p>
              <p>
                <span className="font-semibold text-emerald-500">Telefon:</span>{" "}
                +998 90 123 45 67
              </p>
              <p>
                <span className="font-semibold text-emerald-500">Email:</span>{" "}
                info@store.uz
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
          >
            <div>
              <label className="mb-1 block text-sm text-zinc-300">
                Ismingiz
              </label>
              <input
                type="text"
                placeholder="Ismingizni kiriting"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-zinc-300">
                Telefon yoki Email
              </label>
              <input
                type="text"
                placeholder="+998 or Email"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              />
            </div>

        

            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
            >
              Yuborish
            </button>
          </form>
        </div>

        <div className="mx-auto mt-12 max-w-5xl border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Store. Barcha huquqlar himoyalangan.
        </div>
      </footer>
    </div>
  );
}

export default App;