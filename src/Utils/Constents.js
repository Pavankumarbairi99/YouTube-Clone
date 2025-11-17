const api_Key =
    import.meta.env.MY_KEY
export const youtube_Apis = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + api_Key;
export const Liked_Apis = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=' + api_Key;
export const Suggestion_Api = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const Comments_youtube = "https://www.googleapis.com/youtube/v3/comments?part=snippet&NZbmcl0QUaU=COMMENT_ID&maxResults=20&key=" + api_Key;
export const search_key = "&key=" + api_Key;
export const search_Youtube_Videos = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="
export const side_Suggest_videos = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="
export const side_Suggest_videos_Key = "&key=" + api_Key;