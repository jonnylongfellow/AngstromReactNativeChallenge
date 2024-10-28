# Angstrom React Native Challenge

This project contains a starter setup for a React Native Project.
The goal of this challenge is to create a simple app that displays a list of Premier League teams.
The list of teams should appear after launching the app and should be fetched from the provided API.

## API Documentation

The domain for the API is `https://www.thesportsdb.com/`.

The API endpoint for all league details is `/api/v1/json/3/all_leagues.php`

The API endpoint to fetch the list of Premier League teams is `/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League`, or alternatively you can use the league ID provided by the previous call, for example: `/api/v1/json/3/lookup_all_teams.php?id=4328`

## Task

- We would like you to create a simple app that displays a list of Leagues. The design of the screen won't be assessed, but each League should display the League name as a minimum.
- The user should be able to sort the list by alphabetical order and reverse alphabetical order.
- When a league is pressed the app should navigate to a new screen that displays a list of teams for that league. The design of the screen won't be assessed, but each team should follow the same sorting rules as the List of Leagues page.
- Where appropriate, please add unit tests to your code.

Feel free to use any libraries that you think are useful in this challenge.

Good luck!

/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League
