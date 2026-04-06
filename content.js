function hideElements() {
    document.querySelectorAll('[aria-label="Live Channels"], [aria-label="Viewers Also Watch"]').forEach(element => {
        element.remove()
    })
}

// Run once on load
hideElements()

// Re-run whenever the DOM changes 
const observer = new MutationObserver(hideElements)
observer.observe(document.body, { childList: true, subtree: true })



