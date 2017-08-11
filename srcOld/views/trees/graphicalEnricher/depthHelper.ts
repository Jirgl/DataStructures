export function calculateDepth(indexOfNode: number): number {
    let depth = 0;
    let currentIndex = indexOfNode;

    while (currentIndex > 0) {
        currentIndex = Math.floor((currentIndex - 1) / 2);
        depth++;
    }

    return depth;
}
