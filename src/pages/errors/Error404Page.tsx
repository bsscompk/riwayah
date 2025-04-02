import { Component } from 'solid-js';

import { HttpStatusCode } from '@solidjs/start';

import { StatusCodes } from 'http-status-codes';

const Error404Page: Component = () => {
    return (
        <>
            <HttpStatusCode code={StatusCodes.NOT_FOUND} />
            <div class="min-w-96 min-h-screen flex flex-col text-center">
                <div class="flex-grow flex flex-col justify-center gap-3 lg:gap-4 p-2 font-serif text-neutral-700 transition-all">
                    <h1 class="font-bold text-8xl lg:text-9xl text-neutral-800 transition-all">404</h1>
                    <p>The page you are looking for does not exist.</p>
                </div>
                <footer class="p-2 flex justify-center">
                    <p class="text-xs text-neutral-600">2025 &copy; Barakah Group</p>
                </footer>
            </div>
        </>
    );
};

export default Error404Page;
