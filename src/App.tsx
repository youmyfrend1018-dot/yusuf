import { SignInButton, SignUpButton, UserButton } from "@clerk/react";
import React from "react";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-black font-sans text-zinc-100">
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
                className="cursor-pointer rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200"
              >
                Kirish
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button
                type="button"
                className="cursor-pointer rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950"
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
              alt="Koinot manzarasi"
              className="h-32 w-full object-cover"
            />
            <h3 className="mt-2 text-base font-normal">Koinot To'plami</h3>
            <p className="mt-1 text-sm text-gray-400">
              Yuqori sifatli kosmik dizayn va eksklyuziv ko'rinish.
            </p>
            <button
              type="button"
              className="mt-3 border border-gray-400 px-3 py-1 text-sm"
            >
              Ko'rish
            </button>
          </div>

          <div className="border border-gray-500 bg-gray-800 p-4">
            <img
              src="https://4kwallpapers.com/images/wallpapers/gargantua-black-5200x3250-9611.jpg"
              alt="Gargantua qora tuynuk"
              className="h-32 w-full object-cover"
            />
            <h3 className="mt-2 text-base font-normal">Gargantua Pro</h3>
            <p className="mt-1 text-sm text-gray-400">
              4K aniqlikdagi maxsus qora tuynuk tasviri va modeli.
            </p>
            <button
              type="button"
              className="mt-3 border border-gray-400 px-3 py-1 text-sm"
            >
              Ko'rish
            </button>
          </div>

          <div className="border border-gray-500 bg-gray-800 p-4">
            <img
              src="https://4kwallpapers.com/images/wallpapers/gargantua-black-4480x2520-9659.jpg"
              alt="Qora tuynuk nuri"
              className="h-32 w-full object-cover"
            />
            <h3 className="mt-2 text-base font-normal">Orbit X</h3>
            <p className="mt-1 text-sm text-gray-400">
              Zamonaviy uslub va yorqin ranglar uyg'unligidagi mahsulot.
            </p>
            <button
              type="button"
              className="mt-3 border border-gray-400 px-3 py-1 text-sm"
            >
              Ko'rish
            </button>
          </div>

          <div className="border border-gray-500 bg-gray-800 p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5k5BQhFEoWiCejSUcuoQkVSpU_fwuMeYH6CObpKhHufd8zwroG69xao&s=10"
              alt="Abstrakt san'at"
              className="h-32 w-full object-cover"
            />
            <h3 className="mt-2 text-base font-normal">Neon Art</h3>
            <p className="mt-1 text-sm text-gray-400">
              Minimalist interyer va ish stoli uchun maxsus dizayn.
            </p>
            <button
              type="button"
              className="mt-3 border border-gray-400 px-3 py-1 text-sm"
            >
              Ko'rish
            </button>
          </div>

          <div className="border border-gray-500 bg-gray-800 p-4">
            <img
              src="https://4kwallpapers.com/images/wallpapers/women-romantic-2880x1800-25570.jpg"
              alt="Digital portret"
              className="h-32 w-full object-cover"
            />
            <h3 className="mt-2 text-base font-normal">Studio Edition</h3>
            <p className="mt-1 text-sm text-gray-400">
              Professional rassomlar tomonidan yaratilgan raqamli asar.
            </p>
            <button
              type="button"
              className="mt-3 border border-gray-400 px-3 py-1 text-sm"
            >
              Ko'rish
            </button>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl space-y-4">
          <div className="grid grid-cols-1 gap-4 border border-gray-500 bg-gray-800 p-4 md:grid-cols-2">
            <img
              src="https://4kwallpapers.com/images/wallpapers/gargantua-black-5200x3250-9611.jpg"
              alt="Gargantua maxsus kolleksiya"
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-base font-normal">
                Eksklyuziv Koinot Kolleksiyasi
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Ushbu bo'limda siz eng yuqori aniqlikdagi va noyob dizayndagi
                mahsulotlarni topishingiz mumkin. Har bir detal sifat va
                zamonaviy ko'rinish asosida tayyorlangan.
              </p>
              <button
                type="button"
                className="mt-3 w-fit border border-gray-400 px-3 py-1 text-sm"
              >
                Batafsil
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 border border-gray-500 bg-gray-800 p-4 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="text-base font-normal">
                Tezkor Yetkazib Berish va Kafolat
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Barcha buyurtmalar qisqa muddat ichida ko'rsatilgan manzilga
                yetkazib beriladi. Mijozlarimiz uchun 24/7 qo'llab-quvvatlash
                xizmati va rasmiy sifat kafolati mavjud.
              </p>
              <button
                type="button"
                className="mt-3 w-fit border border-gray-400 px-3 py-1 text-sm"
              >
                Buyurtma berish
              </button>
            </div>
            <img
              src="https://4kwallpapers.com/images/wallpapers/gargantua-black-4480x2520-9659.jpg"
              alt="Tezkor yetkazib berish"
              className="h-48 w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          <div className="border border-gray-500 bg-gray-800 p-4">
            <h3 className="text-base font-normal">Original Sifat</h3>
            <p className="mt-1 text-sm text-gray-400">
              Barcha mahsulotlar tekshiruvdan o'tgan va rasmiy kafolatga ega.
            </p>
          </div>

          <div className="border border-gray-500 bg-gray-800 p-4">
            <h3 className="text-base font-normal">Qulay To'lov</h3>
            <p className="mt-1 text-sm text-gray-400">
              Buyurtmani olgandan so'ng naqd pul yoki karta orqali to'lang.
            </p>
          </div>

          <div className="border border-gray-500 bg-gray-800 p-4">
            <h3 className="text-base font-normal">Doimiy Aloqa</h3>
            <p className="mt-1 text-sm text-gray-400">
              Operatorlarimiz har qanday savolingizga tezkor javob beradi.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl space-y-4">
          <div className="border border-gray-500 bg-gray-800 p-4">
            <h3 className="text-base font-normal">
              Yetkazib berish qancha vaqt oladi?
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Buyurtmalar shahar ichida 1 kun, viloyatlarga esa 2-3 ish kuni
              davomida yetkazib beriladi.
            </p>
          </div>

          <div className="border border-gray-500 bg-gray-800 p-4">
            <h3 className="text-base font-normal">
              Mahsulotni almashtirish mumkinmi?
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Ha, agar mahsulotda biror kamchilik aniqlansa 7 kun ichida
              yangisiga almashtirib beriladi.
            </p>
          </div>
        </div>
      </div>

      <section className="relative mt-16 flex min-h-screen w-full items-center justify-center overflow-hidden border-t">
        <video
          src="https://www.pexels.com/download/video/36527017/"
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-6xl">
            Bizni tanlaganingiz uchun rahmat!
          </h2>
          <p className="mt-4 text-base text-zinc-200 sm:text-xl">
            Sizning ishonchingiz biz uchun muhim. Yana tashrif buyuring!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black px-4 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Biz bilan bog'laning
            </h2>
            <p className="mt-3 text-sm text-zinc-400 sm:text-base">
              Savollaringiz yoki takliflaringiz bo'lsa, quyidagi ma'lumotlar
              orqali murojaat qilishingiz mumkin.
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

          <form className="space-y-4 rounded-2xl border border-zinc-800 bg-black p-6">
            <div>
              <label className="mb-1 block text-sm text-zinc-300">
                Ismingiz
              </label>
              <input
                type="text"
                placeholder="Ismingizni kiriting"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-zinc-300">
                Telefon yoki Email
              </label>
              <input
                type="text"
                placeholder="+998 or Email"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <button
              type="button"
              className="w-full cursor-pointer rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950"
            >
              Yuborish
            </button>
          </form>
        </div>

        <div className="mx-auto mt-12 max-w-5xl border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500">
          Store
        </div>
      </footer>
    </div>
  );
}

export default App;