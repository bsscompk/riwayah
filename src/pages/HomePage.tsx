import Footer from '~/components/Footer';
import Logo from '~/components/Logo';
import SearchBar from '~/components/SearchBar';
import Tagline from '~/components/Tagline';

const HomePage = () => {
    return (
        <div class="min-w-96 min-h-screen flex flex-col justify-between font-serif text-sm text-neutral-700">
            <main class="flex flex-col items-center gap-16 px-6 lg:px-12 py-24 lg:py-48 text-sm transition-all">
                <div class="flex flex-col gap-4 items-center">
                    <Logo />
                    <Tagline />
                </div>
                <div class="max-w-2xl w-full">
                    <SearchBar />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
