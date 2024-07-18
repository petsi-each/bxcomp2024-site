import ImageG from "./ImageG";

export default function Header() {
    const navLinks = [
        { title: 'Início', path: '/' },
        { title: 'Regulamento', path: '/' }, // TODO: Add path
        { title: 'Etapas & Desafios', path: '/' }, // TODO: Add path
        { title: 'Ranking & Grupos', path: '/' }, // TODO: Add path
        { title: 'O que é o BXComp?', path: '/' }, // TODO: Add path
        { title: 'Anos Anteriores', path: '/' }, // TODO: Add path
    ]

    return (
        <header className="px-8 m-4 flex items-center justify-between">
            <a href="/">
                <ImageG src="/logoBxcomp.svg" alt="Logo do BXComp 2024" width="142" height="96"/>
            </a>
            <nav className="flex justify-end space-x-8 text-verdeBX">
                {navLinks.map(link => (
                    <a key={link.path} href={link.path}>{link.title}</a>
                ))}
            </nav>
        </header>
    );
}