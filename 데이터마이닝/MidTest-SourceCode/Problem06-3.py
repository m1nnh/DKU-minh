import numpy as np
import pandas as pd
import scipy.stats as sp


def cal_mean_var(train_data):
    train_data['X1X2'] = train_data['X1'] * train_data['X2']
    grouped = train_data.groupby(train_data['# cls'])
    mean_x1, var_x1 = grouped['X1'].mean(), grouped['X1'].var()
    mean_x2, var_x2 = grouped['X2'].mean(), grouped['X2'].var()

    sigma = np.eye(3)
    mean = np.array([np.zeros(2)] * 3)

    for i in range(len(mean_x1)):
        mean[i, 0], mean[i, -1] = mean_x1[i], mean_x2[i]

    return mean, sigma


def predict(data_x, data_y, mean, sigma):
    pred_zero = (sp.multivariate_normal.pdf(data_x, mean=mean[0], cov=sigma[0, :2], allow_singular=True))
    pred_first = (sp.multivariate_normal.pdf(data_x, mean=mean[1], cov=sigma[1, :2], allow_singular=True))
    pred_second = (sp.multivariate_normal.pdf(data_x, mean=mean[2], cov=sigma[2, :2], allow_singular=True))

    pred_y = []

    for i, j, k in zip(pred_zero, pred_first, pred_second):
        if i == max(i, j, k):
            pred_y.append(0)
        elif j == max(i, j, k):
            pred_y.append(1)
        elif k == max(i, j, k):
            pred_y.append(2)

    accuracy = 0

    for i in range(len(pred_y)):
        if pred_y[i] != data_y[i]:
            accuracy += 1

    return accuracy


train_data = pd.read_csv('./dm_data2/prob_bayes.tra')
test_data = pd.read_csv('./dm_data2/prob_bayes.tes')

train_x, train_y = train_data[['X1', 'X2']], train_data['# cls']
test_x, test_y = test_data[['X1', 'X2']], test_data['# cls']

mean, sigma = cal_mean_var(train_data)

print('Train misses count : {0}'.format(predict(train_x, train_y, mean, sigma)))
print('Test misses count : {0}'.format(predict(test_x, test_y, mean, sigma)))
