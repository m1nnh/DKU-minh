
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
import pandas as pd


data = pd.read_csv('./dataset/dsdata1.csv')

data.columns = ['x', 'y']
km = KMeans(n_clusters=5, init='k-means++', n_init=10, max_iter=300, tol=1e-04, random_state=0)

y_km = km.fit_predict(data)

plt.subplot(121)
plt.scatter(data['x'], data['y'], c='black', marker='o', s=50)
plt.grid()

plt.subplot(122)
plt.scatter(data[y_km == 0]['x'], data[y_km == 0]['y'], s=50, c='lightgreen', marker='s', label='cluster 1')
plt.scatter(data[y_km == 1]['x'], data[y_km == 1]['y'], s=50, c='orange', marker='o', label='cluster 2')
plt.scatter(data[y_km == 2]['x'], data[y_km == 2]['y'], s=50, c='lightblue', marker='v', label='cluster 3')
plt.scatter(data[y_km == 3]['x'], data[y_km == 3]['y'], s=50, c='yellow', marker='o', label='cluster 4')
plt.scatter(data[y_km == 4]['x'], data[y_km == 4]['y'], s=50, c='gray', marker='v', label='cluster 5')
plt.scatter(km.cluster_centers_[:, 0], km.cluster_centers_[:, 1], s=250, marker='*', c='red', label='centroids')

plt.legend()
plt.grid()
plt.show()