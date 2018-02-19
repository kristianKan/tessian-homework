# Tessian Homework
A homework assignment for Tessian

This little application implements a simple call to github API to fetch issues in Atom's repository. The issues can be filtered using input fields in the form.

## Technical considerations
The application was built using [vue-cli](https://github.com/vuejs/vue-cli) (still in beta), which is not something that should be used in production, but it makes prototyping faster. I have also used Vuex, a state management system. While in an application this small, it is not necessary, by now I'm very used to having one. Besides, it makes life easier in the long run.

I have never used the Github API before, so certain things were not as straightforward as I tought they would be. Pagination was one of them. My approach in the end was to get the total page count and, based on the page size, estimate the total number of records.

## Room for improvement
The implemented filter is very naive, but it does the trick. It would make sense to preload all the milestones, labels, and assignees and display matches in the dropdown as the user types in the input box. 

There are no tests, mostly because I was already taking too long with this assignment, but also I believe that tests should be meaningful. The best thing to do here would be to set up behavioural tests, but that's a whole other beast.
