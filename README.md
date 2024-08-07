# budget-app

This app will allow users to keep track of how much money they're spending and set limits.

Goals:

- Start by having app available on CLI
- Eventually there should be a GUI where user can interact with some simple controls to get the data they want
- Ex: Set limits, see what % of monthly limit they've spent, see how much they spent in time range, etc.
- Get app working with test data
- Eventually make it so app can read data from credit card statement
- This should work for my credit cards, at least
- Ideally, individual users of app can authenticate themselves and get their own cc data
- Reading data from Venmo would be a nice addition
- I think the best way to go about this will be using Plaid - see https://www.youtube.com/watch?v=sGBvKDGgPjc
- Change storage from local memory to persistent, secure storage (maybe SQLite or some other SQL solution)

Stretch goals:

- This might be a big enough idea to be its own project entirely, but it would be cool to have analytics performed on the cc data and credit cards recommended based on spending habits
- This would involve analyzing data about credit cards (such as APR, sign-up fees, percentages back, points, etc.) from online and making a recommendation. This could be a good opportunity to try using some machine learning or predictive analytics.

TODO:

- Need different tabs for the different banks users link from Plaid
- There should also be an "All" tab that shows the data from all the user's linked banks and accounts
- Need to make it so different Context components can be available throughout application so that
  multiple different banks can be used
  - Might be best to do this via multiple App components
- Need to add some kind of state that tracks how many App components there are
- On second thought, I think multiple QuickstartProvider components might be a better way to do it
