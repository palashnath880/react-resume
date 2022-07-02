const posts = () => {
    const post_url = "https://palashwp.000webhostapp.com/wp-json/wp/v2/posts";

    let responsePosts = {};

    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        
        try {
            responsePosts = JSON.parse(xhr.responseText);
        } catch {
            responsePosts = {}
        };

    };
    xhr.open('GET',post_url);
    xhr.send();
    return let responsePosts;
}

export default posts;