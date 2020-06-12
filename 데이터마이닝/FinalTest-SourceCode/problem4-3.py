from sklearn import datasets
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.svm import SVC

cancer = datasets.load_breast_cancer()
X = cancer.data
y = cancer.target
train_x, test_x, train_y, test_y = train_test_split(X, y, test_size=0.3, random_state=42)
for C in np.arange(1, 10, 1):
    model = SVC(kernel='rbf', C=C)
    model.fit(train_x, train_y)
    pred_y = model.predict(test_x)
    print("C : %1f, Kernel : rbf, Accuracy : %2f " % (C, accuracy_score(test_y, pred_y)))
