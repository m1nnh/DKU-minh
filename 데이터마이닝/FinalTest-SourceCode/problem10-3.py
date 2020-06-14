import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import recall_score
from sklearn.model_selection import cross_val_score, KFold

data = pd.read_csv('./dataset/maldata.csv', encoding='utf-8')
X = data.drop(['Class'], axis=1)
y = data['Class']
model = RandomForestClassifier()
kfold = KFold(n_splits=5, random_state=42, shuffle=True)
Recall = []

for train_idx, test_idx in kfold.split(data):
    train_x, test_x = X.iloc[train_idx], X.iloc[test_idx]
    train_y, test_y = y.iloc[train_idx], y.iloc[test_idx]
    model.fit(train_x, train_y)
    pred_y = model.predict(test_x)
    print("Recall Score : %2f" % recall_score(test_y, pred_y))
    Recall.append(recall_score(test_y, pred_y))

print('Average Recall Score : %2f' % (sum(Recall) / len(Recall)))
print('Average Recall Score Using Library : %2f' % cross_val_score(model, X, y, cv=5, scoring='recall').mean())
