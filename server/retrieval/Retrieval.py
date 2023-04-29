try:
    from .utils import *
    from .ImageTransformation import ImageTransformation
    from .FeatureExtraction import FeatureExtraction
except: 
    from utils import *
    from ImageTransformation import ImageTransformation
    from FeatureExtraction import FeatureExtraction

class Retrieval:
    def __init__(self, root_dir='upload/', vector='vectors/vectors.pkl', path='vectors/paths.pkl'):
        self.root_dir = root_dir
        self.model = get_model_instance()
        self.transformer = ImageTransformation((224,224))
        self.ft_ex = FeatureExtraction(self.model, self.transformer)
        self.vectors_file = vector
        self.paths_file = path

    def query(self, img_path):
        img_vector = self.ft_ex(img_path)
        with open(self.vectors_file, 'rb') as f:
            vectors = pickle.load(f)
        with open(self.paths_file, 'rb') as f:
            paths = pickle.load(f)
        distance = np.linalg.norm(img_vector - vectors, axis=1)
        idx = np.argsort(distance)
        neighbors = {paths[i]: round(1-distance[i],4) for i in idx}
        return neighbors

    def training(self):
        img_list = image_path_maker(self.root_dir)
        vectors = []
        paths = []
        for i in img_list:
            img_vector = self.ft_ex(i)
            vectors.append(img_vector)
            paths.append(i)

        # save to database
        with open(self.vectors_file, 'wb') as f:
            pickle.dump(vectors, f)
        with open(self.paths_file, 'wb') as f:
            pickle.dump(paths, f)

    def add_user(self, username):
        ext = ['.jpg', '.png']
        dir = os.path.join(self.root_dir, username)
        img_list = [os.path.join(dir, i) for i in os.listdir(dir) if any(j in i for j in ext)]
        vectors, paths = [], []
        with open(self.vectors_file, 'rb') as f:
            vectors = pickle.load(f)
        with open(self.paths_file, 'rb') as f:
            paths = pickle.load(f)
        for i in img_list:
            img_vector = self.ft_ex(i)
            vectors.append(img_vector)
            paths.append(i)

        with open(self.vectors_file, 'wb') as f:
            pickle.dump(vectors, f)
        with open(self.paths_file, 'wb') as f:
            pickle.dump(paths, f)


if __name__ == '__main__':
    retrieval = Retrieval('../upload/', '../vectors/vectors.pkl' ,'../vectors/paths.pkl')
    retrieval.training()
