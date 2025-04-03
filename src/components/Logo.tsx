const Logo = ({ size = 'lg' }) => {
    const sizes: any = {
        sm: 'text-2xl lg:text-3xl',
        md: 'text-4xl lg:text-5xl',
        lg: 'text-6xl lg:text-7xl',
        xl: 'text-8xl lg:text-9xl',
    };

    return (
        <a href="/" class={`font-serif font-semibold ${sizes[size] || sizes.lg} text-teal-800 transition-all`}>
            Riwayah
        </a>
    );
};

export default Logo;
