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
                <div class="max-w-7xl flex flex-col gap-2 px-4 md:px-24 lg:px-48 xl:px-64 py-2 transition-all">
                    <div>
                        <p>
                            Hadiths Found: <b>{results.length}</b>
                        </p>
                    </div>
                    <div class="flex flex-col">
                        <For each={results}>{(item, index) => <HadithDetail data={item} />}</For>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SearchPage;
