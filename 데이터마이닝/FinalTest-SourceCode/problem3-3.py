from sklearn.tree import DecisionTreeClassifier
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

iris = datasets.load_iris()
X = iris.data
y = iris.target
print(X)
train_x, test_x, train_y, test_y = train_test_split(X, y, test_size=0.2, random_state=42)
for i in range(2, 6):
    for j in range(2, 7):
        tree = DecisionTreeClassifier(max_depth=i, max_leaf_nodes=j,
                                      random_state=42)
        tree.fit(X, y)
        y_pred = tree.predict(test_x)
        print('Max Depth : %i, Max Leaf Nodes : %i Accuracy : %2f' % (i, j, accuracy_score(test_y, y_pred)))
