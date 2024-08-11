
export default function Card({front,back,index}){
    return(
        <div className="w-1/4 bg-blue-400 gap-2 p-4 text-white flex flex-col">
            <h4 className="w-full text-center">
                {index}
            </h4>
            <h1 className="w-full text-center">
                {front}
            </h1>
            <h2 className="w-full text-center">
                {back}
            </h2>
            <button>
                Delete
            </button>
        </div>
    )
}