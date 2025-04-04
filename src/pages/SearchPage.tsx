import { For } from 'solid-js';
import { createStore } from 'solid-js/store';

import Footer from '~/components/Footer';
import Logo from '~/components/Logo';
import SearchBar from '~/components/SearchBar';

import { STATIC_RESPONSE } from '~/static/Response';

const Tag = (props: { status: 'Sahih' | 'Hasan' | "Da'eef" }) => {
    const { status } = props;

    let color;
    switch (status) {
        case 'Sahih':
            color = 'border-green-800 text-green-800';
            break;
        case 'Hasan':
            color = 'border-lime-600 text-lime-600';
            break;
        case "Da'eef":
            color = 'border-orange-500 text-orange-500';
            break;
    }
    return <span class={`px-2 py-0.5 rounded-full border font-bold text-xs ${color}`}>{status}</span>;
};

const HadithDetail = (props: { data: any }) => {
    const { data } = props;

    return (
        <div class="flex flex-col gap-1 py-2 text-neutral-700">
            <div class="flex gap-2 items-center">
                <h1 class="font-semibold text-teal-800 underline">
                    {data.book.bookName}, Volume {data.volume}, {data.chapter.chapterEnglish}, Hadith # {data.hadithNumber}
                </h1>
                <Tag status={data.status} />
            </div>
            <div>
                <p class="text-justify leading-7">
                    <b>{data.englishNarrator}</b> <br />
                    <i>{data.hadithEnglish}</i>
                </p>
            </div>
        </div>
    );
};

const HadithFilters = () => {
    return (
        <div class="max-w-96 flex-grow flex flex-col gap-1">
            <h1 class="font-bold text-lg">Filters</h1>
            <form action="/search" class="w-full flex flex-col gap-4 py-4 rounded-2xl">
                <div class="flex flex-col gap-1">
                    <label for="hadithNumber" class="pl-1 text-xs">
                        Hadith Number
                    </label>
                    <input
                        id="hadithNumber"
                        name="hadithNumber"
                        type="number"
                        class="w-full px-4 py-2 rounded-2xl focus:outline-none border border-neutral-300 hover:border-neutral-400 focus:border-amber-500 transition-all"
                        placeholder="Enter Hadith Number"
                    />
                </div>
                <div class="flex flex-col gap-1">
                    <label for="book" class="pl-1 text-xs">
                        Book
                    </label>
                    <select
                        id="book"
                        name="book"
                        class="w-full px-4 py-2 rounded-2xl focus:outline-none border border-neutral-300 hover:border-neutral-400 focus:border-amber-500 transition-all">
                        <option value="">Select Book</option>
                        <option value="sahih-bukhari">Sahih Bukhari</option>
                        <option value="sahih-muslim">Sahih Muslim</option>
                        <option value="al-tirmidhi">Jami' Al-Tirmidhi</option>
                        <option value="abu-dawood">Sunan Abu Dawood</option>
                        <option value="ibn-e-majah">Sunan Ibn-e-Majah</option>
                        <option value="sunan-nasai">Sunan An-Nasa`i</option>
                        <option value="mishkat">Mishkat Al-Masabih</option>
                        <option value="musnad-ahmad">Musnad Ahmad</option>
                        <option value="al-silsila-sahiha">Al-Silsila Sahiha</option>
                    </select>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="chapter" class="pl-1 text-xs">
                        Chapter
                    </label>
                    <input
                        id="chapter"
                        name="chapter"
                        type="number"
                        class="w-full px-4 py-2 rounded-2xl focus:outline-none border border-neutral-300 hover:border-neutral-400 focus:border-amber-500 transition-all"
                        placeholder="Enter Chapter Number"
                    />
                </div>
                <div class="flex flex-col gap-1">
                    <label for="status" class="pl-1 text-xs">
                        Status
                    </label>
                    <select
                        id="status"
                        name="status"
                        class="w-full px-4 py-2 rounded-2xl focus:outline-none border border-neutral-300 hover:border-neutral-400 focus:border-amber-500 transition-all">
                        <option value="">Select Status</option>
                        <option value="Sahih">Sahih</option>
                        <option value="Hasan">Hasan</option>
                        <option value="Da`eef">Da`eef</option>
                    </select>
                </div>
                <div class="flex justify-end">
                    <button
                        type="submit"
                        class="px-4 py-2 rounded-2xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white transition-all">
                        Apply Filters
                    </button>
                </div>
            </form>
        </div>
    );
};

const SearchPage = () => {
    const [results] = createStore(STATIC_RESPONSE);

    return (
        <div class="min-w-96 min-h-screen flex flex-col font-serif text-sm text-neutral-700">
            <main class="flex flex-col gap-4">
                <div class="sticky top-0 flex justify-start gap-4 lg:gap-8 items-center px-8 md:px-12 lg:px-24 py-4 lg:py-8 border-b border-b-neutral-200 bg-white transition-all">
                    <div>
                        <Logo size="sm" />
                    </div>
                    <div class="max-w-2xl w-full">
                        <SearchBar />
                    </div>
                </div>
                <div class="flex gap-8 px-4 md:px-8 xl:px-16 2xl:px-32 py-2 transition-all">
                    <div class="max-w-4xl w-full lg:w-2/3 flex flex-col gap-2">
                        <div>
                            <p>
                                Hadiths Found: <b>{results.length}</b>
                            </p>
                        </div>
                        <div class="flex flex-col">
                            <For each={results}>{(item) => <HadithDetail data={item} />}</For>
                        </div>
                    </div>
                    <div class="flex-grow hidden lg:flex justify-start border-l border-neutral-200 pl-8">
                        <HadithFilters />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SearchPage;
