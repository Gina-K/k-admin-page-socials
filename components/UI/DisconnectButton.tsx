export const DisconnectButton = () => {
    return (
        <button
            onClick={() => alert('Social connections was not implemented')}
            className="w-full h-12 rounded border-2 border-indigo-600 text-indigo-600
            hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-600 hover:text-white hover:border-none"
        >
            Disconnect 💔
        </button>
    );
}