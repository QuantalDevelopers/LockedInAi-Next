// TableOfContents.tsx
interface TableOfContentsProps {
  headings: Array<{
    id: string;
    text: string;
  }>;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export function TableOfContents({
  headings,
  activeSection,
  scrollToSection,
}: TableOfContentsProps) {
  if (headings.length === 0) return null;

  return (
    <nav className="fixed left-8 top-52 hidden w-64 rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm lg:block">
      <h2 className="mb-4 text-sm font-semibold text-neutral-200">
        Table of Contents
      </h2>
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block text-sm transition-colors duration-200 hover:text-white ${
                activeSection === heading.id
                  ? "font-medium text-white"
                  : "text-neutral-400"
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(heading.id);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
