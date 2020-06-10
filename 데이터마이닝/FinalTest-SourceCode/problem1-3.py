
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
import pandas as pd


data = pd.read_csv('./dataset/dsdata2.csv')

data.columns = ['x', 'y']

distortions = []

for i in range(1, 11):
    km = KMeans(n_clusters=i, init='random', n_init=10, max_iter=300, tol=1e-04, random_state=0)
    km.fit(data)
    distortions.append(km.inertia_)

plt.plot(range(1, 11), distortions, marker='o')
plt.xlabel('Number of clusters')
plt.ylabel('Distortion')
plt.axvline(3, color='red', linestyle='--', linewidth=4)
plt.title("Finding the optimal $k$")
plt.show()