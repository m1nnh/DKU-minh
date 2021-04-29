import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

train_data = pd.read_csv('./dm_data2/reg4_data.tra')
test_data = pd.read_csv('./dm_data2/reg4_data.tes')

train_data = np.array(train_data)
test_data = np.array(test_data)

train_x, train_y = train_data[:, 0].reshape(-1, 1), train_data[:, 1].reshape(-1, 1)
test_x, test_y = test_data[:, 0].reshape(-1, 1), test_data[:, 1].reshape(-1, 1)

model = LinearRegression()
model.fit(train_x, train_y)

print("Train : {0}".format(model.score(train_x, train_y)))
print("Test : {0}".format(model.score(test_x, test_y)))