import numpy as np
import pandas as pd

train_data = pd.read_csv('./dm_data2/prob_bayes.tra')
test_data = pd.read_csv('./dm_data2/prob_bayes.tes')

train_data['X1X2'] = train_data['X1'] * train_data['X2']

grouped = train_data.groupby(train_data['# cls'])
mean_x1, var_x1 = grouped['X1'].mean(), grouped['X1'].var()
mean_x2, var_x2 = grouped['X2'].mean(), grouped['X2'].var()
mean_x1x2, var_x1x2 = grouped['X1X2'].mean(), grouped['X1X2'].var()

sigma = np.array([np.eye(2)] * 3)
mean = np.array([np.zeros(2)] * 3)

for i in range(len(mean_x1)):
    sigma[i, 0, 0] = var_x1[i]
    sigma[i, -1, -1] = var_x2[i]
    sigma[i, 0, 1] = mean_x1x2[i] - (mean_x1[i] * mean_x2[i])
    sigma[i, 1, 0] = mean_x1x2[i] - (mean_x1[i] * mean_x2[i])

    mean[i, 0] = mean_x1[i]
    mean[i, -1] = mean_x2[i]

for i in range(len(mean)):
    print('class {0} : (x1, x2) mean = ({1}, {2})'.format(i, mean[i][0], mean[i][1]))

for i in range(len(sigma)):
    print('class {0} : var = {1}'.format(i, sigma[i]))