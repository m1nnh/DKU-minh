import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv('./dm_data2/prob3_data.tra')
scatter = plt.scatter(data['X1'], data['X2'], c=data['# cls'])
print(data[['X1', 'X2']].groupby(data['# cls']).count())
plt.show()
