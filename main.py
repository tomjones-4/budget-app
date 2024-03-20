import pandas as pd


df = pd.read_excel('Test Data.xlsx')

print(df)


amounts = df['Amount']

print(amounts)


# need methods for...
# 1) getting expenses in date range
# 2) getting expenses by category
# 3) getting expenses over a certain amount
# 4) calculating what percentage of budget was spent
# 5) getting expenses by bank



# Working on getting cc data from Chase
# see https://developer.chase.com/products/aggregation-fdx/
# and https://developer.chase.com/products/aggregation-consent/
# The above links are in the Chase developer portal and help explain how to use Chase APIs to get cc data
# It involves having an app that uses OAuth to authorize the user
# I need to explore more to figure out how much of an app I'd need to build to take advantage of this