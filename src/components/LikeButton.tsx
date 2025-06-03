export default function LikeButton() {
  return (
    <button className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 9V5a3 3 0 00-3-3H5a2 2 0 00-2 2v14a2 2 0 002 2h6a3 3 0 003-3v-4m0-4l4.586-4.586a2 2 0 012.828 0l1.414 1.414a2 2 0 010 2.828L19.414 9M14 9l4.586-4.586a2 2 0 012.828 0l1.414 1.414a2 2 0 010 2.828L19.414 9"
        />
      </svg>
      Like
    </button>
  );
}