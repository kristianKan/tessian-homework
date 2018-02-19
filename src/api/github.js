export default {
  getIssues(setIssues, params) {
    let url = new URL('https://api.github.com/repos/atom/atom/issues')

    Object.keys(params)
      .forEach(key => url.searchParams.append(key, params[key]))

    fetch(url)
      .then(response => response.json())
      .then(data => setIssues(data))
  },
}
