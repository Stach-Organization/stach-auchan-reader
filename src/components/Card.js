const Card = ({name, sum}) => {
    return (
        <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg w-64 mr-2">
                <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-gray-500 uppercase font-bold text-xs">
                                {name}
                            </h5>
                            <span class="font-semibold text-xl text-gray-800">
                                {sum}€
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card;