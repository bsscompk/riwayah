// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

export default createHandler(() => (
    <StartServer
        document={({ assets, children, scripts }) => (
            <html lang="en">
                <head>
                    <title>Riwayah &mdash; Search. Discover. Reflect.</title>

                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta
                        name="description"
                        content="Riwayah is a powerful Hadith search engine designed to help you explore, discover, and reflect on authentic Hadith collections with ease."
                    />
                    <meta name="keywords" content="Hadith, Islam, Sunnah, Riwayah, Hadith search, Islamic teachings" />
                    <meta name="author" content="Barakah Group" />

                    {assets}
                </head>
                <body>
                    <div id="app">{children}</div>

                    {scripts}
                </body>
            </html>
        )}
    />
));
