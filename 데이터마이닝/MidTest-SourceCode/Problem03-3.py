import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


def predict(w, b, x):
    if (np.dot(w, x.T) + b) > 0:
        return 1
    else:
        return 0


def predict_accuracy(w, b, x, y):
    pred = []
    accuracy = 0

    for i in range(len(x)):
        pred.append(predict(w, b, x[i]))

    for i in range(len(x)):
        if y[i] == pred[i]:
            accuracy += 1

    return accuracy / len(x)


def perceptron(train_data, l):
    start = 50
    data = np.array(train_data)
    x, y = data[:, 1:], data[:, 0]
    w = [0] * len(x[0])
    b = 0
    error = []

    for i in range(start):
        for j in range(len(data)):
            update = l * (y[j] - predict(w, b, x[j]))
            w += update * x[j]
            b += update

        if i % 10 == 0:
            error.append(1 - predict_accuracy(w, b, x, y))

    return w, b, error


train_data = pd.read_csv('./dm_data2/prob3_data.tra')
train_data = np.array(train_data)

x, y = train_data[:, 1:], train_data[:, 0]
w, b, error = perceptron(train_data, 0.1)

print('w : {0}, b : {1}'.format(w, b))

X = np.arange(0, 50, 10)
plt.plot(X, error)
plt.xticks(np.arange(0, 50, 10))
plt.xlabel('Iterations')
plt.ylabel('Error Rate')
plt.show()
