export default function Loading() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
