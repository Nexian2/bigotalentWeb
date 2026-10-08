<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Styles / Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="font-sans antialiased bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
        <div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
            <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                <header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                    <div class="flex lg:justify-center lg:col-start-2">
                        <svg class="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]" viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M61.8548 14.6253C61.8118 14.3403 61.6873 14.0734 61.4965 13.8569C61.3057 13.6404 61.0573 13.4842 60.7813 13.4072L31.7813 5.40723C31.4243 5.30906 31.0457 5.30906 30.6887 5.40723L1.68869 13.4072C1.41269 13.4842 1.16434 13.6404 0.973516 13.8569C0.782697 14.0734 0.658249 14.3403 0.615193 14.6253C0.572136 14.9103 0.612457 15.2007 0.731215 15.4614C0.849973 15.7221 1.04183 15.9416 1.28369 16.0932L30.2837 34.0932C30.5898 34.2831 30.9416 34.3842 31.3007 34.3842C31.6598 34.3842 32.0116 34.2831 32.3177 34.0932L61.3177 16.0932C61.5596 15.9416 61.7514 15.7221 61.8702 15.4614C61.9889 15.2007 62.0293 14.9103 61.9862 14.6253H61.8548Z" fill="#FF2D20"/>
                            <path d="M60.9999 17.5254L32.0009 35.5254C31.6948 35.7153 31.343 35.8164 30.9839 35.8164C30.6248 35.8164 30.273 35.7153 29.9669 35.5254L0.967896 17.5254V48.5254C0.967896 48.9189 1.12418 49.2963 1.40236 49.5745C1.68053 49.8526 2.0579 50.0089 2.4514 50.0089H59.5164C59.9099 50.0089 60.2873 49.8526 60.5654 49.5745C60.8436 49.2963 60.9999 48.9189 60.9999 48.5254V17.5254Z" fill="#FF2D20"/>
                        </svg>
                    </div>
                    @if (Route::has('login'))
                        <nav class="-mx-3 flex flex-1 justify-end">
                            @auth
                                <a
                                    href="{{ url('/dashboard') }}"
                                    class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </a>
                            @else
                                <a
                                    href="{{ route('login') }}"
                                    class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Log in
                                </a>

                                @if (Route::has('register'))
                                    <a
                                        href="{{ route('register') }}"
                                        class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </a>
                                @endif
                            @endauth
                        </nav>
                    @endif
                </header>

                <main class="mt-6">
                    <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
                        <div class="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]">
                            <div class="relative flex w-full flex-1 items-stretch">
                                <div class="w-full">
                                    <h2 class="text-xl font-semibold text-black dark:text-white">Portal Bi-Got Talent</h2>
                                    <p class="mt-4 text-sm/relaxed">
                                        Selamat datang di sistem manajemen dan pendaftaran lomba Bi-Got Talent SMK Bina Informatika. Sistem ini menyediakan registrasi peserta, kurasi kategori lomba, dan pelacakan status seleksi secara daring.
                                    </p>
                                    <div class="mt-6 flex gap-4">
                                        @auth
                                            <a href="{{ url('/dashboard') }}" class="rounded-md bg-[#FF2D20] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#FF2D20]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2D20]">
                                                Buka Dashboard
                                            </a>
                                        @else
                                            <a href="{{ route('login') }}" class="rounded-md bg-[#FF2D20] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#FF2D20]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2D20]">
                                                Masuk (Log in)
                                            </a>
                                            @if (Route::has('register'))
                                                <a href="{{ route('register') }}" class="rounded-md bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">
                                                    Daftar Siswa
                                                </a>
                                            @endif
                                        @endauth
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] dark:bg-zinc-900 dark:ring-zinc-800">
                            <div class="pt-3 sm:pt-5">
                                <h2 class="text-xl font-semibold text-black dark:text-white">Kategori Perlombaan</h2>
                                <p class="mt-2 text-sm/relaxed">
                                    Tersedia beragam bidang bakat yang dapat diikuti oleh seluruh siswa aktif dengan proses seleksi bertahap.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] dark:bg-zinc-900 dark:ring-zinc-800">
                            <div class="pt-3 sm:pt-5">
                                <h2 class="text-xl font-semibold text-black dark:text-white">Tracking Status Seleksi</h2>
                                <p class="mt-2 text-sm/relaxed">
                                    Peserta dapat memantau perkembangan status pendaftaran secara terstruktur langsung dari dashboard masing-masing.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>

                <footer class="py-16 text-center text-sm text-black dark:text-white/70">
                    Laravel v{{ Illuminate\Foundation\Application::VERSION }} (PHP v{{ PHP_VERSION }})
                </footer>
            </div>
        </div>
    </body>
</html>
