import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

data = pd.read_csv('./dataset/maldata.csv', encoding='utf-8')
X = data.drop(['Class'], axis=1)
y = data['Class']
train_x, test_x, train_y, test_y = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestClassifier()
model.fit(train_x, train_y)
pred_y = model.predict(test_x)
print('Accuracy : %2f' % (accuracy_score(test_y, pred_y)))
