import pandas as pd
import numpy as np


def predict(w, b, x):
    if (np.dot(w, x) + b) > 0:
        return 1
    else:
        return -1


def train_model(train_data, l):
    start = 10
    data = np.array(train_data)

    x, y = data[:, 1:], data[:, 0]
    b = 0
    w = [0] * len(x[0])
    R = 0

    for i in range(data.shape[0]):
        tmp = np.sqrt(x[i][0] ** 2 + x[i][1] ** 2)
        if R < tmp:
            R = tmp

    for i in range(start):
        for j in range(len(data)):
            if y[j] * (np.dot(w, x[j].T) + b) <= 0:
                w = w + l * y[j] * x[j]
                b = b + l * y[j] * (R ** 2)
    return w, b


def predict_accuracy(w, b, x, y):

    pred = []
    for i in range(len(x)):
        pred.append(predict(w, b, x[i]))

    accuracy = 0
    for i in range(len(x)):
        if y[i] == pred[i]: accuracy += 1

    return accuracy / len(x)


test_data = pd.read_csv('./dm_data2/prob1_data.tes')
test_data = np.array(test_data)

x, y = test_data[:, 1:], test_data[:, 0]
w, b = train_model(test_data, 0.01)

print('Test accuracy : {0}'.format(predict_accuracy(w, b, x, y)))
