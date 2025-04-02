import { createSignal } from 'solid-js';

import { MoveRight, Search } from 'lucide-solid';

const SearchPage = () => {
    const [query, setQuery] = createSignal('');

    const handleSearch = (e: any) => {
        e.preventDefault();

        console.log(query());

        setQuery('');
    };

    return (
        <div class="min-w-96 min-h-screen flex flex-col justify-between text-sm text-neutral-700">
            <main class="flex flex-col items-center gap-16 px-6 lg:px-12 py-24 lg:py-48 text-sm transition-all">
                <div class="flex flex-col gap-4 items-center font-serif">
                    <h1 class="font-semibold text-6xl lg:text-7xl text-teal-800 transition-all">Riwayah</h1>
                    <p class="text-neutral-600 italic">Search. Discover. Reflect.</p>
                </div>
                <form class="w-full flex justify-center gap-4" onSubmit={handleSearch}>
                    <div class="flex-grow max-w-xl relative">
                        <label for="search" class="sr-only">
                            Search Hadith
                        </label>
                        <input
                            id="search"
                            name="search"
                            type="text"
                            class="w-full px-4 py-2 pl-12 rounded-2xl focus:outline-none border border-neutral-300 hover:border-neutral-400 focus:border-amber-500 transition-all"
                            placeholder="Search Hadith"
                            value={query()}
                            onInput={(e) => setQuery(e.target.value)}
                            aria-label="Search Hadith"
                            role="searchbox"
                        />
                        <div class="absolute top-1/2 left-4 transform -translate-y-1/2 text-neutral-500 pointer-events-none">
                            <Search size={20} />
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="px-4 py-2 rounded-2xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white transition-all"
                        aria-label="Search"
                        role="button">
                        <MoveRight size={20} />
                        <span class="sr-only">Search</span>
                    </button>
                </form>
            </main>
            <footer class="p-2 flex justify-center">
                <p class="text-xs text-neutral-600">2025 &copy; Barakah Group</p>
            </footer>
        </div>
    );
};

export default SearchPage;
