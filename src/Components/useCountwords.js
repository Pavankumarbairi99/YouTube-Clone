let useCountwords = (value) => {
    let views = value;
    if (views >= 100000000 && views < 1000000000) {
        views = views.slice(0, 3) + "M";
    } else if (views >= 10000000 && views < 100000000) {
        views = views.slice(0, 2) + "M";
    } else if (views >= 1000000 && views < 10000000) {
        views = views.slice(0, 1) + "." + views[1] + "M";
    } else if (views >= 100000 && views < 1000000) {
        views = views.slice(0, 3) + "K";
    } else if (views >= 10000 && views < 100000) {
        views = views.slice(0, 2) + "." + views[3] + "K";
    } else if (views >= 1000 && views < 10000) {
        views = views[0] + "." + views[1] + "K";
    } else {
        views = views = value;
    }
    return views
}
export default useCountwords;