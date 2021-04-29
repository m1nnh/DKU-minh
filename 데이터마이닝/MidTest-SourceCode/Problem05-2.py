import numpy as np
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier

train_data = pd.read_csv('./dm_data2/prob5_moons.tra')
test_data = pd.read_csv('./dm_data2/prob5_moons.tes')

train_data = np.array(train_data)
test_data = np.array(test_data)

train_x, train_y = train_data[:, 1:], train_data[:, 0].reshape(-1, 1)
test_x, test_y = test_data[:, 1:], test_data[:, 0].reshape(-1, 1)

for i in range(1, 6, 2):
    model = KNeighborsClassifier(n_neighbors=i)  # 1, 3, 5
    model.fit(train_x, train_y)
    print('K = {0}'.format(i))
    print('Train Accuracy : {0}'.format(model.score(train_x, train_y)))
    print('Test Accuracy : {0}'.format(model.score(test_x, test_y)))
