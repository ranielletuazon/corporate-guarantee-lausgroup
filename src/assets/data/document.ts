// Scans src/assets/files/{year}/*.pdf at build time.
// No JSON needed — the folder structure itself is the data.

interface GovernanceDocument {
    year: string;
    filename: string; // raw filename, e.g. "annual-report-2025.pdf"
    displayName: string; // cleaned for display, e.g. "Annual Report 2025"
    url: string; // bundled asset URL
}

// Eagerly resolve every PDF under any year folder.
// Query suffix ?url tells Vite to give us the resolved URL string,
// not attempt to parse the binary as a JS module.
const fileModules = import.meta.glob<string>("../files/*/*.pdf", {
    eager: true,
    query: "?url",
    import: "default",
});

/**
 * Converts a raw filename into a readable display title.
 * "board-of-directors-2025.pdf" -> "Board Of Directors 2025"
 */
function toDisplayName(filename: string): string {
    return filename
        .replace(/\.pdf$/i, "")
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function buildDocuments(): GovernanceDocument[] {
    const docs: GovernanceDocument[] = [];

    for (const path in fileModules) {
        // path looks like "../files/2025/annual-report-2025.pdf"
        const match = path.match(/\.\.\/files\/([^/]+)\/([^/]+\.pdf)$/i);
        if (!match) continue;

        const [, year, filename] = match;
        docs.push({
            year,
            filename,
            displayName: toDisplayName(filename),
            url: fileModules[path],
        });
    }

    return docs;
}

const allDocuments = buildDocuments();

/**
 * Documents grouped by year, sorted newest year first,
 * and files within each year sorted alphabetically.
 */
export function getDocumentsByYear(): {
    year: string;
    documents: GovernanceDocument[];
}[] {
    const years = [...new Set(allDocuments.map((d) => d.year))].sort(
        (a, b) => Number(b) - Number(a),
    );

    return years.map((year) => ({
        year,
        documents: allDocuments
            .filter((d) => d.year === year)
            .sort((a, b) => a.displayName.localeCompare(b.displayName)),
    }));
}
