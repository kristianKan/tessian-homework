export default {
  getIssues(setIssues, page, options) {
    fetch(
      'https://api.github.com/repos/atom/atom/issues' + '?page=' + page,
      options
    )
      .then(response => response.json())
      .then(data => {
        setIssues(data)
      })
  },
}
