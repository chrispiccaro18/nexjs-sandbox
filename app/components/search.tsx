export default function Search() {
    return (
        <div className="flex items-center gap-x-4">
            <h2 className="text-xl font-bold text-red-600">How long is playtime?</h2>
            <input
                className="placeholder:italic placeholder:text-slate-400 text-xs"
                placeholder="Click below or enter here..."
                type="text"
                name="search"
            />
        </div>
    )
}