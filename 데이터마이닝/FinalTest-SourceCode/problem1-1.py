import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import copy
import tqdm

class Kmeans:
    def __init__(self, data, k):
        self.df = data
        self.data = np.array(data)
        self.k = k
        self.c = np.array([-1] * len(data))

        self.centroid = self.data[np.random.choice(len(data), size = k)]
        self.centroid_org = copy.deepcopy(self.centroid)

    def distance(self, a, b):
        return np.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)

    def fit(self):
        while True:
            c_org = copy.deepcopy(self.c)
            for i in tqdm.tqdm(range(len(self.data))):
                dis = []
                for j in range(self.k):
                    dis.append(self.distance(self.data[i], self.centroid[j]))
                self.c[i] = np.argmin(dis)

                update_idx = []
                for m in range(len(self.data)):
                    if self.c[m] == np.argmin(dis):
                        update_idx.append(m)
                self.centroid[np.argmin(dis)] = (self.data[update_idx].sum(axis = 0) + self.centroid_org
                                                 [np.argmin(dis)]) / (len(update_idx) + 1)

            flag = True
            for i in range(len(self.c)):
                if c_org[i] != self.c[i]:
                    flag = False
                    break
            if flag is True:
                break
        self.df['class'] = self.c

    def plot(self):
        for cls, grp in self.df.groupby('class'):
            plt.scatter(grp.loc[:][0], grp.loc[:][1], label='cluster ' + str(cls + 1))
        for i, (x, y) in enumerate(self.centroid):
            plt.scatter(x, y, marker='*', c = 'lightgreen', label = 'centroids ' + str(i + 1), s = 200)
        for i, (x, y) in enumerate(self.centroid_org):
            plt.scatter(x, y, marker='o', c='orange', label = 'org_centroids ' + str(i + 1), s = 100)

        plt.grid()
        plt.legend()
        plt.show()


data = pd.read_csv('./dataset/dsdata1.csv', header = None)
k = 3


result = Kmeans(data, k)
result.fit()
result.plot()


# Scikit-learn

# import matplotlib.pyplot as plt
# from sklearn.cluster import KMeans
# import pandas as pd
#
#
# data = pd.read_csv('./dataset/dsdata1.csv')
#
# data.columns = ['x', 'y']
# km = KMeans(n_clusters=3, init='random', n_init=10, max_iter=300, tol=1e-04, random_state=0)
#
# y_km = km.fit_predict(data)
#
# plt.subplot(121)
# plt.scatter(data['x'], data['y'], c='black', marker='o', s=50)
# plt.grid()
#
# plt.subplot(122)
# plt.scatter(data[y_km == 0]['x'], data[y_km == 0]['y'], s=50, c='lightgreen', marker='s', label='cluster 1')
# plt.scatter(data[y_km == 1]['x'], data[y_km == 1]['y'], s=50, c='orange', marker='o', label='cluster 2')
# plt.scatter(data[y_km == 2]['x'], data[y_km == 2]['y'], s=50, c='lightblue', marker='v', label='cluster 3')
# plt.scatter(km.cluster_centers_[:, 0], km.cluster_centers_[:, 1], s=250, marker='*', c='red', label='centroids')
#
# plt.legend()
# plt.grid()
# plt.show()
