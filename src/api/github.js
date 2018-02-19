export default {
  /**
   * - Load issues from the atom repo.
   *   - Set pageCount in vuex
   *   - Set issues in vuex
   */
  getIssues(setPageCount, setIssues, params) {
    let url = new URL('https://api.github.com/repos/atom/atom/issues')

    /** Append params to the url string */
    Object.keys(params)
      .forEach(key => url.searchParams.append(key, params[key]))

    fetch(url)
      .then(response => {
        /** Get the last page number from response headers */
        var links = parseLinkHeader(response.headers.get('Link'))
        var lastPage = parseInt(links.last.split('page=')[1])
        setPageCount(lastPage)
        return response.json()
      })
      .then(data => setIssues(data))
  }
}

/**
 * A useful code snippet from https://gist.github.com/niallo/3109252
 */
function parseLinkHeader(header) {
  if (header.length === 0) {
    throw new Error("input must not be of zero length");
  }

  // Split parts by comma
  var parts = header.split(',');
  var links = {};
  // Parse each part into a named link
  for (var i=0; i<parts.length; i++) {
    var section = parts[i].split(';');
    if (section.length !== 2) {
      throw new Error("section could not be split on ';'");
    }
    var url = section[0].replace(/<(.*)>/, '$1').trim();
    var name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  }
  return links;
}

