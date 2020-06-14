import pandas as pd
from sklearn.preprocessing import MinMaxScaler, MaxAbsScaler, StandardScaler

id = [i for i in range(1, 21)]
score = [42, 47, 59, 27, 84, 49, 72, 43, 73, 59,
         52, 49, 89, 27, 54, 49, 92, 45, 37, 95]
data = pd.DataFrame({'ID': id, 'Score': score})
MM_Scaler = MinMaxScaler()
MA_Scaler = MaxAbsScaler()
Std_Scaler = StandardScaler()
data1 = MM_Scaler.fit_transform(data['Score'].values.reshape(-1, 1))
data2 = MA_Scaler.fit_transform(data['Score'].values.reshape(-1, 1))
data3 = Std_Scaler.fit_transform(data['Score'].values.reshape(-1, 1))
data1 = pd.DataFrame({'ID': id, 'Score': data1.flatten()})
data2 = pd.DataFrame({'ID': id, 'Score': data2.flatten()})
data3 = pd.DataFrame({'ID': id, 'Score': data3.flatten()})
print(data1)
print(data2)
print(data3)
