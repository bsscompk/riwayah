import { useSearchParams } from '@solidjs/router';
import { MoveRight, Search } from 'lucide-solid';

const SearchBar = () => {
    const ICON_SIZE = 20;

    const [searchParams] = useSearchParams();

    return (
        <form class="flex gap-4" action="/search">
            <div class="flex-grow relative">
                <label for="query" class="sr-only">
                    Search Hadith
                </label>
                <input
                    id="query"
                    name="query"
                    type="text"
                    class="w-full px-4 py-2 pl-12 rounded-2xl focus:outline-none border border-neutral-300 hover:border-neutral-400 focus:border-amber-500 transition-all"
                    placeholder="Search Hadith"
                    aria-label="Search Hadith"
                    role="searchbox"
                    value={searchParams.query || ''}
                />
                <div class="absolute top-1/2 left-4 transform -translate-y-1/2 text-neutral-500 pointer-events-none">
                    <Search size={ICON_SIZE} />
                </div>
            </div>
            <button
                type="submit"
                class="px-4 py-2 rounded-2xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white transition-all"
                aria-label="Search"
                role="button">
                <MoveRight size={ICON_SIZE} />
                <span class="sr-only">Search</span>
            </button>
        </form>
    );
};

export default SearchBar;
