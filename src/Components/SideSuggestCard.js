import useCountwords from "./useCountwords";

let SideSuggestCard=({videos})=>{
     let {snippet,statistics,id} = videos;
    let{thumbnails,title, channelTitle}= snippet;
    let{likeCount,viewCount}=statistics;
    let likes = useCountwords(likeCount)
    let views = useCountwords(viewCount)
    return(
       <div className="grid grid-cols-12 gap-4 px-1 my-3 items-center">
        <div className="col-span-6">
            <img src={thumbnails?.medium?.url} className="w-80 rounded-lg" alt="" />

            </div>
            <div className="col-span-6">
                <h3 className="text-[14px] font-bold">{title} </h3>
                <p className="text-[14px] text-gray-600 my-1">{channelTitle}</p>
                <div className="flex">
                    <p className="text-[14px] text-gray-600  ">{likes} Likes</p>
                    <p className="text-[14px] text-gray-600  px-3">{views} Views</p>
                </div>
            </div>
        </div>
    )
}
export default  SideSuggestCard;